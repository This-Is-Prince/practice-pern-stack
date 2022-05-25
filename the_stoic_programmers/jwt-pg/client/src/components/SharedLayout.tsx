import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center p-10">
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
