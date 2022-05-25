import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="shadow-md px-6 py-2">
      <nav className="flex gap-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
