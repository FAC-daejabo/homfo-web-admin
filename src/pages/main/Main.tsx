import React from "react";
import SideBar from "../../components/bar/SideBar";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/bar/NavBar";
import styled from "styled-components";

const Main = () => {
  return (
    <MainLayout>
      <SideBar />
      <ContentContainer>
        <NavBar />
        <MainContent>
          <Outlet />
        </MainContent>
      </ContentContainer>
    </MainLayout>
  );
};

export default Main;

const MainLayout = styled.div`
  display: flex;
  position: relative;
  background-color: #f4f6f8;
  width: 100%;
  height: 100%;
  padding-top: 66px;
  padding-left: 304px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainContent = styled.div`
  padding: 20px;
  width: 100%;
`;
