import React, { useState } from "react";

const Todo = ({ todo_id, description, deleteTodo, updateTodo }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [currDescription, setCurrDescription] = useState(description);

  return (
    <article className="w-full flex items-center">
      <input
        type="text"
        value={currDescription}
        onChange={(e) => {
          setCurrDescription(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter" && currDescription) {
            setIsDisabled(true);
            updateTodo(todo_id, currDescription);
          } else if (currDescription === "") {
            setCurrDescription(description);
          }
        }}
        disabled={isDisabled}
        className="w-full bg-black rounded-l-md text-white px-4 py-2 outline-none"
      />
      <button
        onClick={() => {
          setIsDisabled(!isDisabled);
        }}
        className="px-2 bg-blue-500 self-stretch text-white"
      >
        Edit
      </button>
      <button
        onClick={() => deleteTodo(todo_id)}
        className="px-2 bg-red-500 self-stretch text-white rounded-r-md"
      >
        Delete
      </button>
    </article>
  );
};

export default Todo;
