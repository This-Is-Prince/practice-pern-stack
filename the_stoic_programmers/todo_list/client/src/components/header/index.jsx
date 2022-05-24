import React, { useState } from "react";

const Header = () => {
  const [description, setDescription] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (description) {
      try {
        const res = await fetch(`http://localhost:5000/todos`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description }),
        });
        const data = await res.json();
        console.log(data);
        setDescription("");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <header className="flex flex-col gap-y-10 items-center py-10">
      <h1 className="text-3xl font-bold">Input TODO</h1>
      <form onSubmit={handleFormSubmit} className="flex items-center w-full">
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="e.g Eat fruits."
          className="w-full bg-black text-white rounded-l-md px-4 py-2 outline-none"
        />
        <button
          type="submit"
          className="rounded-r-md self-stretch px-4 font-bold   bg-green-600 text-white"
        >
          Add
        </button>
      </form>
    </header>
  );
};

export default Header;
