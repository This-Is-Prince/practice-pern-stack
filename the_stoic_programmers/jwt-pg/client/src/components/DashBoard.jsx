import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const DashBoard = ({ setAuth, isAuthenticated }) => {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch(`http://localhost:5000/dashboard`, {
        method: "GET",
        headers: { token: localStorage.getItem("token") },
      });
      const user = await response.json();
      if (response.ok) {
        setName(user.user_name);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const logout = () => {
    setAuth(false);
    toast.success("Logged Out Successfully");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    getName();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <section className="flex flex-col items-center gap-y-5  shadow-md max-w-md w-full m-auto p-3 border-2 rounded-md">
      <h1 className="text-3xl font-bold text-gray-600">Dashboard {name}</h1>
      <button
        onClick={() => logout()}
        className="bg-blue-500 text-white px-6 py-1 rounded-md"
      >
        Logout
      </button>
    </section>
  );
};

export default DashBoard;
