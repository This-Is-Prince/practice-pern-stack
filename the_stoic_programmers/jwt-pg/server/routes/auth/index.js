const auth = require("express").Router();
const login = require("./login");
const signup = require("./signup");

// Registering
auth.post("/signup", signup);
auth.post("/login", login);

module.exports = auth;
