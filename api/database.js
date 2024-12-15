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

module.exports = {
  checkEmailExists,
  createUser,
  findUserByEmail,
  updateUserPassword,
  getUserById,
  getUserData,
  saveUserResponses
};
