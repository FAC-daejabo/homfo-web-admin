import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

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
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        }}
      >
        <TopArea>
          <TextLogoImage src="/text_logo.jpeg" />
        </TopArea>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthMain;

const TopArea = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const TextLogoImage = styled.img`
  width: 116px;
  height: 40px;
`;
