import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col gap-y-10 items-center py-10">
      <h1 className="text-3xl font-bold">Input TODO</h1>
      <section className="flex items-center w-full">
        <input
          type="text"
          placeholder="e.g Eat fruits."
          className="w-full bg-black text-white rounded-l-md px-4 py-2 outline-none"
        />
        <button className="rounded-r-md self-stretch px-4 font-bold   bg-green-600 text-white">
          Add
        </button>
      </section>
    </header>
  );
};

export default Header;
