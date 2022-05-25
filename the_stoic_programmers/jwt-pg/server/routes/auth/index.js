const auth = require("express").Router();
const authorization = require("../../middleware/authorization");
const validInfo = require("../../middleware/validInfo");
const login = require("./login");
const signup = require("./signup");

// Registering
auth.post("/signup", validInfo, signup);
auth.post("/login", validInfo, login);
auth.get("/verify", authorization, (req, res) => {
  try {
    console.log(req.user);
    res.status(200).json(true);
  } catch (error) {
    console.error(error);
    return res.status(401).json(error);
  }
});

module.exports = auth;
