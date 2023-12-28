import React from "react";
import styled from "styled-components";
import { FlexRowSpaceBetween } from "../../styles/util";
import { calculateAge, getDday } from "../../utils/util";
import { IRequest } from "../../interfaces/RequestInterface";

const RequestCard: any = ({
  request,
  setModalOpen,
  setRequestId,
  setOfferId,
}: {
  request: IRequest;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setRequestId: React.Dispatch<React.SetStateAction<number>>;
  setOfferId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <RequestCardContainer
      onClick={() => {
        setModalOpen((current) => !current);
        setRequestId(request.id);
        if (request.offerId !== null) {
          setOfferId(request.offerId);
        }
      }}
    >
      <FlexRowSpaceBetween style={{ marginBottom: "15px" }}>
        <Status>{request.matchStatus}</Status>
        <Date>{getDday(request.createdAt)}</Date>
      </FlexRowSpaceBetween>
      <InfoArea>
        <InfoTitle>닉네임</InfoTitle>
        <Info>{request.writer.nickName}</Info>
      </InfoArea>
      <InfoArea>
        <InfoTitle>성별</InfoTitle>
        <Info>{request.writer.gender === "M" ? "남성" : "여성"}</Info>
      </InfoArea>
      <InfoArea>
        <InfoTitle>나이</InfoTitle>
        <Info>{calculateAge(request.writer.dateOfBirth)}</Info>
      </InfoArea>
      <InfoArea>
        <InfoTitle>구역</InfoTitle>
        <Info>{request.area.name}</Info>
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
  margin-bottom: 15px;
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
