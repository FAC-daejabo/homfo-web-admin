import React from "react";
import styled from "styled-components";
import { IUser } from "../../interfaces/UserInterface";

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
        <Row>
          <Heading scope="col">ID</Heading>
          <Heading scope="col">성명</Heading>
          <Heading scope="col">소속</Heading>
          <Heading scope="col" colSpan={2}></Heading>
        </Row>
        {datas.map((data) => (
          <Row>
            <Data>{data.userAccount}</Data>
            <Data>{data.nickName}</Data>
            <Data>{data.job}</Data>
            <ApproveButton>승인</ApproveButton>
            <RejectButton>거부</RejectButton>
          </Row>
        ))}
      </Table>
    </TableContainer>
  );
};

export default AdminUserTable;

const TableContainer = styled.div``;

const TableTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Row = styled.tr``;

const Heading = styled.th`
  width: 30%;
  height: 50px;
  text-align: center;
  border: 1px solid #000;

  vertical-align: top; /* 위 */
  vertical-align: bottom; /* 아래 */
  vertical-align: middle; /* 가운데 */
`;

const Data = styled.td`
  width: 30%;
  height: 50px;
  text-align: center;
  border: 1px solid #000;

  vertical-align: top; /* 위 */
  vertical-align: bottom; /* 아래 */
  vertical-align: middle; /* 가운데 */
`;

const ApproveButton = styled(Data)`
  width: 5%;
  color: #ffffff;
  background-color: #624bff;
`;

const RejectButton = styled(Data)`
  width: 5%;
  color: #ffffff;
  background-color: #dc3545;
`;
