const updateTodo = require("../controller/update-todo");

module.exports = async function (req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ msg: "Please send todo_id..." });
      return;
    }
    const { description } = req.body;
    if (description === null || description === undefined) {
      res.status(400).json({ msg: "Please send a description..." });
      return;
    }
    const todo = await updateTodo(id, description);
    if (todo && todo.rows.length > 0) {
      res.status(200).json(todo.rows);
    } else {
      res.status(404).json({ msg: `Todo with id ${id} is not found...` });
    }
  } catch (error) {
    console.log(error);
    res.status(503).json(error);
  }
};
