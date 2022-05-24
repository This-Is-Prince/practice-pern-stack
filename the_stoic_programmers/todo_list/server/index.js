const express = require("express");
const cors = require("cors");
const todos = require("./routes");

const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(express.json()); // => allows us to access to req.body

// todos router
app.use("/todos", todos);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
