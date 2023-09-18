import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return <NavBarContainer></NavBarContainer>;
};

export default NavBar;

const NavBarContainer = styled.header`
  width: 100%;
  height: 66px;
  position: fixed;
  top: 0;
  left: 304;
  background-color: white;
  /* top: 0;
  position: fixed;
  left: 256px; */
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
`;
