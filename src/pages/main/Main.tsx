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
        backgroundColor: "#F4F6F8",
        width: "100%",
        height: "2868px",
        paddingTop: "66px",
        paddingLeft: "304px",
      }}
    >
      <SideBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <NavBar />
        <div style={{ padding: "25px", width: "100%" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
