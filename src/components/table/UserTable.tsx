import React from "react";
import {
  ApproveButton,
  Data,
  Heading,
  RejectButton,
  Row,
  Table,
  TableContainer,
  TableTitle,
} from "../../styles/components/UserTable.style";
import { IUser } from "../../interfaces/UserInterface";

const UserTable = ({
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
            <Heading scope="col">닉네임</Heading>
            <Heading scope="col">ID</Heading>
            <Heading scope="col">생년월일</Heading>
            <Heading scope="col">연락처</Heading>
            <Heading scope="col" colSpan={2}></Heading>
          </Row>
        </thead>
        <tbody>
          {datas.map((data) => (
            <Row key={data.userId}>
              <Data>{data.nickName}</Data>
              <Data>{data.userAccount}</Data>
              <Data>{data.dateOfBirth}</Data>
              <Data>{data.userPhoneNum}</Data>
              <ApproveButton>정지</ApproveButton>
              <RejectButton>정지해제</RejectButton>
            </Row>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
