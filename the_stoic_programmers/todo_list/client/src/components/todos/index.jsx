import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const res = await fetch("http://localhost:5000/todos");
    const todos = await res.json();
    setTodos(todos);
  }

  const deleteTodo = async (id) => {
    const res = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      const data = await res.json();
      const deletedTodo = data[0];
      setTodos((prevTodos) => {
        return prevTodos.filter((todo) => {
          return todo.todo_id !== deletedTodo.todo_id;
        });
      });
    }
  };

  const updateTodo = async (id, description) => {
    const res = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description }),
    });
    if (res.ok) {
      const data = await res.json();
      const updatedTodo = data[0];
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.todo_id === updateTodo.todo_id) {
            return updatedTodo;
          }
          return todo;
        });
      });
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <section className="flex flex-col gap-y-5">
      {todos.map(({ todo_id, description }) => {
        return (
          <Todo
            key={todo_id}
            todo_id={todo_id}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            description={description}
          />
        );
      })}
    </section>
  );
};

export default Todos;
