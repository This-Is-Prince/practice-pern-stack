const bcrypt = require("bcrypt");
const insertUser = require("../../controllers/auth/insert-user");
const isUserExist = require("../../controllers/auth/is-user-exist");
const jwtToken = require("../../utils/jwt-token");

module.exports = async function signUp(req, res) {
  try {
    // 1. destructure the req.body (name, email, password)
    const { name, email, password } = req.body;

    // 2. check if user exist (if user exist then throw error)
    const prevUsers = await isUserExist(email);
    if (prevUsers && prevUsers.rows.length > 0) {
      res.status(409).json({ msg: "User already exist." });
      return;
    }

    // 3. Bcrypt the user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hashPassword = await bcrypt.hash(password, salt);

    // 4. Enter the new user inside our database
    const users = await insertUser(name, email, hashPassword);
    if (!users || users.rows.length === 0) {
      res.status(400).json({ msg: "User not created." });
      return;
    }

    // 5. Generating our jwt token
    const token = jwtToken(users.rows[0].user_id);
    res.status(201).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
