import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return <NavBarContainer></NavBarContainer>;
};

export default NavBar;

const NavBarContainer = styled.header`
  width: 100%;
  height: 66px;
  top: 0;
  position: fixed;
  left: 256px;
  border-bottom: 1px solid black;
`;
