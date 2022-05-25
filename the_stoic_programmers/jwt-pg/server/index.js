const express = require("express");
const app = express();
const cors = require("cors");
const auth = require("./routes/auth");
const dashboard = require("./routes/dashboard");

// middleware
app.use(express.json()); // req.body
app.use(cors());

// Routes

// SignUp, logIn and Verify Routes
app.use("/auth", auth);

// Dashboard Routes
app.use("/dashboard", dashboard);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
