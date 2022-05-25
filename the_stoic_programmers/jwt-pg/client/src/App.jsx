import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import SharedLayout from "./components/SharedLayout";
import LogIn from "./components/Login";
import Signup from "./components/Signup";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/auth/verify", {
        method: "GET",
        headers: { token: localStorage.getItem("token") },
      });
      if (response.ok) {
        const parseRes = await response.json();
        if (parseRes) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    isAuth();
  }, []);
  const setAuth = (value) => {
    setIsAuthenticated(value);
  };
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              path="/login"
              element={
                <LogIn isAuthenticated={isAuthenticated} setAuth={setAuth} />
              }
            />
            <Route
              path="/signup"
              element={
                <Signup isAuthenticated={isAuthenticated} setAuth={setAuth} />
              }
            />
            <Route
              path="/dashboard"
              element={
                <DashBoard
                  isAuthenticated={isAuthenticated}
                  setAuth={setAuth}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
