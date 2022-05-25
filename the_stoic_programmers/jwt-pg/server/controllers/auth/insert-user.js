const pool = require("../db/db");

module.exports = function insertUser(name, email, password) {
  return pool.query(
    "INSERT INTO users(user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *;",
    [name, email, password]
  );
};
