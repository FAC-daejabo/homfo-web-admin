import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBar = () => {
  return (
    <SideBarContainer>
      <nav>
        <Link to="/service/agency-info">중개업소 정보</Link>
        <Link to="/service/proposals">요청서 확인 / 제안서 작성</Link>
        <Link to="/service/requests">매물 등록</Link>
        <Link to="/service/registration">작성한 제안서 조회</Link>
      </nav>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.aside`
  width: 256px;
  height: 2868px;
  background-color: #212b36;
  position: fixed;
  top: 0;
  left: 0;
`;
