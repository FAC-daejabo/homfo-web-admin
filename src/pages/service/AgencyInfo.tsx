import React from "react";
import styled from "styled-components";
import {
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/admin/UserManagement.style";
import SelectBox from "../../components/selectbox/SelectBox";
import { useForm } from "react-hook-form";

const AgencyInfo = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>중개업소 정보 등록</PageTitle>
      </PageHeaderWrapper>
      <InfoContainer>
        <InputArea>
          <InputContainer>
            <InputTitle>1. 사무실 이름</InputTitle>
            <Input {...register("name")} type="text" />
          </InputContainer>
          <InputContainer>
            <InputTitle>2. 공인중개사 이름</InputTitle>
            <Input {...register("name")} type="text" />
          </InputContainer>
          <InputContainer>
            <InputTitle>3. 해당 구역</InputTitle>
            <Select>
              <option value="계룡리슈빌">계룡리슈빌</option>
              <option value="보정동카페거리, 죽현마을">
                보정동카페거리, 죽현마을
              </option>
              <option value="보정우체국">보정우체국</option>
              <option value="한신 길훈아파트">한신 길훈아파트</option>
              <option value="대일초등학교">대일초등학교</option>
              <option value="단국대학교, 죽전야외음악당, 성현마을2단지">
                단국대학교, 죽전야외음악당, 성현마을2단지
              </option>
              <option value="동부아파트">동부아파트</option>
              <option value="내대지마을5단지 정문">내대지마을5단지 정문</option>
              <option value="건영캐스빌후문">건영캐스빌후문</option>
              <option value="죽전교차로">죽전교차로</option>
              <option value="동보아파트, 수지파크푸르지오">
                동보아파트, 수지파크푸르지오
              </option>
            </Select>
          </InputContainer>
          <InputContainer>
            <InputTitle>4. 연락처</InputTitle>
            <Input placeholder="ex) 010-1234-5678" type="text" />
          </InputContainer>
          <InputContainer>
            <InputTitle>5. 개업/소속 구분</InputTitle>
            <Select>
              <option value="개업">개업</option>
              <option value="소속">소속</option>
            </Select>
          </InputContainer>
        </InputArea>
        <InputArea>
          <InputContainer>
            <InputTitle>6. 도로명 주소</InputTitle>
            <Input type="text" />
          </InputContainer>
          <InputContainer>
            <InputTitle>7. 지번주소</InputTitle>
            <Input type="text" />
          </InputContainer>
          <InputContainer>
            <InputTitle>8. 등록 번호</InputTitle>
            <Input type="text" />
          </InputContainer>
          <InputContainer>
            <InputTitle>9. 대표자명</InputTitle>
            <Input type="text" />
          </InputContainer>
          <InputContainer>
            <InputTitle>10. 공제 가입 유무</InputTitle>
            <Select>
              <option value="예">예</option>
              <option value="아니오">아니오</option>
            </Select>
          </InputContainer>
        </InputArea>
        <RegisterArea>
          <ButtonArea>
            <LoadButton>불러오기</LoadButton>
            <RegisterButton>등록</RegisterButton>
          </ButtonArea>
          <InputContainerTwo>
            <InputTitle>7. 비고</InputTitle>
            <TextArea></TextArea>
          </InputContainerTwo>
        </RegisterArea>
      </InfoContainer>
      <PageHeaderWrapper>
        <PageTitle>중개업소 목록</PageTitle>
      </PageHeaderWrapper>
      <SearchContainer>
        <SearchTopArea>
          <SearchArea>
            <SearchInput type="text" />
            <SearchButton>검색</SearchButton>
          </SearchArea>
          <FilterArea>
            <SelectBox options={["최신순", "조회순"]} />
          </FilterArea>
        </SearchTopArea>
        <SearchBottomArea></SearchBottomArea>
      </SearchContainer>
    </>
  );
};

export default AgencyInfo;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  width: 100%;
  border-radius: 5px;
  height: 380px;
  padding: 20px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-bottom: 20px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border-right: 1px solid #212121;
  padding: 0 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const InputContainerTwo = styled(InputContainer)`
  margin-bottom: 0;
`;

const InputTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const TextArea = styled.textarea`
  border: 1px solid #212121;
  font-size: 16px;
  border-radius: 2px;
  padding: 6px;
  height: 200px;
`;

const Input = styled.input`
  border: 1px solid #212121;
  font-size: 14px;
  border-radius: 4px;
  padding: 5px;
  height: 30px;
`;

const RegisterArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 0 20px;
  justify-content: space-between;
`;

const SearchContainer = styled.div``;

const SearchTopArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const SearchBottomArea = styled.div`
  background-color: #ffffff;
  width: 100%;
  border-radius: 5px;
  height: 450px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RegisterButton = styled.button`
  width: 100px;
  height: 45px;
  border-radius: 5px;
  background-color: #624bff;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  margin-left: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const LoadButton = styled(RegisterButton)`
  background-color: #637381;
`;

const FilterArea = styled.div`
  width: 12%;
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

const Select = styled.select`
  height: 30px;
  border-radius: 4px;
  border: 1px solid #212121;
  padding: 2px;
  color: #212121;
  font-size: 14px;
`;
