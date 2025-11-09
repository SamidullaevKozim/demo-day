import React from "react";
import { NavbarSimple } from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavbarSimple />
      <Outlet />
    </div>
  );
};

export default Layout;
