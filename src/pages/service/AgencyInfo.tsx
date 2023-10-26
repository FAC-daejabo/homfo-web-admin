import React from "react";
import styled from "styled-components";
import {
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/admin/UserManagement.style";

const AgencyInfo = () => {
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>중개업소 정보 등록</PageTitle>
      </PageHeaderWrapper>
      <InfoContainer>
        <InputArea>
          <InputContainer>
            <InputTitle>1. 사무실 이름</InputTitle>
            <Input />
          </InputContainer>
          <InputContainer>
            <InputTitle>2. 공인중개사 이름</InputTitle>
            <Input />
          </InputContainer>
          <InputContainer>
            <InputTitle>3. 해당 구역</InputTitle>
            <Input />
          </InputContainer>
          <InputContainer>
            <InputTitle>4. 연락처</InputTitle>
            <Input placeholder="ex) 010-1234-5678" />
          </InputContainer>
          <InputContainer>
            <InputTitle>5. 개업/소속 구분</InputTitle>
            <Input />
          </InputContainer>
        </InputArea>
        <InputArea>
          <InputContainer>
            <InputTitle>6. 도로명 주소</InputTitle>
            <Input />
          </InputContainer>
          <InputContainer>
            <InputTitle>7. 지번주소</InputTitle>
            <Input />
          </InputContainer>
          <InputContainer>
            <InputTitle>8. 등록 번호</InputTitle>
            <Input />
          </InputContainer>
          <InputContainer>
            <InputTitle>9. 대표자명</InputTitle>
            <Input />
          </InputContainer>
          <InputContainer>
            <InputTitle>10. 공제 가입 유무</InputTitle>
            <Input />
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
        <SearchTopArea></SearchTopArea>
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
  font-size: 16px;
  border-radius: 2px;
  padding: 6px;
`;

const RegisterArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 0 20px;
  justify-content: space-between;
`;

const SearchContainer = styled.div``;

const SearchTopArea = styled.div``;

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
