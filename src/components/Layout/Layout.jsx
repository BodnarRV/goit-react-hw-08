import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const Layout = () => (
  <div>
    <AppBar />
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
