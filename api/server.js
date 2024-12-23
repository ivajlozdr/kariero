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

app.get("/scrape", async (req, res) => {
  try {
    const data = await hf.scrape();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in scraping process:", error);
    return res
      .status(500)
      .json({ error: "Internal server error during scraping." });
  }
});

app.post("/save-responses-scores", (req, res) => {
  const { token, scores, userResponses, date } = req.body;

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
  if (!scores) {
    return res.status(400).send("Scores are required.");
  }
  if (!userResponses || !Array.isArray(userResponses)) {
    return res
      .status(400)
      .send("User responses are required and must be an array.");
  }

  // Save user responses and final scores
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

      // Return a success response
      res.status(200).send("Responses and scores saved successfully.");
    });
  });
});

app.post("/save-occupation", (req, res) => {
  const { token, keyword, date, reason } = req.body;

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

  // Fetch career code for the given keyword
  hf.fetchCareerCode(keyword)
    .then((code) => {
      // Fetch and translate occupation details
      return hf.fetchAndTranslateDetails(code);
    })
    .then((translatedData) => {
      // Save occupation data
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

          // Return the translated occupation data and skills data
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
  db.getMostNeededAbilities(limit, (err, result) => {
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

// Вземане на данни за най-нужните знания
app.get("/stats/platform/most-needed-knowledge", (req, res) => {
  // Получаване на параметъра за лимит от заявката (по подразбиране 10, ако не е предоставен)
  const limit = parseInt(req.query.limit, 10) || 10;

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  // Извличане на данните за най-нужните знания от базата данни
  db.getMostNeededKnowledge(limit, (err, result) => {
    if (err) {
      // Връщане на грешка при проблем с заявката към базата данни
      return res
        .status(500)
        .json({ error: "Грешка при вземането на най-нужните знания." });
    }
    if (result.length === 0) {
      // Връщане на съобщение, ако няма намерени резултати
      return res.status(404).json({ error: "Няма намерени знания." });
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

  // Извличане на данните за най-нужните знания от базата данни
  db.getMostNeededSkills(limit, (err, result) => {
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

  // Извличане на данните за най-нужните знания от базата данни
  db.getMostNeededTasks(limit, (err, result) => {
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

  // Извличане на данните за най-нужните знания от базата данни
  db.getMostNeededTechnologySkills(limit, (err, result) => {
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

  // Извличане на данните за най-нужните знания от базата данни
  db.getMostNeededWorkActivities(limit, (err, result) => {
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

  db.getMostSelectedPersonalityTypes(limit, (err, result) => {
    if (err) {
      return res.status(500).json({
        error: "Грешка при вземането на най-често срещаните типове характери."
      });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "Няма намерени типове характери." });
    }
    res.json(result);
  });
});

// Вземане на данни за най-често предпочитаното работно място
app.get("/stats/platform/most-selected-work-environments", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  db.getMostSelectedWorkEnvironments(limit, (err, result) => {
    if (err) {
      return res.status(500).json({
        error: "Грешка при вземането на най-често срещаните работни среди."
      });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "Няма намерени работни среди." });
    }
    res.json(result);
  });
});

// Вземане на данни за най-често срещаните приоритети при търсене на професия
app.get("/stats/platform/most-selected-job-priorities", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  db.getMostSelectedJobPriorities(limit, (err, result) => {
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
  });
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
  db.getMostSelectedJobSatisfactionLevels(limit, (err, result) => {
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
  });
});

// Вземане на данни за най-често срещаните постигнати нива на образование
app.get("/stats/platform/most-selected-education-levels", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  db.getMostSelectedEducationLevels(limit, (err, result) => {
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
  });
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
  db.getMostSelectedCareerGoals(limit, (err, result) => {
    if (err) {
      return res.status(500).json({
        error: "Грешка при вземането на най-често срещаните цели за кариера."
      });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "Няма намерени цели за кариера." });
    }
    res.json(result);
  });
});

// Вземане на данни за най-предпочитани типове структура:
app.get("/stats/platform/most-preferred-workstyle-structure", (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10; // По подразбиране 10, ако лимитът не е предоставен или е невалиден

  // Проверка дали лимитът е положително число
  if (limit <= 0) {
    return res
      .status(400)
      .json({ error: "Лимитът трябва да бъде положително число." });
  }

  // Извличане на най-предпочитани типове структура
  db.getMostPreferredWorkstyleStructure(limit, (err, result) => {
    if (err) {
      return res.status(500).json({
        error: "Грешка при вземането на най-предпочитани типове структура."
      });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "Няма намерени типове структура." });
    }
    res.json(result);
  });
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
    db.getMostPreferredWorkstyleCollaboration(limit, (err, result) => {
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
    });
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
    db.getMostPreferredWorkstyleWorkEnvironment(limit, (err, result) => {
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
    });
  }
);

// Start server
app.listen(5001, () => {
  console.log("Server started on http://localhost:5001");
});
