const mysql = require("mysql2");
const dbOpts = require("./config.js").dbOpts;
const dbOptsLocal = require("./config.js").dbOptsLocal;
const hf = require("./helper_functions");
require("dotenv").config();

const db = mysql.createConnection(dbOptsLocal);
// const db = mysql.createConnection(dbOpts);

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

const checkEmailExists = (email, callback) => {
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], callback);
};

const createUser = (firstName, lastName, email, hashedPassword, callback) => {
  const query =
    "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";
  db.query(query, [firstName, lastName, email, hashedPassword], callback);
};

const findUserByEmail = (email, callback) => {
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], callback);
};

const updateUserPassword = (userId, hashedPassword, callback) => {
  const query = "UPDATE users SET password = ? WHERE id = ?";
  db.query(query, [hashedPassword, userId], callback);
};

const getUserById = (userId, callback) => {
  const query =
    "SELECT id, first_name, last_name, email, password FROM users WHERE id = ?"; // Include password in the query
  db.query(query, [userId], callback);
};

const getUserData = (userId, callback) => {
  const query =
    "SELECT id, first_name, last_name, email FROM users WHERE id = ?";
  db.query(query, [userId], callback);
};

const saveUserResponses = (userId, userResponses, date, callback) => {
  // Generate column names dynamically for the SQL query
  const columns =
    userResponses.map((_, index) => `answer_${index + 1}`).join(", ") +
    ", date"; // Add 'date' column

  // Generate placeholders for the answers dynamically
  const placeholders = userResponses.map(() => "?").join(", ") + ", ?"; // Add placeholder for 'date'

  // Extract the answers in the correct order
  const answers = userResponses.map(({ answer }) => answer);

  // SQL query to insert or update the row
  const sql = `
    INSERT INTO user_responses (user_id, ${columns})
    VALUES (?, ${placeholders})
  `;

  // Execute the query
  db.query(sql, [userId, ...answers, date], (err, result) => {
    callback(err, result);
  });
};

const saveFinalScores = (userId, scores, date, callback) => {
  // Map scores to their respective columns
  const {
    RIASEC: {
      Realistic: {
        HandsOn: realistic_hands_on_riasec,
        TechComfort: realistic_tech_comfort_riasec
      } = {},
      Investigative: {
        ProblemSolving: investigative_problem_solving_riasec,
        Curiosity: investigative_curiosity_riasec
      } = {},
      Artistic: { Creative: artistic_creative_riasec } = {},
      Social: {
        Social: social_social_riasec,
        Collaboration: social_collaboration_riasec
      } = {},
      Enterprising: { Enterprising: enterprising_enterprising_riasec } = {},
      Conventional: { Conventional: conventional_conventional_riasec } = {}
    } = {},
    Preferences: {
      PersonalityTypes: personality_types_preferences = [],
      WorkEnvironment: work_environment_preferences = [],
      JobPriority: job_priority_preferences = [],
      JobSatisfaction: job_satisfaction_preferences = [],
      EducationLevel: education_level_preferences = [],
      CareerGoals: career_goals_preferences = []
    } = {},
    WorkStyle: {
      StructurePreference: structure_preference_workstyle = null,
      Collaboration: collaboration_workstyle = null,
      WorkEnvironment: work_environment_workstyle = null
    } = {}
  } = scores;

  // SQL Query
  const sql = `
    INSERT INTO final_scores (
      user_id, date,
      realistic_hands_on_riasec, realistic_tech_comfort_riasec,
      investigative_problem_solving_riasec, investigative_curiosity_riasec,
      artistic_creative_riasec, social_social_riasec, social_collaboration_riasec,
      enterprising_enterprising_riasec, conventional_conventional_riasec,
      personality_types_preferences, work_environment_preferences,
      job_priority_preferences, job_satisfaction_preferences, education_level_preferences, career_goals_preferences,
      structure_preference_workstyle, collaboration_workstyle, work_environment_workstyle
    ) VALUES (
      ?, ?,
      ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
    )
  `;

  // Parameters
  const params = [
    userId,
    date,
    realistic_hands_on_riasec,
    realistic_tech_comfort_riasec,
    investigative_problem_solving_riasec,
    investigative_curiosity_riasec,
    artistic_creative_riasec,
    social_social_riasec,
    social_collaboration_riasec,
    enterprising_enterprising_riasec,
    conventional_conventional_riasec,
    JSON.stringify(personality_types_preferences),
    JSON.stringify(work_environment_preferences),
    JSON.stringify(job_priority_preferences),
    JSON.stringify(job_satisfaction_preferences),
    JSON.stringify(education_level_preferences),
    JSON.stringify(career_goals_preferences),
    structure_preference_workstyle,
    collaboration_workstyle,
    work_environment_workstyle
  ];

  // Execute the query
  db.query(sql, params, (err, result) => {
    callback(err, result);
  });
};

const saveOccupation = async (
  translatedData,
  userId,
  date,
  reason,
  callback
) => {
  try {
    const educationLevels =
      translatedData?.education?.level_required?.category ?? [];

    // Translate each education level name
    const educationTranslations = await Promise.all(
      educationLevels.map(async (level) => {
        const translatedName = await hf.translate(level.name); // Translate the education level name
        return `${translatedName}: ${level.score?.value}%`;
      })
    );
    const translatedReason = await hf.translate(reason);

    const extractedData = {
      code: translatedData?.code ?? null,
      title_bg: translatedData?.translated?.title ?? null,
      title_en: translatedData?.occupation?.title ?? null,
      description: translatedData?.translated?.description ?? null,
      reason: translatedReason ?? null,
      bright_outlook: JSON.stringify(
        translatedData?.occupation?.bright_outlook?.category ?? null
      ),
      education:
        educationTranslations.length > 0
          ? educationTranslations.join(", ")
          : null
    };

    db.beginTransaction((err) => {
      if (err) {
        return callback(err);
      }

      const occupationQuery = `
        INSERT INTO occupations (code, user_id, title_bg, title_en, description, reason, bright_outlook, education, date)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      db.query(
        occupationQuery,
        [
          extractedData.code,
          userId,
          extractedData.title_bg,
          extractedData.title_en,
          extractedData.description,
          extractedData.reason,
          extractedData.bright_outlook,
          extractedData.education,
          date
        ],
        (err) => {
          if (err) {
            return db.rollback(() => callback(err));
          }

          db.commit((err) => {
            if (err) {
              return db.rollback(() => callback(err));
            }
            callback(null);
          });
        }
      );
    });
  } catch (error) {
    callback(error); // Handle any translation errors or unexpected issues
  }
};

const saveCategoryData = (translatedData, callback) => {
  const categories = ["abilities", "knowledge", "skills", "interests"];
  const additionalTables = [
    "related_occupations",
    "work_activities",
    "technology_skills",
    "tasks"
  ];
  const occupationCode = translatedData?.code ?? null;

  if (!occupationCode) {
    console.error("Missing occupation code. Cannot proceed.");
    return callback(new Error("Invalid occupation code."));
  }

  db.beginTransaction((err) => {
    if (err) {
      console.error("Transaction start error:", err.message);
      return callback(err);
    }

    let hasErrorOccurred = false;

    const processCategory = async (category) => {
      try {
        const ids =
          translatedData?.[category]?.element?.map((item) => item.id) ?? [];
        const namesBg =
          translatedData?.translated?.[category].map(
            (item) => item.translated_name
          ) ?? [];
        const namesEn =
          translatedData?.[category]?.element?.map(
            (category) => category.name
          ) ?? [];
        const importance =
          translatedData?.[category]?.element?.map(
            (item) => item.score?.value
          ) ?? [];

        if (
          ids.length === 0 ||
          namesBg.length === 0 ||
          namesEn.length === 0 ||
          importance.length === 0 ||
          ids.length !== namesEn.length ||
          ids.length !== importance.length
        ) {
          console.warn(
            `Invalid or incomplete data for ${category}. Skipping...`
          );
          return;
        }

        const categoryData = ids.map((id, index) => [
          id,
          occupationCode,
          namesEn[index],
          namesBg[index],
          importance[index] ?? null
        ]);

        const deleteQuery = `DELETE FROM ${category} WHERE occupation_code = ?;`;
        await db.promise().query(deleteQuery, [occupationCode]);

        const insertQuery = `
          INSERT INTO ${category} (onet_id, occupation_code, name_en, name_bg, importance)
          VALUES ?;
        `;
        await db.promise().query(insertQuery, [categoryData]);
      } catch (error) {
        console.error(`Error processing ${category}:`, error.message);
        hasErrorOccurred = true;
      }
    };

    const processAdditionalTable = async (table) => {
      try {
        let data = [];
        let deleteQuery = `DELETE FROM ${table} WHERE occupation_code = ?;`;
        let insertQuery = "";

        switch (table) {
          case "related_occupations":
            data =
              translatedData?.related_occupations?.occupation?.map(
                (occ, index) => [
                  null, // Auto-increment ID will not be replaced
                  occ.code, // O*NET ID
                  occupationCode, // Parent occupation code
                  occ.title, // English title
                  translatedData?.translated?.related_occupations?.[index]
                    ?.translated_name // Bulgarian title
                ]
              ) ?? [];
            insertQuery = `
              INSERT INTO ${table} (id, onet_id, occupation_code, name_en, name_bg)
              VALUES ?;
            `;
            break;
          case "work_activities":
            data =
              translatedData?.detailed_work_activities?.activity?.map(
                (activity, index) => [
                  null,
                  activity.id,
                  occupationCode,
                  activity.name,
                  translatedData?.translated?.detailed_work_activities?.[index]
                    ?.translated_name
                ]
              ) ?? [];
            insertQuery = `
              INSERT INTO ${table} (id, onet_id, occupation_code, name_en, name_bg)
              VALUES ?;
            `;
            break;
          case "technology_skills":
            data =
              translatedData?.technology_skills?.category?.map(
                (techSkill, index) => [
                  null,
                  techSkill.title.id,
                  occupationCode,
                  techSkill.title.name,
                  translatedData?.translated?.technology_skills?.[index]
                    ?.translated_name
                ]
              ) ?? [];
            insertQuery = `
              INSERT INTO ${table} (id, onet_id, occupation_code, name_en, name_bg)
              VALUES ?;
            `;
            break;
          case "tasks":
            data =
              translatedData?.tasks?.task?.map((task, index) => [
                null,
                task.id,
                occupationCode,
                task.statement,
                translatedData?.translated?.tasks?.[index]?.translated_name,
                task.score?.value ?? null
              ]) ?? [];
            insertQuery = `
              INSERT INTO ${table} (id, onet_id, occupation_code, name_en, name_bg, importance)
              VALUES ?;
            `;
            break;
          default:
            return;
        }

        if (data.length > 0) {
          await db.promise().query(deleteQuery, [occupationCode]);
          await db.promise().query(insertQuery, [data]);
        }
      } catch (error) {
        console.error(`Error processing ${table}:`, error.message);
        hasErrorOccurred = true;
      }
    };

    (async () => {
      for (const category of categories) {
        await processCategory(category);
        if (hasErrorOccurred) break;
      }

      for (const table of additionalTables) {
        await processAdditionalTable(table);
        if (hasErrorOccurred) break;
      }

      if (hasErrorOccurred) {
        db.rollback(() => {
          callback(new Error("An error occurred while saving data."));
        });
      } else {
        db.commit((err) => {
          if (err) {
            console.error("Transaction commit error:", err.message);
            db.rollback(() =>
              callback(new Error("Transaction failed during commit."))
            );
          } else {
            callback(null); // Success
          }
        });
      }
    })();
  });
};

const saveAIAnalysis = (userId, analysisData, callback) => {
  const {
    Abilities,
    Skills,
    Knowledge,
    Interests,
    WorkStyle,
    WorkValues,
    TechnologySkills
  } = analysisData;

  const query = `
    INSERT INTO users_ai_analysis (user_id, abilities, skills, knowledge, interests, work_style, work_values, technology_skills)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE 
      abilities = VALUES(abilities),
      skills = VALUES(skills),
      knowledge = VALUES(knowledge),
      interests = VALUES(interests),
      work_style = VALUES(work_style),
      work_values = VALUES(work_values),
      technology_skills = VALUES(technology_skills)
  `;

  const values = [
    userId,
    Abilities.join(", "),
    Skills.join(", "),
    Knowledge.join(", "),
    Interests.join(", "),
    WorkStyle.join(", "),
    WorkValues.join(", "),
    TechnologySkills.join(", ")
  ];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error("Error saving AI analysis data:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

const getUsersCount = (callback) => {
  const query = `
    SELECT COUNT(*) AS user_count
    FROM users
  `;
  db.query(query, callback);
};

const getDistinctOccupations = (callback) => {
  const query = `
    SELECT 
      code, 
      title_bg, 
      title_en, 
      description, 
      bright_outlook, 
      education
    FROM occupations
    GROUP BY code;
  `;
  db.query(query, callback);
};

const getTopRecommendedOccupations = (limit, callback) => {
  const query = `
    SELECT 
      code, 
      title_bg, 
      title_en, 
      description, 
      bright_outlook, 
      education, 
      COUNT(code) AS recommendation_count
    FROM occupations
    GROUP BY code
    ORDER BY recommendation_count DESC
    LIMIT ?;
  `;
  db.query(query, [limit], callback);
};

const getTopRecommendedRelatedOccupations = (limit, callback) => {
  const query = `
    SELECT 
      onet_id, 
      name_en,
      name_bg, 
      COUNT(onet_id) AS recommendation_count
    FROM related_occupations
    GROUP BY onet_id
    ORDER BY recommendation_count DESC
    LIMIT ?;
  `;
  db.query(query, [limit], callback);
};

const getMostNeededAbilities = (limit, callback) => {
  const query = `
    SELECT 
      onet_id, 
      name_en, 
      name_bg, 
      COUNT(onet_id) AS occurrence_count
    FROM abilities
    GROUP BY onet_id
    ORDER BY occurrence_count DESC
    LIMIT ?;
  `;
  db.query(query, [limit], callback);
};

const getMostNeededKnowledge = (limit, callback) => {
  const query = `
    SELECT 
      onet_id, 
      name_en, 
      name_bg, 
      COUNT(onet_id) AS occurrence_count
    FROM knowledge
    GROUP BY onet_id
    ORDER BY occurrence_count DESC
    LIMIT ?;
  `;
  db.query(query, [limit], callback);
};

const getMostNeededSkills = (limit, callback) => {
  const query = `
    SELECT 
      onet_id, 
      name_en, 
      name_bg, 
      COUNT(onet_id) AS occurrence_count
    FROM skills
    GROUP BY onet_id
    ORDER BY occurrence_count DESC
    LIMIT ?;
  `;
  db.query(query, [limit], callback);
};

const getMostNeededTasks = (limit, callback) => {
  const query = `
    SELECT 
      onet_id, 
      name_en, 
      name_bg, 
      COUNT(onet_id) AS occurrence_count
    FROM tasks
    GROUP BY onet_id
    ORDER BY occurrence_count DESC
    LIMIT ?;
  `;
  db.query(query, [limit], callback);
};

const getMostNeededTechnologySkills = (limit, callback) => {
  const query = `
    SELECT 
      onet_id, 
      name_en, 
      name_bg, 
      COUNT(onet_id) AS occurrence_count
    FROM technology_skills
    GROUP BY onet_id
    ORDER BY occurrence_count DESC
    LIMIT ?;
  `;
  db.query(query, [limit], callback);
};

const getMostNeededWorkActivities = (limit, callback) => {
  const query = `
    SELECT 
      onet_id, 
      name_en, 
      name_bg, 
      COUNT(onet_id) AS occurrence_count
    FROM work_activities
    GROUP BY onet_id
    ORDER BY occurrence_count DESC
    LIMIT ?;
  `;
  db.query(query, [limit], callback);
};

const getMostSelectedCareerGoals = (limit, callback) => {
  const query = `
    SELECT preference, COUNT(*) AS occurrence_count
    FROM (
      SELECT JSON_UNQUOTE(JSON_EXTRACT(career_goals_preferences, CONCAT('$[', n, ']'))) AS preference
      FROM final_scores
      JOIN (
        SELECT 0 AS n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4
        UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9
        UNION ALL SELECT 10
      ) AS numbers ON CHAR_LENGTH(career_goals_preferences)
      -CHAR_LENGTH(REPLACE(career_goals_preferences, ',', '')) >= n
    ) AS preferences
    GROUP BY preference
    ORDER BY occurrence_count DESC
    LIMIT ?;
  `;
  db.query(query, [limit], callback);
};

const getMostSelectedPersonalityTypes = (limit, callback) => {
  const query = `
    SELECT preference, COUNT(*) AS occurrence_count
    FROM (
      SELECT JSON_UNQUOTE(JSON_EXTRACT(personality_types_preferences, CONCAT('$[', n, ']'))) AS preference
      FROM final_scores
      JOIN (
        SELECT 0 AS n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4
        UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9
        UNION ALL SELECT 10
      ) AS numbers ON CHAR_LENGTH(personality_types_preferences)
      -CHAR_LENGTH(REPLACE(personality_types_preferences, ',', '')) >= n
    ) AS preferences
    GROUP BY preference
    ORDER BY occurrence_count DESC
    LIMIT ?;
  `;
  db.query(query, [limit], callback);
};

const getMostSelectedWorkEnvironments = (limit, callback) => {
  const query = `
    SELECT preference, COUNT(*) AS occurrence_count
    FROM (
      SELECT JSON_UNQUOTE(JSON_EXTRACT(work_environment_preferences, CONCAT('$[', n, ']'))) AS preference
      FROM final_scores
      JOIN (
        SELECT 0 AS n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4
        UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9
        UNION ALL SELECT 10
      ) AS numbers ON CHAR_LENGTH(work_environment_preferences)
      -CHAR_LENGTH(REPLACE(work_environment_preferences, ',', '')) >= n
    ) AS preferences
    GROUP BY preference
    ORDER BY occurrence_count DESC
    LIMIT ?;
  `;
  db.query(query, [limit], callback);
};

const getMostSelectedJobPriorities = (limit, callback) => {
  const query = `
    SELECT preference, COUNT(*) AS occurrence_count
    FROM (
      SELECT JSON_UNQUOTE(JSON_EXTRACT(job_priority_preferences, CONCAT('$[', n, ']'))) AS preference
      FROM final_scores
      JOIN (
        SELECT 0 AS n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4
        UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9
        UNION ALL SELECT 10
      ) AS numbers ON CHAR_LENGTH(job_priority_preferences)
      -CHAR_LENGTH(REPLACE(job_priority_preferences, ',', '')) >= n
    ) AS preferences
    GROUP BY preference
    ORDER BY occurrence_count DESC
    LIMIT ?;
  `;
  db.query(query, [limit], callback);
};

const getMostSelectedEducationLevels = (limit, callback) => {
  const query = `
    SELECT preference, COUNT(*) AS occurrence_count
    FROM (
      SELECT JSON_UNQUOTE(JSON_EXTRACT(education_level_preferences, CONCAT('$[', n, ']'))) AS preference
      FROM final_scores
      JOIN (
        SELECT 0 AS n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4
        UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9
        UNION ALL SELECT 10
      ) AS numbers ON CHAR_LENGTH(education_level_preferences)
      -CHAR_LENGTH(REPLACE(education_level_preferences, ',', '')) >= n
    ) AS preferences
    GROUP BY preference
    ORDER BY occurrence_count DESC
    LIMIT ?;
  `;
  db.query(query, [limit], callback);
};

module.exports = {
  checkEmailExists,
  createUser,
  findUserByEmail,
  updateUserPassword,
  getUserById,
  getUserData,
  saveUserResponses,
  saveFinalScores,
  saveOccupation,
  saveCategoryData,
  saveAIAnalysis,
  getUsersCount,
  getDistinctOccupations,
  getTopRecommendedOccupations,
  getTopRecommendedRelatedOccupations,
  getMostNeededAbilities,
  getMostNeededKnowledge,
  getMostNeededSkills,
  getMostNeededTasks,
  getMostNeededTechnologySkills,
  getMostNeededWorkActivities,
  getMostSelectedCareerGoals,
  getMostSelectedPersonalityTypes,
  getMostSelectedWorkEnvironments,
  getMostSelectedJobPriorities,
  getMostSelectedEducationLevels
};
