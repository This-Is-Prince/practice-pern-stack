import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const DashBoard = ({ setAuth, isAuthenticated }) => {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch(`http://localhost:5000/dashboard`, {
        method: "GET",
        headers: { token: localStorage.getItem("token") },
      });
      const user = await response.json();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  const logout = () => {
    setAuth(false);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    getName();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={() => logout()} className="bg-red-500">
        Logout
      </button>
    </>
  );
};

export default DashBoard;
