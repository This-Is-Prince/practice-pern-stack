const createTodo = require("../controller/create-todo");

module.exports = async function (req, res) {
  try {
    const { description } = req.body;
    if (!description) {
      res.status(400).json({ msg: "Please provide valid description..." });
      return;
    }
    const todo = await createTodo(description);
    if (todo && todo.rows.length > 0) {
      res.status(200).json(todo.rows);
    } else {
      res.status(500).json({ msg: "Database ERROR..." });
    }
  } catch (error) {
    console.log(error);
    res.status(503).json(error);
  }
};
