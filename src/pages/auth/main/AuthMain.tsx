import React from "react";
import { Outlet } from "react-router-dom";

const AuthMain = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E2E8F0",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "369px",
          borderRadius: "12px",
          padding: "32px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AuthMain;
