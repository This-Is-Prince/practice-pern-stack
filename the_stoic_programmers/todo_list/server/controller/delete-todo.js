const pool = require("./db");

function deleteTodo(id) {
  return pool.query("DELETE FROM todo WHERE todo_id = $1 RETURNING *", [id]);
}

module.exports = deleteTodo;
