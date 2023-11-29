import React from "react";
import {
  Data,
  Heading,
  Row,
  Table,
  TableContainer,
} from "../../styles/components/AgencyTable.style";
import { IRealtor } from "../../interfaces/RealtorInterface";

const dummys: IRealtor[] = [
  {
    id: 2,
    name: "테스트",
    certificateId: null,
    position: null,
    phoneNumber: "010-0000-0000",
    status: "N",
    agency: {
      id: "41135-2021-00047",
      name: "테스트용 중개소",
      type: "테스트용 중개소",
      chairmanName: "테스트용 중개소",
      chairmanCertificateId: "99999-9999-99999",
      roadAddress: "테스트용 중개소",
      lotAddress: "테스트용 중개소",
      officePhoneNumber: "031-123-1231",
      phoneNumber: "010-1231-1231",
      deduction: true,
      openedAt: "2022-02-02",
      partner: true,
      status: "N",
      areas: {
        data: [
          {
            areaId: 1,
            name: "동보아파트.수지파크푸르지오",
            radius: 370,
            lat: 37.3252,
            lng: 127.0994833,
          },
          {
            areaId: 2,
            name: "단국대학교.죽전야외음악당.성현마을2단지",
            radius: 278,
            lat: 37.3251333,
            lng: 127.1246333,
          },
        ],
        length: 2,
      },
    },
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
          {dummys.map((dummy) => (
            <Row key={dummy.id}>
              <Data>{dummy.name}</Data>
              <Data>{dummy.agency.name}</Data>
              <Data>{dummy.agency.areas.data[0].name}</Data>
              <Data>{dummy.phoneNumber}</Data>
              <Data>소속</Data>
              <Data>{dummy.agency.roadAddress}</Data>
              <Data>{dummy.agency.lotAddress}</Data>
              <Data>{dummy.agency.id}</Data>
              <Data>{dummy.agency.chairmanName}</Data>
              <Data>{dummy.agency.deduction ? "Y" : "N"}</Data>
            </Row>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default AgencyTable;
