import React from "react";
import styled from "styled-components";
import { IOffer } from "../../interfaces/OfferInterface";
import { calculateAge } from "../../utils/util";
import { useRecoilState } from "recoil";
import { requestIdAtom } from "../../stores/requestAtom";

const ProposalCard = ({
  offer,
  setModalOpen,
}: {
  offer: IOffer;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [requestId, setRequestId] = useRecoilState(requestIdAtom);
  console.log(requestId);
  console.log(offer)
  return (
    <ProposalCardContainer
      onClick={() => {
        setModalOpen((current) => !current);
        setRequestId(offer.homfoRequestThumbnail.id);
      }}
    >
      {offer.homfoRequestThumbnail!==null&&
      <>
        <Status>{offer.homfoRequestThumbnail.matchStatus}</Status>
        <InfoArea>
          <InfoTitle>닉네임</InfoTitle>
          <Info>{offer.homfoRequestThumbnail.writer.nickName}</Info>
        </InfoArea>
        <InfoArea>
          <InfoTitle>성별</InfoTitle>
          <Info>
            {offer.homfoRequestThumbnail.writer.gender === "M" ? "남성" : "여성"}
          </Info>
        </InfoArea>
        <InfoArea>
          <InfoTitle>나이</InfoTitle>
          <Info>
            {calculateAge(offer.homfoRequestThumbnail.writer.dateOfBirth)}
          </Info>
        </InfoArea>
        <InfoArea>
          <InfoTitle>구역</InfoTitle>
          <Info>{offer.homfoRequestThumbnail.area.name}</Info>
        </InfoArea>
      </>
        }
      <InfoArea>
        <InfoTitle>중개사무소명</InfoTitle>
        <Info>{offer.agencyThumbnail.name}</Info>
      </InfoArea>
    </ProposalCardContainer> 
  );
};

export default ProposalCard;

const ProposalCardContainer = styled.div`
  width: 300px;
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
