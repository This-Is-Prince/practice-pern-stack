const pool = require("./db");

function createTodo(description) {
  return pool.query("INSERT INTO todo(description) values ($1) RETURNING *;", [
    description,
  ]);
}

module.exports = createTodo;
