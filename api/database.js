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
    ON DUPLICATE KEY UPDATE 
    ${userResponses
      .map((_, index) => `answer_${index + 1} = VALUES(answer_${index + 1})`)
      .join(", ")}, date = VALUES(date)
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
    ON DUPLICATE KEY UPDATE
      realistic_hands_on_riasec = VALUES(realistic_hands_on_riasec),
      realistic_tech_comfort_riasec = VALUES(realistic_tech_comfort_riasec),
      investigative_problem_solving_riasec = VALUES(investigative_problem_solving_riasec),
      investigative_curiosity_riasec = VALUES(investigative_curiosity_riasec),
      artistic_creative_riasec = VALUES(artistic_creative_riasec),
      social_social_riasec = VALUES(social_social_riasec),
      social_collaboration_riasec = VALUES(social_collaboration_riasec),
      enterprising_enterprising_riasec = VALUES(enterprising_enterprising_riasec),
      conventional_conventional_riasec = VALUES(conventional_conventional_riasec),
      personality_types_preferences = VALUES(personality_types_preferences),
      work_environment_preferences = VALUES(work_environment_preferences),
      job_priority_preferences = VALUES(job_priority_preferences),
      education_level_preferences = VALUES(education_level_preferences),
      career_goals_preferences = VALUES(career_goals_preferences),
      structure_preference_workstyle = VALUES(structure_preference_workstyle),
      collaboration_workstyle = VALUES(collaboration_workstyle),
      work_environment_workstyle = VALUES(work_environment_workstyle),
      date = VALUES(date)
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

const saveRecommendations = (translatedData, callback) => {
  const extractedData = {
    code: translatedData?.code ?? null,
    title_bg: translatedData?.translated?.title ?? null,
    title_en: translatedData?.occupation?.title ?? null,
    description: translatedData?.translated?.description ?? null,
    bright_outlook:
      translatedData?.occupation?.bright_outlook?.category ?? null,
    tasks: translatedData?.tasks?.task?.map((task) => task.statement) ?? [],
    tasks_id: translatedData?.tasks?.task?.map((task) => task.id) ?? [],
    skills: translatedData?.translated?.skills ?? [],
    skills_id: translatedData?.skills?.element?.map((skill) => skill.id) ?? [],
    skills_importance:
      translatedData?.skills?.element?.map((skill) => skill.score?.value) ?? [],
    abilities:
      translatedData?.abilities?.element?.map((ability) => ability.name) ?? [],
    abilities_id:
      translatedData?.abilities?.element?.map((ability) => ability.id) ?? [],
    abilities_importance:
      translatedData?.abilities?.element?.map(
        (ability) => ability.score?.value
      ) ?? [],
    knowledge:
      translatedData?.knowledge?.element?.map((knowledge) => knowledge.name) ??
      [],
    knowledge_id:
      translatedData?.knowledge?.element?.map((knowledge) => knowledge.id) ??
      [],
    knowledge_importance:
      translatedData?.knowledge?.element?.map(
        (knowledge) => knowledge.score?.value
      ) ?? [],
    technology_skills:
      translatedData?.technology_skills?.category?.map(
        (techSkill) => techSkill.title?.name
      ) ?? [],
    technology_skills_id:
      translatedData?.technology_skills?.category?.map(
        (techSkill) => techSkill.title?.id
      ) ?? [],
    work_activities:
      translatedData?.detailed_work_activities?.activity?.map(
        (activity) => activity.name
      ) ?? [],
    work_activities_id:
      translatedData?.detailed_work_activities?.activity?.map(
        (activity) => activity.id
      ) ?? [],
    education:
      translatedData?.education?.level_required?.category
        ?.map((level) => `${level.name}: ${level.score?.value}%`)
        .join(", ") ?? null,
    interests:
      translatedData?.interests?.element?.map((interest) => interest.name) ??
      [],
    interests_id:
      translatedData?.interests?.element?.map((interest) => interest.id) ?? [],
    interests_importance:
      translatedData?.interests?.element?.map(
        (interest) => interest.score?.value
      ) ?? [],
    related_occupations:
      translatedData?.related_occupations?.occupation?.map(
        (occupation) => occupation.code
      ) ?? []
  };

  console.log("Saving recommendations:", extractedData);

  setTimeout(() => {
    const success = true;

    if (success) {
      callback(null);
    } else {
      callback(new Error("Failed to save data"));
    }
  }, 1000); // Simulating async operation with a delay
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
  saveRecommendations
};
