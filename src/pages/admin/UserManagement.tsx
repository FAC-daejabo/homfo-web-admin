import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AdminUserTable from "../../components/table/AdminUserTable";
import instance from "../../api/util/instance";
import { IUser } from "../../interfaces/UserInterface";

const UserManagement = () => {
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
    <div style={{ width: "100%" }}>
      <PageHeaderWrapper>
        <PageTitle>관리자 유저 관리</PageTitle>
      </PageHeaderWrapper>
      <ContentContainer>
        <AdminUserTable tableTitle="관리자 신청 내역" datas={userList} />
      </ContentContainer>
    </div>
  );
};

export default UserManagement;

const PageHeaderWrapper = styled.div`
  display: flex;
  justify-items: center;
  border-bottom: 1px solid #c4cdd5;
  padding: 10px 0;
  margin-bottom: 20px;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const ContentContainer = styled.main`
  background-color: #ffffff;
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 40px 20px;
`;
