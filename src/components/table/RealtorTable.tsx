import React from "react";
import {
  Data,
  Heading,
  Row,
  TBody,
  Table,
  TableContainer,
} from "../../styles/components/RealtorTable.style";
import { IRealtor } from "../../interfaces/RealtorInterface";

const RealtorTable = ({ realtors }: { realtors: IRealtor[] }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <Row>
            <Heading scope="col">사무실 이름</Heading>
            <Heading scope="col">공인중개사 이름</Heading>
            <Heading scope="col">해당 구역</Heading>
            <Heading scope="col">연락처</Heading>
            <Heading scope="col">개업/소속 구분</Heading>
            <Heading scope="col">도로명 주소</Heading>
            <Heading scope="col">지번 주소</Heading>
            <Heading scope="col">등록번호</Heading>
            <Heading scope="col">대표자명</Heading>
            <Heading scope="col">공제 가입 유무</Heading>
          </Row>
        </thead>
        <TBody>
          {realtors.map((dummy) => (
            <Row key={dummy.id}>
              <Data>{dummy?.name}</Data>
              <Data>{dummy.agency?.name}</Data>
              <Data>{dummy.agency.areas.data[0]?.name}</Data>
              <Data>{dummy.phoneNumber}</Data>
              <Data>소속</Data>
              <Data>{dummy.agency.roadAddress}</Data>
              <Data>{dummy.agency.lotAddress}</Data>
              <Data>{dummy.agency.id}</Data>
              <Data>{dummy.agency.chairmanName}</Data>
              <Data>{dummy.agency.deduction ? "Y" : "N"}</Data>
            </Row>
          ))}
        </TBody>
      </Table>
    </TableContainer>
  );
};

export default RealtorTable;
