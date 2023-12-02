import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IRealtor } from "../../interfaces/RealtorInterface";
import SelectBox from "../selectbox/SelectBox";
import RealtorTable from "../table/RealtorTable";
import { getRealtors } from "../../api/realtor/api";

const RealtorSearchArea = () => {
  const [realtors, setRealtors] = useState<IRealtor[]>([]);
  const [agencyName, setAgencyName] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [areaName, setAreaName] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [roadAddress, setRoadAddress] = useState<string | null>(null);
  const [lotAddress, setLotAddress] = useState<string | null>(null);
  const [agencyId, setAgencyId] = useState<string | null>(null);
  const [chairmanName, setChairmanName] = useState<string | null>(null);
  const [searchCategory, setSearchCategory] = useState<string>("");
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  console.log(searchCategory);
  console.log(searchKeyword);
  console.log(areaName);

  useEffect(() => {
    getRealtors(setRealtors, {
      firstView: true,
      name: name,
      agencyId: agencyId,
      agencyName: agencyName,
      roadAddress: roadAddress,
      lotAddress: lotAddress,
      chairmanName: chairmanName,
      phoneNumber: phoneNumber,
      areaName: areaName,
    });
  }, [
    agencyName,
    name,
    areaName,
    phoneNumber,
    roadAddress,
    lotAddress,
    agencyId,
    chairmanName,
  ]);
  return (
    <SearchContainer>
      <SearchTopArea>
        <FilterArea>
          <SelectBox
            options={[
              "사무실 이름",
              "공인중개사 이름",
              "해당 구역",
              "연락처",
              // "개업/소속 구분",
              "도로명 주소",
              "지번 주소",
              "등록번호",
              "대표자명",
              // "공제 가입 유무",
            ]}
            setSearchCategory={setSearchCategory}
          />
        </FilterArea>
        <SearchArea>
          <SearchInput
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <SearchButton
            onClick={() => {
              switch (searchCategory) {
                case "사무실 이름":
                  setAgencyName(searchKeyword);
                  setName(null);
                  setAreaName(null);
                  setPhoneNumber(null);
                  setRoadAddress(null);
                  setLotAddress(null);
                  setAgencyId(null);
                  setChairmanName(null);
                  break;
                case "공인중개사 이름":
                  setAgencyName(null);
                  setName(searchKeyword);
                  setAreaName(null);
                  setPhoneNumber(null);
                  setRoadAddress(null);
                  setLotAddress(null);
                  setAgencyId(null);
                  setChairmanName(null);
                  break;
                case "해당 구역":
                  setAgencyName(null);
                  setName(null);
                  setAreaName(searchKeyword);
                  setPhoneNumber(null);
                  setRoadAddress(null);
                  setLotAddress(null);
                  setAgencyId(null);
                  setChairmanName(null);
                  break;
                case "연락처":
                  setAgencyName(null);
                  setName(null);
                  setAreaName(null);
                  setPhoneNumber(searchKeyword);
                  setRoadAddress(null);
                  setLotAddress(null);
                  setAgencyId(null);
                  setChairmanName(null);
                  break;
                case "도로명 주소":
                  setAgencyName(null);
                  setName(null);
                  setAreaName(null);
                  setPhoneNumber(null);
                  setRoadAddress(searchKeyword);
                  setLotAddress(null);
                  setAgencyId(null);
                  setChairmanName(null);
                  break;
                case "지번 주소":
                  setAgencyName(null);
                  setName(null);
                  setAreaName(null);
                  setPhoneNumber(null);
                  setRoadAddress(null);
                  setLotAddress(searchKeyword);
                  setAgencyId(null);
                  setChairmanName(null);
                  break;
                case "등록번호":
                  setAgencyName(null);
                  setName(null);
                  setAreaName(null);
                  setPhoneNumber(null);
                  setRoadAddress(null);
                  setLotAddress(null);
                  setAgencyId(searchKeyword);
                  setChairmanName(null);
                  break;
                case "대표자명":
                  setAgencyName(null);
                  setName(null);
                  setAreaName(null);
                  setPhoneNumber(null);
                  setRoadAddress(null);
                  setLotAddress(null);
                  setAgencyId(null);
                  setChairmanName(searchKeyword);
                  break;
              }
            }}
          >
            검색
          </SearchButton>
        </SearchArea>
      </SearchTopArea>
      <SearchBottomArea>
        <RealtorTable realtors={realtors} />
      </SearchBottomArea>
    </SearchContainer>
  );
};

export default RealtorSearchArea;

const SearchContainer = styled.div``;

const SearchTopArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const FilterArea = styled.div`
  width: 16%;
`;

const SearchArea = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  width: 79%;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #e9ebed;
  padding-left: 7px;
`;

const SearchButton = styled.button`
  width: 19%;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #e9ebed;
  cursor: pointer;
`;

const SearchBottomArea = styled.div`
  background-color: #ffffff;
  width: 100%;
  border-radius: 5px;
  height: 490px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
