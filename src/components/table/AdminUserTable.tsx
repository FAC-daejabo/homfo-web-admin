import React from "react";
import { IUser } from "../../interfaces/UserInterface";
import {
  ApproveButton,
  Data,
  Heading,
  RejectButton,
  Row,
  Table,
  TableContainer,
  TableTitle,
} from "../../styles/components/AdminUserTable.style";
import instance from "../../api/util/instance";
import { approveSignup } from "../../api/auth/api";

const AdminUserTable = ({
  tableTitle,
  datas,
}: {
  tableTitle: string;
  datas: IUser[];
}) => {
  return (
    <TableContainer>
      <TableTitle>{tableTitle}</TableTitle>
      <Table>
        <thead>
          <Row>
            <Heading scope="col">ID</Heading>
            <Heading scope="col">성명</Heading>
            <Heading scope="col">소속</Heading>
            <Heading scope="col" colSpan={2}></Heading>
          </Row>
        </thead>
        <tbody>
          {datas.map((data) => (
            <Row key={data.userId}>
              <Data>{data.userAccount}</Data>
              <Data>{data.nickName}</Data>
              <Data>{data.job}</Data>
              <ApproveButton
                onClick={() => approveSignup(data.userId, data.nickName)}
              >
                승인
              </ApproveButton>
              <RejectButton>거부</RejectButton>
            </Row>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default AdminUserTable;
