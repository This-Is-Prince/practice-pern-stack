const getSingleTodo = require("../controller/get-single-todo");

module.exports = async function (req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ msg: "Please send todo_id..." });
      return;
    }
    const todo = await getSingleTodo(id);
    if (todo && todo.rows.length > 0) {
      res.status(200).json(todo.rows);
    } else {
      res.status(404).json({ msg: "Todo Not Found..." });
    }
  } catch (error) {
    console.log(error);
    res.status(503).json(error);
  }
};
