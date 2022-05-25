const express = require("express");
const app = express();
const cors = require("cors");
const auth = require("./routes/auth");

// middleware
app.use(express.json()); // req.body
app.use(cors());

// Routes

// Register and login Routes
app.use("/auth", auth);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
