import React from "react";
import Header from "./components/header";
import Todos from "./components/todos";

const App = () => {
  return (
    <main className="max-w-2xl w-full m-auto px-5">
      <Header />
      <Todos />
    </main>
  );
};

export default App;
