const pool = require("./db");

function getSingleTodo(id) {
  return pool.query("SELECT description FROM todo where todo_id = $1", [id]);
}

module.exports = getSingleTodo;
