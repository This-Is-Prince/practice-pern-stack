const pool = require("./db");

function getAllTodos() {
  return pool.query("SELECT * FROM todo;");
}

module.exports = getAllTodos;
