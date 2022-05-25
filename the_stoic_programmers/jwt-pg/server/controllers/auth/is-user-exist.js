const pool = require("../db/db");

module.exports = function isUserExist(email) {
  return pool.query("SELECT * FROM users WHERE user_email = $1", [email]);
};
