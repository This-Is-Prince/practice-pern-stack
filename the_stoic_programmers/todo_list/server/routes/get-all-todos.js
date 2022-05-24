const getAllTodos = require("../controller/get-all-todos");

module.exports = async function (req, res) {
  try {
    const todos = await getAllTodos();
    if (todos && todos.rows.length > 0) {
      res.status(200).json(todos.rows);
    } else {
      res.status(404).json({ msg: "Todos Not Found..." });
    }
  } catch (error) {
    console.log(error);
    res.status(503).json(error);
  }
};
