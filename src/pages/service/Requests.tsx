import React, { useEffect, useState } from "react";
import {
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/admin/UserManagement.style";
import styled from "styled-components";
import RequestCard from "../../components/card/RequestCard";
import { useRecoilState } from "recoil";
import { modalAtom } from "../../stores/modalAtom";
import ProposalModal from "../../components/modal/ProposalModal";
import { requestAtom } from "../../stores/requestAtom";
import { getRequests } from "../../api/auth/api";

const Requests = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalAtom);
  const [requests, setRequests] = useRecoilState(requestAtom);

  useEffect(() => {
    getRequests(setRequests);
  }, []);
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>매물 신청 목록</PageTitle>
      </PageHeaderWrapper>
      <RequestArea>
        {requests.map((request) => (
          <RequestCard
            key={request.id}
            request={request}
            setModalOpen={setModalOpen}
          />
        ))}
      </RequestArea>
      <PageHeaderWrapper>
        <PageTitle>매물 처리중</PageTitle>
      </PageHeaderWrapper>
      <RequestArea></RequestArea>
      <PageHeaderWrapper>
        <PageTitle>처리 완료</PageTitle>
      </PageHeaderWrapper>
      <RequestArea></RequestArea>
      <ProposalModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        message=""
      />
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
