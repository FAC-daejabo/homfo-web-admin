import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { areaIdAtom, requestIdAtom } from "../../stores/requestAtom";
import { getAreaDetail, getRequestDetail } from "../../api/auth/api";
import { IArea, IRequestDetail } from "../../interfaces/RequestInterface";

const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "80%",
    height: "70%",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "space-between",
    overflow: "auto",
    display: "flex",
  },
};

const ProposalModal = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [requestId, setRequestId] = useRecoilState(requestIdAtom);
  const [requestDetail, setRequestDetail] = useState<IRequestDetail>();
  const [areaId, setAreaId] = useRecoilState(areaIdAtom);
  const [areaDetail, setAreaDetail] = useState<IArea>();
  // const [contractType, setContractType] = useRecoilState(
  //   requestContractTypeAtom
  // );
  // const [residencePeriod, setResidencePeriod] = useRecoilState(
  //   requestResidencePeriodAtom
  // );
  // const [loanAvailability, setLoanAvailability] = useRecoilState(
  //   requestLoanAvailabilityAtom
  // );
  // const [loanType, setLoanType] = useRecoilState(requestLoanTypeAtom);
  // const [moveInPeriod, setMoveInPeriod] = useRecoilState(
  //   requestMoveInPeriodAtom
  // );
  // const [option, setOption] = useRecoilState(requestOptionAtom);
  // const [otherOption, setOtherOption] = useRecoilState(requestOtherOptionAtom);

  console.log(requestDetail);
  console.log(areaDetail);

  useEffect(() => {
    if (requestId) {
      getRequestDetail(
        requestId,
        setRequestDetail as React.Dispatch<
          React.SetStateAction<IRequestDetail>
        >,
        setAreaId as React.Dispatch<React.SetStateAction<number>>
      );
    }
  }, [requestId]);

  useEffect(() => {
    if (areaId) {
      getAreaDetail(
        areaId,
        setAreaDetail as React.Dispatch<React.SetStateAction<IArea>>
      );
    }
  }, [areaId]);

  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => {
        setModalOpen(false);
        setRequestId(undefined);
        setRequestDetail(undefined);
      }}
      style={customModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
      shouldCloseOnOverlayClick={true}
    >
      <RequestArea>
        <Title>요청서</Title>

        <ProposalInfoRow>
          <span>1. 구역 위치 : </span>
          <span>{areaDetail?.name}</span>
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>2. 매물 유형 : </span>
          {requestDetail?.realEstateType.map((type) => (
            <span>{type}</span>
          ))}
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>3. 계약 유형 : </span>
          <span>{requestDetail?.contractType}</span>
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>4. 희망 거주기간 : </span>
          <span>{requestDetail?.residencePeriod}</span>
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>5. 금액대 : </span>
          {requestDetail?.deposit.deposit.length === 2 ? (
            <DepositRow>
              월세 보증금 : {requestDetail?.deposit.deposit[0]} ~{" "}
              {requestDetail?.deposit.deposit[1]}
            </DepositRow>
          ) : null}
          {requestDetail?.deposit.monthlyRent.length === 2 ? (
            <DepositRow>
              월 임대료 : {requestDetail?.deposit.monthlyRent[0]} ~{" "}
              {requestDetail?.deposit.monthlyRent[1]}
            </DepositRow>
          ) : null}
          {requestDetail?.deposit.jeonseDeposit.length === 2 ? (
            <DepositRow>
              전세 보증금 : {requestDetail?.deposit.jeonseDeposit[0]} ~{" "}
              {requestDetail?.deposit.jeonseDeposit[1]}
            </DepositRow>
          ) : null}
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>6. 대출 가능 유무 : </span>
          <span>{requestDetail?.loanAvailability}</span>
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>7. 대출 유형 : </span>
          <span>{requestDetail?.loanType}</span>
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>8. 예상 입주시기 : </span>
          <span>{requestDetail?.moveInPeriod}</span>
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>9. 옵션 : </span>
          {requestDetail?.roomOption.map((option) => (
            <span>{option} </span>
          ))}
          <span>{requestDetail?.otherRoomOption}</span>
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>10. 추가 요청사항 : </span>
          <span>{requestDetail?.additionalRequests}</span>
        </ProposalInfoRow>
      </RequestArea>
      <ProposalArea></ProposalArea>
    </ReactModal>
  );
};

export default ProposalModal;

const RequestArea = styled.div`
  height: 100%;
  width: 40%;
  border: 1px solid #aeaeae;
  border-radius: 12px;
  padding: 20px 15px;
`;

const ProposalArea = styled.div`
  height: 100%;
  width: 55%;
  border: 1px solid #aeaeae;
  border-radius: 12px;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
`;

const ProposalInfoRow = styled.div`
  margin: 20px 0;
  font-size: 18px;
`;

const DepositRow = styled.div`
  margin: 15px 0;
  font-size: 18px;
`;
