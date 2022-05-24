const getAllTodos = require("./get-all-todos");
const getSingleTodo = require("./get-single-todo");
const createTodo = require("./create-todo");
const updateTodo = require("./update-todo");
const deleteTodo = require("./delete-todo");

const todos = require("express").Router();

todos.route("/").get(getAllTodos).post(createTodo);

todos.route("/:id").get(getSingleTodo).put(updateTodo).delete(deleteTodo);

module.exports = todos;
