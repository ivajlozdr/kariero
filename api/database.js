const mysql = require("mysql2");
const dbOpts = require("./config.js").dbOpts;
const dbOptsLocal = require("./config.js").dbOptsLocal;
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
      job_priority_preferences, education_level_preferences, career_goals_preferences,
      structure_preference_workstyle, collaboration_workstyle, work_environment_workstyle
    ) VALUES (
      ?, ?,
      ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
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

// const saveRecommendations = (translatedData, userId, date, callback) => {
//   const extractedData = {
//     code: translatedData?.code ?? null,
//     title_bg: translatedData?.translated?.title ?? null,
//     title_en: translatedData?.occupation?.title ?? null,
//     description: translatedData?.translated?.description ?? null,
//     bright_outlook: JSON.stringify(
//       translatedData?.occupation?.bright_outlook?.category ?? null
//     ),
//     education:
//       translatedData?.education?.level_required?.category
//         ?.map((level) => `${level.name}: ${level.score?.value}%`)
//         .join(", ") ?? null,
//     tasks: translatedData?.tasks?.task ?? [],
//     skills: translatedData?.skills?.element ?? [],
//     abilities: translatedData?.abilities?.element ?? [],
//     knowledge: translatedData?.knowledge?.element ?? [],
//     related_occupations:
//       translatedData?.related_occupations?.occupation?.map(
//         (occupation) => occupation.code
//       ) ?? []
//   };

//   db.beginTransaction((err) => {
//     if (err) {
//       // console.log("Error starting transaction:", err);
//       return callback(err);
//     }

//     // Insert into occupations table, now using the passed 'date' variable
//     const occupationQuery = `
//       INSERT INTO occupations (code, user_id, title_bg, title_en, description, bright_outlook, education, date)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//       ON DUPLICATE KEY UPDATE
//         title_bg = VALUES(title_bg),
//         title_en = VALUES(title_en),
//         description = VALUES(description),
//         bright_outlook = VALUES(bright_outlook),
//         education = VALUES(education)
//     `;
//     console.log("date: ", date);
//     db.query(
//       occupationQuery,
//       [
//         extractedData.code,
//         userId, // Pass userId dynamically
//         extractedData.title_bg,
//         extractedData.title_en,
//         extractedData.description,
//         extractedData.bright_outlook,
//         extractedData.education,
//         date // Passing the date
//       ],
//       (err) => {
//         if (err) {
//           // console.log("Error inserting occupation:", err);
//           return db.rollback(() => callback(err));
//         }

//         const insertDetails = (table, items, columns) => {
//           if (!items.length) return Promise.resolve();

//           const placeholders = items
//             .map(() => `(${columns.map(() => "?").join(", ")})`)
//             .join(", ");
//           const values = items.flatMap((item) =>
//             columns.map((col) => {
//               const value = item[col] ?? null;
//               return Array.isArray(value) || typeof value === "object"
//                 ? JSON.stringify(value)
//                 : value;
//             })
//           );

//           const query = `
//             INSERT INTO ${table} (${columns.join(", ")})
//             VALUES ${placeholders}
//             ON DUPLICATE KEY UPDATE ${columns
//               .map((col) => `${col} = VALUES(${col})`)
//               .join(", ")}
//           `;

//           return new Promise((resolve, reject) => {
//             db.query(query, values, (err) => {
//               if (err) {
//                 // console.log("Error inserting details:", err);
//                 reject(err);
//               } else resolve();
//             });
//           });
//         };

//         // Insert tasks, skills, abilities, knowledge, and related occupations

//         insertDetails("tasks", extractedData.tasks, [
//           "id",
//           "occupation_code",
//           "task_description"
//         ])
//           .then(() =>
//             insertDetails("skills", extractedData.skills, [
//               "id",
//               "occupation_code",
//               "name",
//               "importance"
//             ])
//           )
//           .then(() =>
//             insertDetails("abilities", extractedData.abilities, [
//               "id",
//               "occupation_code",
//               "name",
//               "importance"
//             ])
//           )
//           .then(() =>
//             insertDetails("knowledge", extractedData.knowledge, [
//               "id",
//               "occupation_code",
//               "name",
//               "importance"
//             ])
//           )
//           .then(() => {
//             const relatedValues = extractedData.related_occupations.map(
//               (relatedCode) => [extractedData.code, relatedCode]
//             );
//             const relatedQuery = `
//               INSERT INTO related_occupations (occupation_code, related_occupation_code)
//               VALUES ?
//               ON DUPLICATE KEY UPDATE related_occupation_code = VALUES(related_occupation_code)
//             `;

//             return new Promise((resolve, reject) => {
//               db.query(relatedQuery, [relatedValues], (err) => {
//                 if (err) {
//                   // console.log("Error inserting related occupations:", err);
//                   reject(err);
//                 } else resolve();
//               });
//             });
//           })
//           .then(() => {
//             db.commit((err) => {
//               if (err) {
//                 // console.log("Error committing transaction:", err);
//                 return db.rollback(() => callback(err));
//               }
//               console.log("Data saved successfully!");
//               callback(null);
//             });
//           })
//           .catch((err) => {
//             // console.log("Error in transaction:", err);
//             db.rollback(() => callback(err));
//           });
//       }
//     );
//   });
// };

const saveOccupation = (translatedData, userId, date, callback) => {
  const extractedData = {
    code: translatedData?.code ?? null,
    title_bg: translatedData?.translated?.title ?? null,
    title_en: translatedData?.occupation?.title ?? null,
    description: translatedData?.translated?.description ?? null,
    bright_outlook: JSON.stringify(
      translatedData?.occupation?.bright_outlook?.category ?? null
    ),
    education:
      translatedData?.education?.level_required?.category
        ?.map((level) => `${level.name}: ${level.score?.value}%`)
        .join(", ") ?? null
  };

  db.beginTransaction((err) => {
    if (err) {
      return callback(err);
    }

    const occupationQuery = `
      INSERT INTO occupations (code, user_id, title_bg, title_en, description, bright_outlook, education, date)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      occupationQuery,
      [
        extractedData.code,
        userId,
        extractedData.title_bg,
        extractedData.title_en,
        extractedData.description,
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
};

// const alldata = {
//   id: translatedData?.skills?.element?.map((skill) => skill.id) ?? [],
//   occupationCode: translatedData?.code ?? null,
//   skills: translatedData?.translated?.skills ?? [],
//   skills_importance:
//     translatedData?.skills?.element?.map((skill) => skill.score?.value) ?? [],
//   title_bg: translatedData?.translated?.title ?? null,
//   title_en: translatedData?.occupation?.title ?? null,
//   description: translatedData?.translated?.description ?? null,
//   bright_outlook: translatedData?.occupation?.bright_outlook?.category ?? null,
//   tasks: translatedData?.tasks?.task?.map((task) => task.statement) ?? [],
//   tasks_id: translatedData?.tasks?.task?.map((task) => task.id) ?? [],
//   skills: translatedData?.translated?.skills ?? [],
//   skills_id: translatedData?.skills?.element?.map((skill) => skill.id) ?? [],
//   skills_importance:
//     translatedData?.skills?.element?.map((skill) => skill.score?.value) ?? [],
//   abilities:
//     translatedData?.abilities?.element?.map((ability) => ability.name) ?? [],
//   abilities_id:
//     translatedData?.abilities?.element?.map((ability) => ability.id) ?? [],
//   abilities_importance:
//     translatedData?.abilities?.element?.map(
//       (ability) => ability.score?.value
//     ) ?? [],
//   knowledge:
//     translatedData?.knowledge?.element?.map((knowledge) => knowledge.name) ??
//     [],
//   knowledge_id:
//     translatedData?.knowledge?.element?.map((knowledge) => knowledge.id) ?? [],
//   knowledge_importance:
//     translatedData?.knowledge?.element?.map(
//       (knowledge) => knowledge.score?.value
//     ) ?? [],
//   technology_skills:
//     translatedData?.technology_skills?.category?.map(
//       (techSkill) => techSkill.title?.name
//     ) ?? [],
//   technology_skills_id:
//     translatedData?.technology_skills?.category?.map(
//       (techSkill) => techSkill.title?.id
//     ) ?? [],
//   work_activities:
//     translatedData?.detailed_work_activities?.activity?.map(
//       (activity) => activity.name
//     ) ?? [],
//   work_activities_id:
//     translatedData?.detailed_work_activities?.activity?.map(
//       (activity) => activity.id
//     ) ?? [],
//   education:
//     translatedData?.education?.level_required?.category
//       ?.map((level) => `${level.name}: ${level.score?.value}%`)
//       .join(", ") ?? null,
//   interests:
//     translatedData?.interests?.element?.map((interest) => interest.name) ?? [],
//   interests_id:
//     translatedData?.interests?.element?.map((interest) => interest.id) ?? [],
//   interests_importance:
//     translatedData?.interests?.element?.map(
//       (interest) => interest.score?.value
//     ) ?? [],
//   related_occupations:
//     translatedData?.related_occupations?.occupation?.map(
//       (occupation) => occupation.code
//     ) ?? []
// };

const saveCategoryData = (translatedData, callback) => {
  // Define the categories to loop through
  const categories = ["abilities", "knowledge", "skills", "interests"];

  const occupationCode = translatedData?.code ?? null;

  // Begin a transaction to ensure atomicity for all categories
  db.beginTransaction((err) => {
    if (err) {
      console.error("Transaction start error:", err.message);
      return callback(err);
    }

    // Flag to track whether any error occurred
    let hasErrorOccurred = false;

    // Loop through each category and process it
    categories.forEach((category) => {
      // Get the data for the current category
      const ids =
        translatedData?.[category]?.element?.map((item) => item.id) ?? [];
      const names =
        category == "skills"
          ? translatedData?.translated?.[category] ?? []
          : translatedData?.[category]?.element?.map(
              (ability) => ability.name
            ) ?? [];
      const importance =
        translatedData?.[category]?.element?.map((item) => item.score?.value) ??
        [];

      console.log(`Evaluating category: ${category}`);
      console.log("IDs:", ids);
      console.log("Names:", names);
      console.log("Importance:", importance);
      if (
        !occupationCode ||
        ids.length === 0 ||
        names.length === 0 ||
        importance.length === 0
      ) {
        console.error(
          `Missing or invalid data for saving ${category}. Skipping...`
        );
        hasErrorOccurred = true;
        return; // Skip this category and continue with the next one
      }

      if (ids.length !== names.length || ids.length !== importance.length) {
        console.error(
          `${category} data arrays are not aligned in length. Skipping...`
        );
        hasErrorOccurred = true;
        return; // Skip this category and continue with the next one
      }

      // Prepare the rows for bulk insertion
      const categoryData = ids.map((id, index) => {
        return [
          id, // Item ID (Skill/Knowledge/Interest/Ability)
          occupationCode, // Occupation code
          category == "skills"
            ? names[index].translated_name ?? null
            : names[index], // Item name
          importance[index] ?? null // Item importance
        ];
      });

      console.log(`${category} data:`, categoryData); // Log the current item data for debugging

      // Check if the items already exist before inserting
      const checkQuery = `
        SELECT id FROM ${category} WHERE occupation_code = ? AND id IN (?);
      `;
      db.query(checkQuery, [occupationCode, ids], (err, results) => {
        if (err) {
          console.error(`Check existing ${category} query error:`, err.message);
          hasErrorOccurred = true;
          return; // Skip this category and continue with the next one
        }

        const existingIds = results.map((row) => row.id);
        const newData = categoryData.filter(
          (item) => !existingIds.includes(item[0])
        );

        // If there are new items to insert
        if (newData.length > 0) {
          const insertQuery = `
            INSERT INTO ${category} (id, occupation_code, name, importance)
            VALUES ?
          `;
          db.query(insertQuery, [newData], (err) => {
            if (err) {
              console.error(`Insert ${category} query error:`, err.message);
              hasErrorOccurred = true;
              return; // Skip this category and continue with the next one
            }

            console.log(
              `${
                category.charAt(0).toUpperCase() + category.slice(1)
              } for occupation "${occupationCode}" saved successfully.`
            );
          });
        } else {
          console.log(`No new ${category} for occupation "${occupationCode}".`);
        }
      });
    });

    // Commit the transaction after all categories have been processed
    db.commit((err) => {
      if (err || hasErrorOccurred) {
        console.error(
          "Transaction commit error or error occurred during process:",
          err
        );
        return db.rollback(() =>
          callback(
            err || new Error("An error occurred during the save process.")
          )
        );
      }
      callback(null); // Everything succeeded
    });
  });
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
  saveCategoryData
};
