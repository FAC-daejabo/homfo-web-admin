import React from "react";
import {
  ContentContainer,
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/admin/UserManagement.style";
import UserTable from "../../components/table/UserTable";

const UserManagement = () => {
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>회원 관리</PageTitle>
      </PageHeaderWrapper>
      <ContentContainer>
        <UserTable tableTitle="회원 목록" datas={[]} />
      </ContentContainer>
    </>
  );
};

export default UserManagement;
