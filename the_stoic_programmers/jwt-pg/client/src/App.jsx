import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import DashBoard from "./components/DashBoard";
import SharedLayout from "./components/SharedLayout";
import LogIn from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (value) => {
    setIsAuthenticated(value);
  };
  return (
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
              <DashBoard isAuthenticated={isAuthenticated} setAuth={setAuth} />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
