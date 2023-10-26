import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/auth/login">
        <NavText>로그인</NavText>
      </Link>
      <Link to="/auth/signup">
        <NavText>회원가입</NavText>
      </Link>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.header`
  width: 100%;
  height: 66px;
  position: fixed;
  top: 0;
  left: 304;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 325px;

  /* top: 0;
  position: fixed;
  left: 256px; */
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
`;

const NavText = styled.span`
  font-size: 16px;
  color: #637381;
  margin: 0 5px;
  cursor: pointer;
`;
