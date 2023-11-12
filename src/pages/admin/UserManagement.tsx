// import React, { useEffect, useState } from "react";
import {
  ContentContainer,
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/admin/UserManagement.style";
import UserTable from "../../components/table/UserTable";
import { IUser } from "../../interfaces/UserInterface";
import { getUserList } from "../../api/auth/api";
import { useEffect, useState } from "react";

const UserManagement = () => {
  const [userList, setUserList] = useState<IUser[]>([]);

  useEffect(() => {
    getUserList(localStorage.getItem("userId"), setUserList);
  }, []);
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>회원 관리</PageTitle>
      </PageHeaderWrapper>
      <ContentContainer>
        <UserTable tableTitle="회원 목록" datas={userList} />
      </ContentContainer>
    </>
  );
};

export default UserManagement;
