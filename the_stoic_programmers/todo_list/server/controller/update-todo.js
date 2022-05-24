const pool = require("./db");

function updateTodo(id, description) {
  return pool.query(
    "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
    [description, id]
  );
}

module.exports = updateTodo;
