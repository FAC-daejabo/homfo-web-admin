import React, { useEffect } from "react";
import {
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/admin/UserManagement.style";
import styled from "styled-components";
import RequestCard from "../../components/card/RequestCard";
import { useRecoilState } from "recoil";
import { modalAtom } from "../../stores/modalAtom";
import ProposalModal from "../../components/modal/ProposalModal";
import {
  matchStatusAtom,
  requestAtom,
  requestIdAtom,
} from "../../stores/requestAtom";
import { getRequests } from "../../api/auth/api";
import { offerIdAtom } from "../../stores/offerAtom";

const Requests = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalAtom);
  const [requests, setRequests] = useRecoilState(requestAtom);
  const [matchStatus, setMatchStatus] = useRecoilState(matchStatusAtom);
  const [requestId, setRequestId] = useRecoilState(requestIdAtom);
  const [offerId, setOfferId] = useRecoilState(offerIdAtom);

  console.log(requestId);
  console.log(offerId);

  useEffect(() => {
    getRequests(matchStatus, setRequests);
  }, [matchStatus, setRequests]);
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle
          active={matchStatus === "매물 파악 완료" ? "true" : "false"}
          style={{ cursor: "pointer" }}
          onClick={() => setMatchStatus("매물 파악 완료")}
        >
          매물 파악 완료
        </PageTitle>
        <PageTitle
          active={matchStatus === "매물 파악 중" ? "true" : "false"}
          style={{ cursor: "pointer" }}
          onClick={() => setMatchStatus("매물 파악 중")}
        >
          매물 파악 중
        </PageTitle>
        <PageTitle
          active={matchStatus === "신청 완료" ? "true" : "false"}
          style={{ cursor: "pointer" }}
          onClick={() => setMatchStatus("신청 완료")}
        >
          신청 완료
        </PageTitle>
      </PageHeaderWrapper>
      <RequestArea>
        {requests.map((request) => (
          <RequestCard
            key={request.id}
            request={request}
            setModalOpen={setModalOpen}
            setRequestId={setRequestId}
            setOfferId={setOfferId}
          />
        ))}
      </RequestArea>
      <ProposalModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default Requests;

const RequestArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 10px;
  width: 100%;
`;
