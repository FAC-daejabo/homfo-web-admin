import React, { useEffect, useState } from "react";
import {
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/admin/UserManagement.style";
import styled from "styled-components";
import ProposalCard from "../../components/card/ProposalCard";
import { useRecoilState } from "recoil";
import { modalAtom } from "../../stores/modalAtom";
import ProposalModal from "../../components/modal/ProposalModal";
import { offersAtom } from "../../stores/offerAtom";
import { getOffers } from "../../api/auth/api";

const Proposals = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalAtom);
  const [offers, setOffers] = useRecoilState(offersAtom);

  useEffect(() => {
    getOffers(setOffers);
  }, [setOffers]);
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>작성된 제안서</PageTitle>
      </PageHeaderWrapper>
      <ProposalArea>
        {offers.length>0?offers.map((offer) => 
          offer.homfoRequestThumbnail!==null&&
          <ProposalCard
            key={offer.id}
            offer={offer}
            setModalOpen={setModalOpen}
          />
        ):null}
      </ProposalArea>
      <ProposalModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default Proposals;

const ProposalArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 10px;
  grid-gap: 20px;
  width: 100%;
`;
