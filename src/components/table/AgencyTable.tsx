import React from "react";
import {
  Data,
  Heading,
  Row,
  Table,
  TableContainer,
} from "../../styles/components/AgencyTable.style";
import { IAgency } from "../../interfaces/AgencyInterface";

const dummys: IAgency[] = [
  {
    id: "123-123",
    areas: {
      data: [
        {
          areaId: 1,
          lat: 34.216519842,
          lng: 123.123123213,
          name: "대일초등학교",
          radius: 300,
        },
      ],
      length: 1,
    },
    name: "김철수공인중개소",
    type: "법인",
    chairmanName: "대표이름",
    chairmanCertificateId: "대표 자격증 번호",
    roadAddress: "도로명 주소",
    lotAddress: "지명 주소",
    deduction: true,
    officePhoneNumber: "02-123-1234",
    phoneNumber: "010-1234-12340",
    openedAt: "2023-11-11",
    partner: true,
    lat: 37.123123,
    lng: 123.123123,
    status: "N",
  },
];

const AgencyTable = () => {
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
        <tbody>
          <Row>
            {dummys.map((dummy) => (
              <Row key={dummy.id}>
                <Data>{dummy.name}</Data>
                <Data>{dummy.name}</Data>
                <Data></Data>
                <Data>{dummy.officePhoneNumber}</Data>
                {/* <Data>{dummy.}</Data>
                <Data>{dummy.}</Data>
                <Data>{dummy.}</Data>
                <Data>{dummy.}</Data>
                <Data>{dummy.}</Data>
                <Data>{dummy.}</Data> */}
              </Row>
            ))}
          </Row>
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default AgencyTable;
