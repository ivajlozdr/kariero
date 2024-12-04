const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const db = require("./database");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
require("dotenv").config();

const whitelist = ["http://localhost:5173"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));

let verificationCodes = {};

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // or any other email service
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS // Your email password
  },
  debug: true,
  logger: true
});

// Signup Route
app.post("/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  db.checkEmailExists(email, (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ error: "Грешка в query-то към базата данни" });

    if (results.length > 0) {
      return res
        .status(400)
        .json({ error: "Профил с този имейл вече съществува." });
    }

    const verificationCode = crypto.randomInt(100000, 999999).toString();

    verificationCodes[email] = {
      code: verificationCode,
      firstName,
      lastName,
      password,
      expiresAt: Date.now() + 15 * 60 * 1000
    };

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Код за регистрация",
      html: `<p>Вашият код за регистрация е: <strong>${verificationCode}</strong>. Кодът е активен за 15 минути.</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error)
        return res
          .status(500)
          .json({ error: "Имейлът не се изпрати успешно." });
      res.json({ message: "Кодът за регистрация се изпрати успешно!" });
    });
  });
});

app.post("/verify-email", (req, res) => {
  const { email, verificationCode } = req.body;

  const storedData = verificationCodes[email];
  if (!storedData) {
    return res
      .status(400)
      .json({ error: "Не е намерен код за потвърждение за този имейл." });
  }

  if (Date.now() > storedData.expiresAt) {
    delete verificationCodes[email];
    return res.status(400).json({ error: "Кодът за потвърждение е изтекъл." });
  }

  if (storedData.code !== verificationCode) {
    return res.status(400).json({ error: "Невалиден код за потвърждение." });
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(storedData.password, salt);

  db.createUser(
    storedData.firstName,
    storedData.lastName,
    email,
    hashedPassword,
    (err, result) => {
      if (err) return res.status(400).json({ error: err.message });

      delete verificationCodes[email];
      res.json({ message: "Успешно регистриран профил!" });
    }
  );
});

app.post("/resend-code", (req, res) => {
  const { email } = req.body;

  const storedData = verificationCodes[email];
  if (!storedData) {
    return res.status(400).json({ error: "Имейлът не е намерен в системата." });
  }

  const newVerificationCode = crypto.randomInt(100000, 999999).toString();

  verificationCodes[email] = {
    ...storedData,
    code: newVerificationCode,
    expiresAt: Date.now() + 15 * 60 * 1000
  };

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Код за регистрация",
    html: `<p>Вашият код за регистрация е: <strong>${verificationCode}</strong>. Кодът е активен за 15 минути.</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: "Имейлът не се изпрати успешно." });
    }
    res.json({ message: "Новият код за регистрация се изпрати успешно!" });
  });
});

// Sign in Route
app.post("/signin", (req, res) => {
  const { email, password, rememberMe } = req.body;

  db.findUserByEmail(email, (err, results) => {
    if (err) return res.status(400).json({ error: err.message });
    if (results.length === 0)
      return res
        .status(400)
        .json({ error: "Не съществува потребител с този имейл адрес!" });

    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch)
      return res
        .status(400)
        .json({ error: "Въведената парола е грешна или непълна!" });

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: rememberMe ? "7d" : "1h"
    });
    res.json({ message: "Успешно влизане", token });
  });
});

// Password Reset Request Route - Non-logged-in users request password reset
app.post("/password-reset-request", (req, res) => {
  const { email } = req.body;

  // Check if user with the given email exists
  db.findUserByEmail(email, (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ error: "Грешка в query-то към базата данни" });
    if (results.length === 0)
      return res
        .status(400)
        .json({ error: "Потребител с този имейл не съществува!" });

    const user = results[0];

    // Generate a JWT token for resetting the password
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "15m" // Token is valid for 15 minutes
      }
    );

    // Create a reset link with the token
    const resetLink = `http://localhost:5173/auth/resetpassword/${token}`;

    // Send email with reset link
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Потвърждение за нулиране на парола",
      html: `<p>Натиснете <a href="${resetLink}">тук</a> за да обновите вашата парола. Този линк е валиден само за 15 минути.</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error)
        return res
          .status(500)
          .json({ error: "Имейлът не се изпрати успешно." });
      res.json({
        message: "Успешно изпратихме имейл за нулиране на паролата!"
      });
    });
  });
});

// Password Reset Route - To reset the password with the new one using the token and email
app.post("/password-reset", (req, res) => {
  const { token, newPassword } = req.body;

  // Verify the JWT token to get the user ID
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err)
      return res.status(400).json({ error: "Невалиден или изтекъл token" });

    const userId = decoded.id;

    // Fetch the user's current password hash from the database
    db.getUserById(userId, (err, results) => {
      if (err) {
        console.error("Error fetching user:", err);
        return res.status(500).json({ error: "Internal server error" });
      }

      // Ensure results are in expected format
      if (!results || results.length === 0) {
        return res.status(404).json({ error: "Потребителят не съществува" });
      }

      // Hash the new password
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(newPassword, salt);

      // Update the user's password in the database
      db.updateUserPassword(userId, hashedPassword, (err, result) => {
        if (err) {
          console.error("Error updating password:", err);
          return res
            .status(500)
            .json({ error: "Не успяхме да обновим паролата" });
        }
        console.log("Password updated for user:", userId);
        res.json({ message: "Паролата е успешно обновена!" });
      });
    });
  });
});

// Token Validation Route
app.post("/token-validation", (req, res) => {
  const { token } = req.body;

  jwt.verify(token, process.env.SECRET_KEY, (err) => {
    if (err) return res.json({ valid: false });
    res.json({ valid: true });
  });
});

// Get user data route
app.get("/user-data", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ error: "Token-ът не е подаден" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Невалиден token" });

    const userId = decoded.id;

    db.getUserData(userId, (err, results) => {
      if (err)
        return res
          .status(500)
          .json({ error: "Грешка в query-то към базата данни" });
      if (results.length === 0)
        return res
          .status(404)
          .json({ error: "Не съществува потребител с този имейл адрес!" });

      const user = results[0];
      res.json(user);
    });
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
