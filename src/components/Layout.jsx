import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <div >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
