import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AdminUserTable from "../../components/table/AdminUserTable";
import instance from "../../api/util/instance";
import { IUser } from "../../interfaces/UserInterface";
import AdminApprovedTable from "../../components/table/AdminApprovedTable";
import {
  ContentContainer,
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/admin/UserManagement.style";

const AdminUserManagement = () => {
  const [userList, setUserList] = useState<IUser[]>([]);
  const getUserList = async () => {
    const response = await instance.get("admins/users/sign-up/approve");

    console.log(response.data.data);
    setUserList(response.data.data);
  };

  useEffect(() => {
    getUserList();
  }, []);
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>관리자 유저 관리</PageTitle>
      </PageHeaderWrapper>
      <ContentContainer>
        <AdminUserTable tableTitle="관리자 신청 내역" datas={userList} />
        <AdminApprovedTable tableTitle="관리자 승인 내역" datas={userList} />
      </ContentContainer>
    </>
  );
};

export default AdminUserManagement;
