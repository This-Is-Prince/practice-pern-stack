const getUser = require("../controllers/get-user");
const authorization = require("../middleware/authorization");
const dashboard = require("express").Router();

dashboard.get("/", authorization, async (req, res) => {
  try {
    const { id } = req.user;
    const user = await getUser(id);
    if (!user || user.rows.length === 0) {
      res.status(404).json({ msg: "User not found" });
    } else {
      res.status(200).json(user.rows[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = dashboard;
