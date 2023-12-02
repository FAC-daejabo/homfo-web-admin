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
import { useRecoilState } from "recoil";
import { realtorModalAtom } from "../../stores/modalAtom";
import {
  agencyIdAtom,
  agencyNameAtom,
  agencyNumberAtom,
  areaAtom,
  chairmanNameAtom,
  deductionAtom,
  isOpenAtom,
  lotAddressAtom,
  realtorNameAtom,
  realtorNumberAtom,
  roadAddressAtom,
} from "../../stores/realtorAtom";

const RealtorTable = ({ realtors }: { realtors: IRealtor[] }) => {
  const [realtorModalOpen, setRealtorModalOpen] =
    useRecoilState(realtorModalAtom);
  const [agencyName, setAgencyName] = useRecoilState(agencyNameAtom);
  const [agencyId, setAgencyId] = useRecoilState(agencyIdAtom);
  const [agencyNumber, setAgencyNumber] = useRecoilState(agencyNumberAtom);
  const [realtorName, setRealtorName] = useRecoilState(realtorNameAtom);
  const [realtorNumber, setRealtorNumber] = useRecoilState(realtorNumberAtom);
  const [area, setArea] = useRecoilState(areaAtom);
  const [isOpen, setIsOpen] = useRecoilState(isOpenAtom);
  const [roadAddress, setRoadAddress] = useRecoilState(roadAddressAtom);
  const [lotAddress, setLotAddress] = useRecoilState(lotAddressAtom);
  const [chairmanName, setChairmanName] = useRecoilState(chairmanNameAtom);
  const [deduction, setDeduction] = useRecoilState(deductionAtom);

  console.log(realtors);

  console.log(agencyName);
  console.log(agencyId);
  console.log(agencyNumber);
  console.log(realtorName);
  console.log(realtorNumber);
  console.log(area);
  console.log(isOpen);
  console.log(roadAddress);
  console.log(lotAddress);
  console.log(chairmanName);
  console.log(deduction);
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
            <Row
              key={dummy.id}
              select={realtorModalOpen}
              onClick={() => {
                setAgencyName(dummy.agency.name);
                setAgencyId(dummy.agency.id);
                setAgencyNumber(dummy.agency.officePhoneNumber);
                setRealtorName(dummy.name);
                setRealtorNumber(dummy.phoneNumber);
                setArea(dummy.agency.areas.data[0]);
                setIsOpen(true);
                setRoadAddress(dummy.agency.roadAddress);
                setLotAddress(dummy.agency.lotAddress);
                setChairmanName(dummy.agency.chairmanName);
                setDeduction(dummy.agency.deduction ? true : false);
                setRealtorModalOpen(false);
              }}
            >
              <Data>{dummy.agency?.name}</Data>
              <Data>{dummy?.name}</Data>
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
