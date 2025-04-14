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
const { Client } = require("ssh2");
const pythonPath = require("./config.js").pythonPath;
const pythonPathLocal = require("./config.js").pythonPathLocal;
const SECRET_KEY = require("./credentials.js").SECRET_KEY;
const EMAIL_USER = require("./credentials.js").EMAIL_USER;
const EMAIL_PASS = require("./credentials.js").EMAIL_PASS;
const VPS_CONFIG = require("./credentials.js").VPS_CONFIG;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
require("dotenv").config();

const ssh = new Client();

ssh
  .on("ready", () => {
    console.log("SSH Connection Established.");
  })
  .on("error", (err) => {
    console.error("SSH Connection Error:", err);
  })
  .connect(VPS_CONFIG);

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
      expiresIn: rememberMe ? "7d" : "2h"
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
    const resetLink = `https://kariero.noit.eu/resetpassword/resetbasic/${token}`;
    // const resetLink = `http://localhost:5173/resetpassword/resetbasic/${token}`;

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

app.post("/translate/career-paths", async (req, res) => {
  try {
    const { careerPaths } = req.body;

    const translateCareerPath = async (careerPath) => {
      const translatedCareerPathTitle = await hf.deepLTranslate(
        careerPath.careerPath,
        "This is the title of a career path.",
        "8a590eb2-d291-45f3-af6c-c2fa0f6808fb"
      );

      const translatedCareerPathDescription = await hf.deepLTranslate(
        careerPath.reason,
        `This is the description of the career path: ${careerPath.careerPath}.`
      );

      const translatedCareers = await Promise.all(
        careerPath.listOfCareers.map(async (career) => {
          const translatedCareerName = await hf.deepLTranslate(
            career.career,
            "This is the title of a career."
          );
          const translatedCareerReason = await hf.deepLTranslate(
            career.reason,
            `This is the reason why a career is recommended to a user based on an analysis of their character and abiltiies.`
          );
          return {
            career: translatedCareerName,
            reason: translatedCareerReason
          };
        })
      );

      return {
        careerPath: translatedCareerPathTitle,
        reason: translatedCareerPathDescription,
        listOfCareers: translatedCareers
      };
    };

    const translatedCareerPaths = await Promise.all(
      careerPaths.map(translateCareerPath)
    );

    res.json(translatedCareerPaths);
  } catch (error) {
    console.error("Error in translating career paths:", error);
    res.status(500).json({
      error: "An error occurred while processing the request."
    });
  }
});

app.post("/job-offers", async (req, res) => {
  try {
    const query = req.body;
    if (!query || !query.keyword) {
      return res
        .status(400)
        .json({ error: "Invalid request body. Missing keyword." });
    }

    console.log("Processing request for keyword:", query.keyword);

    const command = `xvfb-run python3.8 return.py "${query.keyword}"`;

    ssh.exec(command, (err, stream) => {
      if (err) {
        console.error("Error executing script:", err);
        return res
          .status(500)
          .json({ error: "Error executing the Python script" });
      }

      let response = "";
      stream.on("data", (data) => {
        response += data.toString();
      });

      stream.on("close", (code) => {
        console.log(`Python script exited with code: ${code}`);
        if (code === 0) {
          try {
            const parsedResponse = JSON.parse(response.trim());
            res.status(200).json(parsedResponse);
          } catch (parseError) {
            console.error("Error parsing response:", parseError);
            res.status(500).json({ error: "Parsing failed" });
          }
        } else {
          res.status(500).json({ error: "Script execution failed" });
        }
      });
    });
  } catch (error) {
    console.error("Error in /job-offers endpoint:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
});

// Достъпване на конретен AI модел
app.post("/get-model-response", (req, res) => {
  const {
    messages,
    provider = "openai",
    modelOpenAI = "gpt-4o",
    api_key
  } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res
      .status(400)
      .json({ error: "Invalid request. 'messages' must be an array." });
  }

  const pythonProcess = spawn(pythonPathLocal, [
    "./python/fetch_ai_response.py"
  ]);

  let response = "";

  pythonProcess.stdin.write(
    JSON.stringify({ provider, messages, modelOpenAI, api_key })
  );
  pythonProcess.stdin.end();

  pythonProcess.stdout.on("data", (data) => {
    response += data.toString();
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error("Python script stderr:", data.toString());
  });

  pythonProcess.on("close", (code) => {
    if (code === 0) {
      try {
        const jsonResponse = JSON.parse(response.trim());
        res.status(200).json(jsonResponse);
      } catch (e) {
        console.error("Error parsing JSON response:", e);
        res.status(500).send("Error parsing response from Python");
      }
    } else {
      res.status(500).send("Error: Python script execution failed");
    }
  });
});

app.post("/save-responses-scores", (req, res) => {
  const { token, scores, userResponses, date } = req.body;

  let userId;
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    userId = decoded.id;
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(401).send("Invalid token.");
  }

  if (!scores) {
    return res.status(400).send("Scores are required.");
  }
  if (!userResponses || !Array.isArray(userResponses)) {
    return res
      .status(400)
      .send("User responses are required and must be an array.");
  }

  db.saveUserResponses(userId, userResponses, date, (err, result) => {
    if (err) {
      console.error("Error saving user responses:", err);
      return res
        .status(500)
        .send("An error occurred while saving user responses.");
    }

    db.saveFinalScores(userId, scores, date, (err, result) => {
      if (err) {
        console.error("Error saving final scores:", err);
        return res
          .status(500)
          .send("An error occurred while saving final scores.");
      }

      res.status(200).send("Responses and scores saved successfully.");
    });
  });
});

app.post("/favourites/toggle", (req, res) => {
  const { token, data, date } = req.body;

  let userId;
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    userId = decoded.id;
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(401).send("Invalid token.");
  }

  if (!data || !userId || !date) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  db.getFavouriteOccupation(data, userId, (err, results) => {
    if (err) {
      console.error("Error checking favourite occupation:", err);
      return res.status(500).json({ error: "Database error." });
    }

    if (results.length > 0) {
      db.deleteFavouriteOccupation(data, userId, (err) => {
        if (err) {
          console.error("Error deleting favourite occupation:", err);
          return res
            .status(500)
            .json({ error: "Failed to remove favourite occupation." });
        }

        res.status(200).json({
          message: "Occupation removed from favourites successfully."
        });
      });
    } else {
      db.saveFavouriteOccupation(data, userId, date, (err) => {
        if (err) {
          console.error("Error saving favourite occupation:", err);
          return res
            .status(500)
            .json({ error: "Failed to add favourite occupation." });
        }

        res
          .status(200)
          .json({ message: "Occupation added to favourites successfully." });
      });
    }
  });
});

app.post("/save-occupation", (req, res) => {
  const { token, keyword, date, reason } = req.body;

  let userId;
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    userId = decoded.id;
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(401).send("Invalid token.");
  }

  if (!keyword) {
    return res.status(400).send("Keyword is required.");
  }

  hf.fetchCareerCode(keyword)
    .then((code) => {
      return hf.fetchDetails(db, code);
    })
    .then((translatedData) => {
      db.saveOccupation(translatedData, userId, date, reason, (err) => {
        if (err) {
          console.error("Error saving occupation data:", err);
          return res
            .status(500)
            .send("An error occurred while saving occupation data.");
        }

        db.saveCategoryData(translatedData, (err) => {
          if (err) {
            console.error("Error saving skills data:", err);
            return res
              .status(500)
              .send("An error occurred while saving skills data.");
          }
          res.status(200).json(translatedData);
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching or saving occupation data:", error);
      res
        .status(500)
        .send("An error occurred while processing the occupation data.");
    });
});
app.post("/save-ai-analysis", (req, res) => {
  const { token, recommendations } = req.body;

  // Verify the token to get the userId
  let userId;
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    userId = decoded.id;
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(401).send("Invalid token.");
  }

  // Extract the specified parts of the recommendations object
  const analysisData = {
    Abilities: recommendations.Abilities,
    Skills: recommendations.Skills,
    Knowledge: recommendations.Knowledge,
    Interests: recommendations.Interests,
    WorkStyle: recommendations.WorkStyle,
    WorkValues: recommendations.WorkValues,
    TechnologySkills: recommendations.TechnologySkills
  };

  db.saveAIAnalysis(userId, analysisData, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to save AI analysis data",
        error: err
      });
    }

    res.status(200).send("AI analysis data saved successfully.");
  });
});

app.get("/favourites", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token is missing or invalid" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: "Невалиден или изтекъл token" });
    }

    const userId = decoded.id;

    db.getAllFavouriteOccupations(userId, (err, results) => {
      if (err) {
        console.error("Error fetching favourites", err.message);
        return res.status(500).json({ error: "Internal server error" });
      }

      res.json(results);
    });
  });
});

app.get("/favourites/:code", async (req, res) => {
  const code = req.params.code;
  try {
    const details = await hf.fetchDetails(db, code);
    res.json(details);
  } catch (err) {
    console.error(`Failed to fetch details for ${code}`, err.message);
    res.status(500).json({ error: "Could not fetch details" });
  }
});

// Вземане на данни за общ брой на потребители в платформата
app.get("/stats/platform/users-count", (req, res) => {
  db.getUsersCount((err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error fetching users count" });
    }
    res.json(result);
  });
});

// Вземане на данни за общ брой на професии в платформата, групирани по 'code'
app.get("/stats/platform/distinct-occupations-with-count", (req, res) => {
  db.getDistinctOccupations((err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Грешка при вземането на данни за професиите" });
    }
    res.json({
      count: result.length,
      data: result
    });
  });
});

// Вземане на данни за най-препоръчваните професии ДИРЕКТНО
app.get("/stats/platform/top-recommended-occupations", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да е положително число." });
  }

  db.getTopRecommendedOccupations(limit, (err, result) => {
    if (err) {
      return res.status(500).json({
        error: "Грешка при вземането на най-препоръчваните професии директно"
      });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "Няма професии с препоръки" });
    }
    res.json(result);
  });
});

// Вземане на данни за най-препоръчваните професии ИНДИРЕКТНО
app.get("/stats/platform/top-recommended-related-occupations", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да е положително число." });
  }

  db.getTopRecommendedRelatedOccupations(limit, (err, result) => {
    if (err) {
      return res.status(500).json({
        error: "Грешка при вземането на най-препоръчваните професии индиректно"
      });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "Няма професии с препоръки" });
    }
    res.json(result);
  });
});

// Вземане на данни за най-нужните способности
app.get("/stats/platform/most-needed-abilities", (req, res) => {
  // Получаване на параметъра за лимит от заявката (по подразбиране 10, ако не е предоставен)
  const limit = parseInt(req.query.limit, 10) || 10;

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  // Извличане на данните за най-нужните способности от базата данни
  db.getMostNeededAttributes("abilities", limit, (err, result) => {
    if (err) {
      // Връщане на грешка при проблем с заявката към базата данни
      return res
        .status(500)
        .json({ error: "Грешка при вземането на най-нужните способности." });
    }
    if (result.length === 0) {
      // Връщане на съобщение, ако няма намерени резултати
      return res.status(404).json({ error: "Няма намерени способности." });
    }
    // Връщане на резултатите в JSON формат
    res.json(result);
  });
});

// Вземане на данни за най-нужните познания
app.get("/stats/platform/most-needed-knowledge", (req, res) => {
  // Получаване на параметъра за лимит от заявката (по подразбиране 10, ако не е предоставен)
  const limit = parseInt(req.query.limit, 10) || 10;

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  // Извличане на данните за най-нужните познания от базата данни
  db.getMostNeededAttributes("knowledge", limit, (err, result) => {
    if (err) {
      // Връщане на грешка при проблем с заявката към базата данни
      return res
        .status(500)
        .json({ error: "Грешка при вземането на най-нужните познания." });
    }
    if (result.length === 0) {
      // Връщане на съобщение, ако няма намерени резултати
      return res.status(404).json({ error: "Няма намерени познания." });
    }
    // Връщане на резултатите в JSON формат
    res.json(result);
  });
});

// Вземане на данни за най-нужните умения
app.get("/stats/platform/most-needed-skills", (req, res) => {
  // Получаване на параметъра за лимит от заявката (по подразбиране 10, ако не е предоставен)
  const limit = parseInt(req.query.limit, 10) || 10;

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  db.getMostNeededAttributes("skills", limit, (err, result) => {
    if (err) {
      // Връщане на грешка при проблем с заявката към базата данни
      return res
        .status(500)
        .json({ error: "Грешка при вземането на най-нужните умения." });
    }
    if (result.length === 0) {
      // Връщане на съобщение, ако няма намерени резултати
      return res.status(404).json({ error: "Няма намерени умения." });
    }
    // Връщане на резултатите в JSON формат
    res.json(result);
  });
});

// Вземане на данни за най-често срещаните задачи
app.get("/stats/platform/most-needed-tasks", (req, res) => {
  // Получаване на параметъра за лимит от заявката (по подразбиране 10, ако не е предоставен)
  const limit = parseInt(req.query.limit, 10) || 10;

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  db.getMostNeededAttributes("tasks", limit, (err, result) => {
    if (err) {
      // Връщане на грешка при проблем с заявката към базата данни
      return res
        .status(500)
        .json({ error: "Грешка при вземането на най-често срещаните задачи." });
    }
    if (result.length === 0) {
      // Връщане на съобщение, ако няма намерени резултати
      return res.status(404).json({ error: "Няма намерени задачи." });
    }
    // Връщане на резултатите в JSON формат
    res.json(result);
  });
});

// Вземане на данни за най-нужните технологични умения
app.get("/stats/platform/most-needed-technology-skills", (req, res) => {
  // Получаване на параметъра за лимит от заявката (по подразбиране 10, ако не е предоставен)
  const limit = parseInt(req.query.limit, 10) || 10;

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  db.getMostNeededAttributes("technology_skills", limit, (err, result) => {
    if (err) {
      // Връщане на грешка при проблем с заявката към базата данни
      return res.status(500).json({
        error: "Грешка при вземането на най-нужните технологични умения."
      });
    }
    if (result.length === 0) {
      // Връщане на съобщение, ако няма намерени резултати
      return res
        .status(404)
        .json({ error: "Няма намерени технологични умения." });
    }
    // Връщане на резултатите в JSON формат
    res.json(result);
  });
});

// Вземане на данни за най-често срещаните трудови дейности
app.get("/stats/platform/most-needed-work-activities", (req, res) => {
  // Получаване на параметъра за лимит от заявката (по подразбиране 10, ако не е предоставен)
  const limit = parseInt(req.query.limit, 10) || 10;

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  db.getMostNeededAttributes("work_activities", limit, (err, result) => {
    if (err) {
      // Връщане на грешка при проблем с заявката към базата данни
      return res.status(500).json({
        error: "Грешка при вземането на най-често срещаните трудови дейности."
      });
    }
    if (result.length === 0) {
      // Връщане на съобщение, ако няма намерени резултати
      return res.status(404).json({ error: "Няма намерени трудови дейности." });
    }
    // Връщане на резултатите в JSON формат
    res.json(result);
  });
});

// Вземане на данни за най-често срещаните характеристики на личността:
app.get("/stats/platform/most-selected-personality-types", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  db.getMostSelectedPreferences(
    "personality_types_preferences",
    limit,
    (err, result) => {
      if (err) {
        return res.status(500).json({
          error: "Грешка при вземането на най-често срещаните типове характери."
        });
      }
      if (result.length === 0) {
        return res
          .status(404)
          .json({ error: "Няма намерени типове характери." });
      }
      res.json(result);
    }
  );
});

// Вземане на данни за най-често предпочитаното работно място
app.get("/stats/platform/most-selected-work-environments", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  db.getMostSelectedPreferences(
    "work_environment_preferences",
    limit,
    (err, result) => {
      if (err) {
        return res.status(500).json({
          error: "Грешка при вземането на най-често срещаните работно място."
        });
      }
      if (result.length === 0) {
        return res.status(404).json({ error: "Няма намерени работно място." });
      }
      res.json(result);
    }
  );
});

// Вземане на данни за най-често срещаните приоритети при търсене на професия
app.get("/stats/platform/most-selected-job-priorities", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  db.getMostSelectedPreferences(
    "job_priority_preferences",
    limit,
    (err, result) => {
      if (err) {
        return res.status(500).json({
          error:
            "Грешка при вземането на най-често срещаните приоритети за професия."
        });
      }
      if (result.length === 0) {
        return res
          .status(404)
          .json({ error: "Няма намерени приоритети за професия." });
      }
      res.json(result);
    }
  );
});

// Вземане на данни за най-предпочитаните дейности в търсената професия
app.get("/stats/platform/most-selected-job-satisfaction-levels", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

  // Проверка за валидност на лимита
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  // Извикване на функцията за извличане на най-предпочитаните нива на удовлетворение от професията
  db.getMostSelectedPreferences(
    "job_satisfaction_preferences",
    limit,
    (err, result) => {
      if (err) {
        // В случай на грешка при извършване на заявката
        return res.status(500).json({
          error:
            "Грешка при вземането на най-предпочитаните нива на удовлетворение от професията."
        });
      }
      if (result.length === 0) {
        // Ако няма намерени резултати
        return res.status(404).json({
          error: "Няма намерени нива на удовлетворение от професията."
        });
      }
      // Връщане на резултатите като JSON отговор
      res.json(result);
    }
  );
});

// Вземане на данни за най-често срещаните постигнати нива на образование
app.get("/stats/platform/most-selected-education-levels", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  db.getMostSelectedPreferences(
    "education_level_preferences",
    limit,
    (err, result) => {
      if (err) {
        return res.status(500).json({
          error:
            "Грешка при вземането на най-често срещаните нива на образование."
        });
      }
      if (result.length === 0) {
        return res
          .status(404)
          .json({ error: "Няма намерени нива на образование." });
      }
      res.json(result);
    }
  );
});

// Вземане на данни за най-желани професионални роли
app.get("/stats/platform/most-selected-career-goals", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  // Извличане на най-желани професионални роли
  db.getMostSelectedPreferences(
    "career_goals_preferences",
    limit,
    (err, result) => {
      if (err) {
        return res.status(500).json({
          error: "Грешка при вземането на най-желаните професионални роли."
        });
      }
      if (result.length === 0) {
        return res
          .status(404)
          .json({ error: "Няма намерени професионални роли." });
      }
      res.json(result);
    }
  );
});

// Вземане на данни за най-предпочитани типове структура
app.get("/stats/platform/most-preferred-workstyle-structure", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  // Извличане на най-предпочитани типове структура
  db.getMostPreferredWorkstyle(
    "structure_preference_workstyle",
    limit,
    (err, result) => {
      if (err) {
        return res.status(500).json({
          error: "Грешка при вземането на най-предпочитани типове структура."
        });
      }
      if (result.length === 0) {
        return res
          .status(404)
          .json({ error: "Няма намерени типове структура." });
      }
      res.json(result);
    }
  );
});

// Вземане на данни за най-предпочитани начини за работа
app.get(
  "/stats/platform/most-preferred-workstyle-collaboration",
  (req, res) => {
    const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

    // Проверка дали лимитът е положително число
    if (limit <= 0) {
      return res
        .status(400)
        .json({ error: "Лимитът трябва да бъде положително число." });
    }

    // Извличане на най-предпочитани начини за работа
    db.getMostPreferredWorkstyle(
      "collaboration_workstyle",
      limit,
      (err, result) => {
        if (err) {
          return res.status(500).json({
            error: "Грешка при вземането на най-предпочитани начини за работа."
          });
        }
        if (result.length === 0) {
          return res
            .status(404)
            .json({ error: "Няма намерени начини за работа." });
        }
        res.json(result);
      }
    );
  }
);

// Вземане на данни за най-предпочитани работни атмосфери
app.get(
  "/stats/platform/most-preferred-workstyle-work-environment",
  (req, res) => {
    const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

    // Проверка дали лимитът е положително число
    if (limit <= 0) {
      return res
        .status(400)
        .json({ error: "Лимитът трябва да бъде положително число." });
    }

    // Извличане на най-предпочитани работни атмосфери
    db.getMostPreferredWorkstyle(
      "work_environment_workstyle",
      limit,
      (err, result) => {
        if (err) {
          return res.status(500).json({
            error: "Грешка при вземането на най-предпочитани работни атмосфери."
          });
        }
        if (result.length === 0) {
          return res
            .status(404)
            .json({ error: "Няма намерени работни атмосфери." });
        }
        res.json(result);
      }
    );
  }
);

// Вземане на данни за най-препоръчваните професии на даден потребител ДИРЕКТНО
app.post("/stats/individual/top-recommended-occupations", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да е положително число." });
  }

  const { token } = req.body;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: "Невалиден или изтекъл token" });
    }

    const userId = decoded.id; // Получаване на ID на потребителя

    db.getUsersTopRecommendedOccupations(userId, limit, (err, result) => {
      if (err) {
        return res.status(500).json({
          error:
            "Грешка при вземането на най-препоръчваните професии на даден потребител директно"
        });
      }
      if (result.length === 0) {
        return res.status(404).json({ error: "Няма професии с препоръки" });
      }
      res.json(result);
    });
  });
});

// Вземане на данни за най-препоръчваните професии на даден потребител ИНДИРЕКТНО
app.post(
  "/stats/individual/top-recommended-related-occupations",
  (req, res) => {
    const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

    if (limit <= 0) {
      return res
        .status(400)
        .json({ error: "Лимитът трябва да е положително число." });
    }

    const { token } = req.body;

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(400).json({ error: "Невалиден или изтекъл token" });
      }

      const userId = decoded.id; // Получаване на ID на потребителя

      db.getUsersTopRecommendedRelatedOccupations(
        userId,
        limit,
        (err, result) => {
          if (err) {
            return res.status(500).json({
              error:
                "Грешка при вземането на най-препоръчваните професии на даден потребител индиректно"
            });
          }
          if (result.length === 0) {
            return res.status(404).json({ error: "Няма професии с препоръки" });
          }
          res.json(result);
        }
      );
    });
  }
);

// Вземане на данни за най-нужните способности сред препоръките на даден потребител
app.post("/stats/individual/most-needed-abilities", (req, res) => {
  // Получаване на параметъра за лимит от заявката (по подразбиране 10, ако не е предоставен)
  const limit = parseInt(req.query.limit, 10) || 10;

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  const { token } = req.body;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: "Невалиден или изтекъл token" });
    }

    const userId = decoded.id; // Получаване на ID на потребителя

    // Извличане на данните за най-нужните способности сред препоръките на даден потребител от базата данни
    db.getUsersMostNeededAttributes(
      "abilities",
      userId,
      limit,
      (err, result) => {
        if (err) {
          // Връщане на грешка при проблем с заявката към базата данни
          return res.status(500).json({
            error:
              "Грешка при вземането на най-нужните способности сред препоръките на даден потребител."
          });
        }
        if (result.length === 0) {
          // Връщане на съобщение, ако няма намерени резултати
          return res.status(404).json({ error: "Няма намерени способности." });
        }
        // Връщане на резултатите в JSON формат
        res.json(result);
      }
    );
  });
});

// Вземане на данни за най-нужните знания сред препоръките на даден потребител
app.post("/stats/individual/most-needed-knowledge", (req, res) => {
  // Получаване на параметъра за лимит от заявката (по подразбиране 10, ако не е предоставен)
  const limit = parseInt(req.query.limit, 10) || 10;

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  const { token } = req.body;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: "Невалиден или изтекъл token" });
    }

    const userId = decoded.id; // Получаване на ID на потребителя

    // Извличане на данните за най-нужните знания сред препоръките на даден потребител от базата данни
    db.getUsersMostNeededAttributes(
      "knowledge",
      userId,
      limit,
      (err, result) => {
        if (err) {
          // Връщане на грешка при проблем с заявката към базата данни
          return res.status(500).json({
            error:
              "Грешка при вземането на най-нужните знания сред препоръките на даден потребител."
          });
        }
        if (result.length === 0) {
          // Връщане на съобщение, ако няма намерени резултати
          return res.status(404).json({ error: "Няма намерени знания." });
        }
        // Връщане на резултатите в JSON формат
        res.json(result);
      }
    );
  });
});

// Вземане на данни за най-нужните умения сред препоръките на даден потребител
app.post("/stats/individual/most-needed-skills", (req, res) => {
  // Получаване на параметъра за лимит от заявката (по подразбиране 10, ако не е предоставен)
  const limit = parseInt(req.query.limit, 10) || 10;

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  const { token } = req.body;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: "Невалиден или изтекъл token" });
    }

    const userId = decoded.id; // Получаване на ID на потребителя

    // Извличане на данните за най-нужните умения сред препоръките на даден потребител от базата данни
    db.getUsersMostNeededAttributes("skills", userId, limit, (err, result) => {
      if (err) {
        // Връщане на грешка при проблем с заявката към базата данни
        return res.status(500).json({
          error:
            "Грешка при вземането на най-нужните умения сред препоръките на даден потребител."
        });
      }
      if (result.length === 0) {
        // Връщане на съобщение, ако няма намерени резултати
        return res.status(404).json({ error: "Няма намерени умения." });
      }
      // Връщане на резултатите в JSON формат
      res.json(result);
    });
  });
});

// Вземане на данни за най-често срещаните задачи сред препоръките на даден потребител
app.post("/stats/individual/most-needed-tasks", (req, res) => {
  // Получаване на параметъра за лимит от заявката (по подразбиране 10, ако не е предоставен)
  const limit = parseInt(req.query.limit, 10) || 10;

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  const { token } = req.body;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: "Невалиден или изтекъл token" });
    }

    const userId = decoded.id; // Получаване на ID на потребителя

    // Извличане на данните за най-често срещаните задачи сред препоръките на даден потребител от базата данни
    db.getUsersMostNeededAttributes("tasks", userId, limit, (err, result) => {
      if (err) {
        // Връщане на грешка при проблем с заявката към базата данни
        return res.status(500).json({
          error:
            "Грешка при вземането на най-често срещаните задачи сред препоръките на даден потребител."
        });
      }
      if (result.length === 0) {
        // Връщане на съобщение, ако няма намерени резултати
        return res.status(404).json({ error: "Няма намерени умения." });
      }
      // Връщане на резултатите в JSON формат
      res.json(result);
    });
  });
});

// Вземане на данни за най-нужните технологични умения сред препоръките на даден потребител
app.post("/stats/individual/most-needed-technology-skills", (req, res) => {
  // Получаване на параметъра за лимит от заявката (по подразбиране 10, ако не е предоставен)
  const limit = parseInt(req.query.limit, 10) || 10;

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  const { token } = req.body;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: "Невалиден или изтекъл token" });
    }

    const userId = decoded.id; // Получаване на ID на потребителя

    // Извличане на данните за най-нужните технологични умения сред препоръките на даден потребител от базата данни
    db.getUsersMostNeededAttributes(
      "technology_skills",
      userId,
      limit,
      (err, result) => {
        if (err) {
          // Връщане на грешка при проблем с заявката към базата данни
          return res.status(500).json({
            error:
              "Грешка при вземането на най-нужните технологични умения сред препоръките на даден потребител."
          });
        }
        if (result.length === 0) {
          // Връщане на съобщение, ако няма намерени резултати
          return res.status(404).json({ error: "Няма намерени умения." });
        }
        // Връщане на резултатите в JSON формат
        res.json(result);
      }
    );
  });
});

// Вземане на данни за най-често срещаните трудови дейности сред препоръките на даден потребител
app.post("/stats/individual/most-needed-work-activities", (req, res) => {
  // Получаване на параметъра за лимит от заявката (по подразбиране 10, ако не е предоставен)
  const limit = parseInt(req.query.limit, 10) || 10;

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  const { token } = req.body;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: "Невалиден или изтекъл token" });
    }

    const userId = decoded.id; // Получаване на ID на потребителя

    // Извличане на данните за най-често срещаните трудови дейности сред препоръките на даден потребител от базата данни
    db.getUsersMostNeededAttributes(
      "work_activities",
      userId,
      limit,
      (err, result) => {
        if (err) {
          // Връщане на грешка при проблем с заявката към базата данни
          return res.status(500).json({
            error:
              "Грешка при вземането на най-често срещаните трудови дейности сред препоръките на даден потребител."
          });
        }
        if (result.length === 0) {
          // Връщане на съобщение, ако няма намерени резултати
          return res.status(404).json({ error: "Няма намерени умения." });
        }
        // Връщане на резултатите в JSON формат
        res.json(result);
      }
    );
  });
});

// Вземане на данни за най-често срещаните характеристики на личността сред препоръките на даден потребител
app.post("/stats/individual/most-selected-personality-types", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  const { token } = req.body;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: "Невалиден или изтекъл token" });
    }

    const userId = decoded.id; // Получаване на ID на потребителя

    db.getUsersMostSelectedPreferences(
      "personality_types_preferences",
      userId,
      limit,
      (err, result) => {
        if (err) {
          return res.status(500).json({
            error:
              "Грешка при вземането на най-често срещаните характеристики на личността сред препоръките на даден потребител."
          });
        }
        if (result.length === 0) {
          return res
            .status(404)
            .json({ error: "Няма намерени характеристики на личността." });
        }
        res.json(result);
      }
    );
  });
});

// Вземане на данни за предпочитаното работно място сред препоръките на даден потребител
app.post("/stats/individual/most-selected-work-environments", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  const { token } = req.body;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: "Невалиден или изтекъл token" });
    }

    const userId = decoded.id; // Получаване на ID на потребителя

    db.getUsersMostPreferredWorkstyle(
      "work_environment_preferences",
      userId,
      limit,
      (err, result) => {
        if (err) {
          return res.status(500).json({
            error:
              "Грешка при вземането на предпочитани работни места сред препоръките на даден потребител."
          });
        }
        if (result.length === 0) {
          return res
            .status(404)
            .json({ error: "Няма намерени работни места." });
        }
        res.json(result);
      }
    );
  });
});

// Вземане на данни за най-често срещаните приоритети при търсене на професия сред препоръките на даден потребител
app.post("/stats/individual/most-selected-job-priorities", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  const { token } = req.body;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: "Невалиден или изтекъл token" });
    }

    const userId = decoded.id; // Получаване на ID на потребителя

    db.getUsersMostSelectedPreferences(
      "job_priority_preferences",
      userId,
      limit,
      (err, result) => {
        if (err) {
          return res.status(500).json({
            error:
              "Грешка при вземането на приоритети при търсене на професия сред препоръките на даден потребител."
          });
        }
        if (result.length === 0) {
          return res.status(404).json({
            error: "Няма намерени приоритети при търсене на професия."
          });
        }
        res.json(result);
      }
    );
  });
});

// Вземане на данни за най-предпочитаните дейности в търсената професия сред препоръките на даден потребител
app.post(
  "/stats/individual/most-selected-job-satisfaction-levels",
  (req, res) => {
    const limit = parseInt(req.query.limit, 10) || 10;

    if (limit <= 0) {
      return res
        .status(400)
        .json({ error: "Лимитът трябва да бъде положително число." });
    }

    const { token } = req.body;

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(400).json({ error: "Невалиден или изтекъл token" });
      }

      const userId = decoded.id; // Получаване на ID на потребителя

      db.getUsersMostSelectedPreferences(
        "job_satisfaction_preferences",
        userId,
        limit,
        (err, result) => {
          if (err) {
            return res.status(500).json({
              error:
                "Грешка при вземането на предпочитани дейности в търсената професия сред препоръките на даден потребител."
            });
          }
          if (result.length === 0) {
            return res.status(404).json({
              error: "Няма намерени предпочитани дейности в търсената професия."
            });
          }
          res.json(result);
        }
      );
    });
  }
);

// Вземане на данни за най-често срещаните постигнати нива на образование сред препоръките на даден потребител
app.post("/stats/individual/most-selected-education-levels", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  const { token } = req.body;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: "Невалиден или изтекъл token" });
    }

    const userId = decoded.id; // Получаване на ID на потребителя

    db.getUsersMostSelectedPreferences(
      "education_level_preferences",
      userId,
      limit,
      (err, result) => {
        if (err) {
          return res.status(500).json({
            error:
              "Грешка при вземането на нива на образование сред препоръките на даден потребител."
          });
        }
        if (result.length === 0) {
          return res.status(404).json({
            error: "Няма намерени нива на образование."
          });
        }
        res.json(result);
      }
    );
  });
});

// Вземане на данни за най-желани професионални роли сред препоръките на даден потребител
app.post("/stats/individual/most-selected-career-goals", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  const { token } = req.body;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: "Невалиден или изтекъл token" });
    }

    const userId = decoded.id; // Получаване на ID на потребителя

    db.getUsersMostSelectedPreferences(
      "career_goals_preferences",
      userId,
      limit,
      (err, result) => {
        if (err) {
          return res.status(500).json({
            error:
              "Грешка при вземането на най-желани професионални роли сред препоръките на даден потребител."
          });
        }
        if (result.length === 0) {
          return res.status(404).json({
            error: "Няма намерени желани професионални роли."
          });
        }
        res.json(result);
      }
    );
  });
});

// Вземане на данни за най-предпочитани типове структура сред препоръките на даден потребител
app.post("/stats/individual/most-preferred-workstyle-structure", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  const { token } = req.body;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: "Невалиден или изтекъл token" });
    }

    const userId = decoded.id; // Получаване на ID на потребителя

    db.getUsersMostPreferredWorkstyle(
      "structure_preference_workstyle",
      userId,
      limit,
      (err, result) => {
        if (err) {
          return res.status(500).json({
            error:
              "Грешка при вземането на данни за най-предпочитани типове структура сред препоръките на даден потребител."
          });
        }
        if (result.length === 0) {
          return res.status(404).json({
            error: "Няма намерени типове структура."
          });
        }
        res.json(result);
      }
    );
  });
});

// Вземане на данни за най-предпочитани начини за работа сред препоръките на даден потребител
app.post(
  "/stats/individual/most-preferred-workstyle-collaboration",
  (req, res) => {
    const limit = parseInt(req.query.limit, 10) || 10;

    if (limit <= 0) {
      return res
        .status(400)
        .json({ error: "Лимитът трябва да бъде положително число." });
    }

    const { token } = req.body;

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(400).json({ error: "Невалиден или изтекъл token" });
      }

      const userId = decoded.id; // Получаване на ID на потребителя

      db.getUsersMostPreferredWorkstyle(
        "collaboration_workstyle",
        userId,
        limit,
        (err, result) => {
          if (err) {
            return res.status(500).json({
              error:
                "Грешка при вземането на данни за най-предпочитани начини за работа сред препоръките на даден потребител."
            });
          }
          if (result.length === 0) {
            return res.status(404).json({
              error: "Няма намерени начини за работа."
            });
          }
          res.json(result);
        }
      );
    });
  }
);

// Вземане на данни за най-предпочитани работни атмосфери сред препоръките на даден потребител
app.post(
  "/stats/individual/most-preferred-workstyle-work-environment",
  (req, res) => {
    const limit = parseInt(req.query.limit, 10) || 10;

    if (limit <= 0) {
      return res
        .status(400)
        .json({ error: "Лимитът трябва да бъде положително число." });
    }

    const { token } = req.body;

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(400).json({ error: "Невалиден или изтекъл token" });
      }

      const userId = decoded.id; // Получаване на ID на потребителя

      db.getUsersMostPreferredWorkstyle(
        "work_environment_workstyle",
        userId,
        limit,
        (err, result) => {
          if (err) {
            return res.status(500).json({
              error:
                "Грешка при вземането на данни за най-предпочитани работни атмосфери сред препоръките на даден потребител."
            });
          }
          if (result.length === 0) {
            return res.status(404).json({
              error: "Няма намерени работни атмосфери."
            });
          }
          res.json(result);
        }
      );
    });
  }
);

// Start server
app.listen(5001, () => {
  console.log("Server started on port 5001");
});
