import React from "react";
import { Navigate } from "react-router-dom";

const LogIn = ({ setAuth, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <h2>Hello</h2>
      <button onClick={() => setAuth(true)} className="bg-red-500">
        Authenticate
      </button>
    </>
  );
};

export default LogIn;
