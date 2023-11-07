// import React, { useEffect, useState } from "react";
import {
  ContentContainer,
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/admin/UserManagement.style";
import UserTable from "../../components/table/UserTable";
import { IUser } from "../../interfaces/UserInterface";
// import instance from "../../api/util/instance";

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
    userPhoneNum: "01055919824",
    nickName: "king",
    gender: "M",
    job: "student",
    dateOfBirth: "1999-08-26",
    createdAt: "2019-09-19 11:45:12",
    updatedAt: "2019-09-19 11:45:12",
    role: "일반회원",
    status: "P",
  },
  {
    userId: 3,
    userAccount: "test3",
    userPhoneNum: "01023441112",
    nickName: "sung",
    gender: "M",
    job: "student",
    dateOfBirth: "1999-01-01",
    createdAt: "2019-09-19 11:45:12",
    updatedAt: "2019-09-19 11:45:12",
    role: "관리자",
    status: "P",
  },
];

const UserManagement = () => {
  // const [userList, setUserList] = useState<IUser[]>([]);
  // const getUserList = async () => {
  //   const response = await instance.get("admins/users/sign-up/approve");
  //   console.log(response.data.data);
  //   setUserList(response.data.data);
  // };

  // useEffect(() => {
  //   getUserList();
  // }, []);
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>회원 관리</PageTitle>
      </PageHeaderWrapper>
      <ContentContainer>
        <UserTable tableTitle="회원 목록" datas={dummyData} />
      </ContentContainer>
    </>
  );
};

export default UserManagement;
