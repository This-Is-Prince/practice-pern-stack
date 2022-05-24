const express = require("express");
const pool = require("./db");

const port = 5000;
const app = express();

// middleware
app.use(express.json()); // =>req.body

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await pool.query("SELECT * FROM todo");
    res.status(200).json(todos.rows);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error });
  }
});

// get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo where todo_id = $1", [
      id,
    ]);
    console.log(todo.rows);
    res.status(200).json(todo.rows);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error });
  }
});

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO TODO (description) VALUES ($1) RETURNING *",
      [description]
    );
    // res.status(200).json(newTodo);
    res.status(201).json(newTodo.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params; // WHERE
    const { description } = req.body; // SET
    const todo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    console.log(todo.rows);
    res.status(200).json(todo.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    console.log(deleteTodo.rows);
    res.status(200).json(deleteTodo.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
