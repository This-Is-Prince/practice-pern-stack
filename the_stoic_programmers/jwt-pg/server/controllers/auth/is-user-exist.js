const pool = require("../db/db");

module.exports = async function isUserExist(email) {
  try {
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);
    if (user && user.rows.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
