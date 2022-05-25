const pool = require("./db/db");

module.exports = function getUser(id) {
  return pool.query("SELECT user_name FROM users WHERE user_id = $1", [id]);
};
