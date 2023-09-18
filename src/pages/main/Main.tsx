import React from "react";
import SideBar from "../../components/bar/SideBar";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/bar/NavBar";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
      }}
    >
      <SideBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
