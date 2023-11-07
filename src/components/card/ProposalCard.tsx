import React from "react";
import styled from "styled-components";

const ProposalCard = ({
  nickname,
  age,
  sex,
  area,
  status,
  officeName,
}: {
  status: string;
  nickname: string;
  age: number;
  sex: string;
  area: string;
  officeName: string;
}) => {
  return (
    <ProposalCardContainer>
      <Status>{status}</Status>
      <InfoArea>
        <InfoTitle>닉네임</InfoTitle>
        <Info>{nickname}</Info>
      </InfoArea>
      <InfoArea>
        <InfoTitle>성별</InfoTitle>
        <Info>{sex}</Info>
      </InfoArea>
      <InfoArea>
        <InfoTitle>나이</InfoTitle>
        <Info>{age}</Info>
      </InfoArea>
      <InfoArea>
        <InfoTitle>구역</InfoTitle>
        <Info>{area}</Info>
      </InfoArea>
      <InfoArea>
        <InfoTitle>중개사무소명</InfoTitle>
        <Info>{officeName}</Info>
      </InfoArea>
    </ProposalCardContainer>
  );
};

export default ProposalCard;

const ProposalCardContainer = styled.div`
  width: 250px;
  height: 150px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 12px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  margin-bottom: 20px;
`;

const Status = styled.span`
  border: 1px solid #212121;
  height: 30px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
`;

const InfoArea = styled.div`
  display: flex;
  padding-left: 3px;
  margin: 8px 0;
`;

const InfoTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
`;

const Info = styled.span``;
