import React from "react";
import { Navigate } from "react-router-dom";

const DashBoard = ({ setAuth, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={() => setAuth(false)} className="bg-red-500">
        Logout
      </button>
    </>
  );
};

export default DashBoard;
