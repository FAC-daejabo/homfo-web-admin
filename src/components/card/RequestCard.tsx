import React from "react";
import styled from "styled-components";
import { FlexRowSpaceBetween } from "../../styles/util";
import { getDday } from "../../utils/util";

const RequestCard: any = ({
  nickname,
  age,
  sex,
  area,
  date,
  status,
  setModalOpen,
}: {
  nickname: string;
  age: number;
  sex: string;
  area: string;
  date: string;
  status: string;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <RequestCardContainer onClick={() => setModalOpen((current) => !current)}>
      <FlexRowSpaceBetween style={{ marginBottom: "15px" }}>
        <Status>{status}</Status>
        <Date>{getDday(date)}</Date>
      </FlexRowSpaceBetween>
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
    </RequestCardContainer>
  );
};

export default RequestCard;

const RequestCardContainer = styled.div`
  width: 250px;
  height: 170px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 12px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const Status = styled.span`
  border: 1px solid #212121;
  height: 30px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Date = styled.span`
  line-height: 30px;
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
