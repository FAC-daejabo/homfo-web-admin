import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBar = () => {
  return (
    <SideBarContainer>
      <NavArea>
        <NavTitle>요청하기 관련 서비스</NavTitle>
        <NavList>
          <NavItem>
            <Link to="/service/agency-info">- 협력 공인중개사 정보</Link>
          </NavItem>
          <NavItem>
            <Link to="/service/requests">- 요청서 확인 / 제안서 작성</Link>
          </NavItem>
          {/* <NavItem>
            <Link to="/service/registration">- 매물 등록</Link>
          </NavItem> */}
          {/* <NavItem>
            <Link to="/service/proposals">- 작성한 제안서 조회</Link>
          </NavItem> */}
        </NavList>
      </NavArea>

      <NavArea>
        <NavTitle>유저 관리</NavTitle>
        <NavList>
          {localStorage.getItem("role") === "절대관리자" ? (
            <NavItem>
              <Link to="/admin/admin-user-management">- 관리자 관리</Link>
            </NavItem>
          ) : null}

          <NavItem>
            <Link to="/admin/user-management">- 회원 관리</Link>
          </NavItem>
        </NavList>
      </NavArea>

      <NavArea>
        <NavTitle>부동산 상식</NavTitle>
        <NavList>
          <NavItem>
            <Link to="/common-sense">- 부동산 상식 업로드</Link>
          </NavItem>
        </NavList>
      </NavArea>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.aside`
  width: 304px;
  height: 2868px;
  background-color: #212b36;
  padding: 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const NavArea = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul``;

const NavTitle = styled.h3`
  font-size: 18px;
  color: white;
`;

const NavItem = styled.div`
  color: white;
  font-size: 16px;
  padding-left: 25px;
  margin: 15px 0;
`;
