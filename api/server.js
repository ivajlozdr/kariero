const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const db = require("./database");
const hf = require("./helper_functions");
const { spawn } = require("child_process");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
require("dotenv").config();

const whitelist = ["http://localhost:5173", "https://kariero.noit.eu"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionSuccessStatus: 204
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight requests

let verificationCodes = {};

const SECRET_KEY = "1a2b3c4d5e6f7g8h9i0jklmnopqrstuvwxyz123456";
const EMAIL_USER = "no-reply@kariero.noit.eu";
const EMAIL_PASS = "Noit_2025";

// Създаване на транспортерен обект с използване на SMTP транспорт
const transporter = nodemailer.createTransport({
  host: "kariero.noit.eu", // Заменете с вашия cPanel mail сървър
  port: 587, // Използвайте 465 за SSL или 587 за TLS
  secure: false, // true за SSL (порт 465), false за TLS (порт 587)
  auth: {
    user: EMAIL_USER, // Вашият имейл адрес
    pass: EMAIL_PASS // Вашата имейл парола
  },
  debug: true // По избор, логва SMTP комуникацията за откриване на проблеми
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
      from: EMAIL_USER,
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
    from: EMAIL_USER,
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

    const token = jwt.sign({ id: user.id }, SECRET_KEY, {
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
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "15m" // Token is valid for 15 minutes
    });

    // Create a reset link with the token
    const resetLink = `http://localhost:5173/resetpassword/resetbasic/${token}`;

    // Send email with reset link
    const mailOptions = {
      from: EMAIL_USER,
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
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
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

  jwt.verify(token, SECRET_KEY, (err) => {
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

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
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

app.post("/run-python-script", async (req, res) => {
  console.log("Received POST request to /run-python-script");
  try {
    const { keyword } = req.body;

    // Translate the keyword
    console.log("Translating keyword:", keyword);
    const translatedKeyword = await hf.translate(keyword);
    console.log("Translated keyword:", translatedKeyword);

    // Perform the search using Google Custom Search API
    const jobSearchUrls = await hf.searchJobs(translatedKeyword);
    console.log("Job search URLs:", jobSearchUrls);

    if (jobSearchUrls.length === 0) {
      console.log("No valid URLs found");
      return res.status(404).send("No valid front job search URLs found.");
    }

    // Use the first valid URL to pass to the Python script
    const url = jobSearchUrls[0];
    // const url = "https://www.jobs.bg/front_job_search.php?subm=1&is_cyrillic=1";
    console.log("Selected URL for Python scraper:", url);

    if (!url) {
      console.error("No URL found for Python scraper");
      return res.status(400).json({ error: "URL is required" });
    }

    // Spawn the Python process
    // const pythonProcess = spawn("bash", [
    //   "-c",
    //   "source /home/noit1/virtualenv/kariero-api/scraping/3.10/bin/activate && cd /home/noit1/kariero-api/scraping && python3 /home/noit1/kariero-api/scraping/scraper.py " +
    //     url
    // ]);

    // Script to test in CPanel Terminal
    // source /home/noit1/virtualenv/kariero-api/scraping/3.10/bin/activate && cd /home/noit1/kariero-api/scraping && python3 /home/noit1/kariero-api/scraping/scraper.py https://www.jobs.bg/front_job_search.php?s_c%5B%5D=525

    // Script to test in Local Terminal
    // python scraper.py https://www.jobs.bg/front_job_search.php?s_c%5B%5D=525

    const pythonProcess = spawn("python", ["./scraping/scraper.py", url]);

    let response = "";

    // Capture data from the Python script
    pythonProcess.stdout.on("data", (data) => {
      console.log("Python script stdout:", data.toString());
      response += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error("Python script stderr:", data.toString());
    });

    pythonProcess.on("close", (code) => {
      console.log("Python process exited with code:", code);
      if (code !== 0) {
        console.error("Python scraper failed");
        return res.status(500).json({ error: "Python scraper failed" });
      }

      try {
        const parsedResponse = JSON.parse(response.trim());
        res.status(200).json(parsedResponse);
      } catch (error) {
        console.error("Error parsing Python script response:", error);
        res.status(500).json({ error: "Failed to parse Python script output" });
      }
    });
  } catch (error) {
    console.error("Error in /run-python-script endpoint:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
});

app.post("/onet", async (req, res) => {
  const { token, keyword, scores, userResponses } = req.body;

  // Verify the token to get the userId
  let userId;
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    userId = decoded.id;
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(401).send("Invalid token.");
  }

  // Validate request body
  if (!keyword) {
    return res.status(400).send("Keyword is required.");
  }
  if (!scores) {
    return res.status(400).send("Scores are required.");
  }
  if (!userResponses || !Array.isArray(userResponses)) {
    return res
      .status(400)
      .send("User responses are required and must be an array.");
  }

  try {
    const date = new Date().toISOString(); // Get the current date

    // Save user responses to the database
    db.saveUserResponses(userId, userResponses, date, (err, result) => {
      if (err) {
        console.error("Error saving user responses:", err);
        return res
          .status(500)
          .send("An error occurred while saving user responses.");
      }

      console.log("User responses saved:", result);

      // Fetch search results and get the career code
      hf.fetchCareerCode(keyword)
        .then(async (code) => {
          // Fetch detailed data and translate it
          const translatedData = await hf.fetchAndTranslateDetails(code);

          // Return the translated and full details response
          res.status(200).json(translatedData);
        })
        .catch((error) => {
          console.error("Error fetching data from ONET API:", error);
          res.status(500).send("An error occurred while fetching data.");
        });
    });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
});

// Start server
app.listen(5001, () => {
  console.log("Server started on http://localhost:5001");
});