import React, { useEffect, useState } from "react";
import AdminUserTable from "../../components/table/AdminUserTable";
import { IUser } from "../../interfaces/UserInterface";
import AdminApprovedTable from "../../components/table/AdminApprovedTable";
import {
  ContentContainer,
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/admin/UserManagement.style";
import { getApplyList, getApprovedList } from "../../api/auth/api";

const AdminUserManagement = () => {
  const [userList, setUserList] = useState<IUser[]>([]);
  const [approvedList, setApprovedList] = useState<IUser[]>([]);
  // const [firstView,setFirstView] = useState(true);

  useEffect(() => {
    getApplyList(setUserList);
    if (typeof window !== "undefined") {
      getApprovedList(window.localStorage.getItem("userId"), setApprovedList);
    }
  }, []);
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>관리자 유저 관리</PageTitle>
      </PageHeaderWrapper>
      <ContentContainer>
        <AdminUserTable tableTitle="관리자 신청 내역" datas={userList} />
        <AdminApprovedTable
          tableTitle="관리자 승인 내역"
          datas={approvedList}
        />
      </ContentContainer>
    </>
  );
};

export default AdminUserManagement;
