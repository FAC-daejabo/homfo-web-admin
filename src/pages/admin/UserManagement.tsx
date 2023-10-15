import React from "react";
import styled from "styled-components";

const UserManagement = () => {
  return (
    <div style={{ width: "100%" }}>
      <PageHeaderWrapper>
        <PageTitle>관리자 유저 관리</PageTitle>
      </PageHeaderWrapper>
      <ContentContainer>
        <TableContainer>
          <TableTitle>관리자 신청 내역</TableTitle>
          <Table>
            <Row>
              <Heading scope="col">ID</Heading>
              <Heading scope="col">성명</Heading>
              <Heading scope="col">소속</Heading>
              <Heading scope="col" colSpan={2}></Heading>
            </Row>
            <Row>
              <Data>woohyun</Data>
              <Data>신우현</Data>
              <Data>대자보</Data>
              <ApproveButton>승인</ApproveButton>
              <RejectButton>거부</RejectButton>
            </Row>
          </Table>
        </TableContainer>
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
