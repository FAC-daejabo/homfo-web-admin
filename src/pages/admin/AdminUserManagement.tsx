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

const dummyData: IUser[] = [
  {
    userId: 1,
    userAccount: "test1",
    userPhoneNum: "01042123964",
    nickName: "itsjiny",
    gender: "W",
    job: "student",
    dateOfBirth: "2000-09-19",
    createdAt: "2019-09-19 11:45:12",
    updatedAt: "2019-09-19 11:45:12",
    role: "관리자",
    status: "P",
  },
  {
    userId: 2,
    userAccount: "test2",
    userPhoneNum: "01042123964",
    nickName: "king",
    gender: "M",
    job: "student",
    dateOfBirth: "2000-09-19",
    createdAt: "2019-09-19 11:45:12",
    updatedAt: "2019-09-19 11:45:12",
    role: "일반회원",
    status: "P",
  },
  {
    userId: 3,
    userAccount: "test3",
    userPhoneNum: "01042123964",
    nickName: "sung",
    gender: "M",
    job: "student",
    dateOfBirth: "2000-09-19",
    createdAt: "2019-09-19 11:45:12",
    updatedAt: "2019-09-19 11:45:12",
    role: "관리자",
    status: "P",
  },
];

const AdminUserManagement = () => {
  const [userList, setUserList] = useState<IUser[]>([]);
  const getUserList = async () => {
    const response = await instance.get("admins/users/sign-up/approve");
    console.log(response.data.data);
    setUserList(response.data.data);
  };

  // useEffect(() => {
  //   getUserList();
  // }, []);
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>관리자 유저 관리</PageTitle>
      </PageHeaderWrapper>
      <ContentContainer>
        <AdminUserTable tableTitle="관리자 신청 내역" datas={dummyData} />
        <AdminApprovedTable tableTitle="관리자 승인 내역" datas={dummyData} />
      </ContentContainer>
    </>
  );
};

export default AdminUserManagement;
