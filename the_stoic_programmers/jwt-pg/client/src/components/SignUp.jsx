import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Signup = ({ isAuthenticated }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleChange = (e) => {
    setInputs((prevInputs) => {
      return { ...prevInputs, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    setInputs({ email: "", password: "", name: "" });
  };
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <section className="flex flex-col items-center gap-y-5  shadow-md max-w-md w-full m-auto p-3 border-2 rounded-md">
      <h1 className="text-3xl font-bold text-gray-600">Signup</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-3 w-full items-center"
      >
        <input
          className="border-2 px-4 py-2 rounded-md outline-none w-full"
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="border-2 px-4 py-2 rounded-md outline-none w-full"
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          className="border-2 px-4 py-2 rounded-md outline-none w-full"
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <button
          type="submit"
          onClick={(e) => {}}
          className="bg-green-600 text-white px-8 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Signup;
