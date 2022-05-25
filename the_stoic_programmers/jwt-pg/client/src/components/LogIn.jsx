import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogIn = ({ setAuth, isAuthenticated }) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setInputs((prevInputs) => {
      return { ...prevInputs, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = inputs;
      const body = { email, password };

      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();
      if (response.ok) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Login successfully!");
      } else {
        setAuth(false);
        toast.error(parseRes.msg);
      }
      console.log(parseRes);
    } catch (error) {
      console.log(error);
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <section className="flex flex-col items-center gap-y-5  shadow-md max-w-md w-full m-auto p-3 border-2 rounded-md">
      <h1 className="text-3xl font-bold text-gray-600">Login</h1>
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
        <button
          type="submit"
          className="bg-green-600 text-white px-8 py-2 rounded-md"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default LogIn;
