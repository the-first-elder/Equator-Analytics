import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative">
      <Outlet />
      <div className="sticky bottom-0">
      <Header />
      </div>
    </div>
  );
};

export default Layout;
