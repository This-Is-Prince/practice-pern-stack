const bcrypt = require("bcrypt");
const isUserExist = require("../../controllers/auth/is-user-exist");
const jwtToken = require("../../utils/jwt-token");

module.exports = async function logIn(req, res) {
  try {
    // 1. destructure the req.body
    const { email, password } = req.body;

    // 2. check if user doesn't exist (if not then we throw error)
    const users = await isUserExist(email);
    if (!users || users.rows.length === 0) {
      res.status(401).json({ msg: "Email is incorrect." });
      return;
    }

    // 3. check if incoming password is the same the database password
    const { user_id, user_password } = users.rows[0];
    const validPassword = await bcrypt.compare(password, user_password);
    if (!validPassword) {
      res.status(401).json({ msg: "Password is incorrect." });
      return;
    }

    // 4. give them jwt token
    const token = jwtToken(user_id);
    res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
