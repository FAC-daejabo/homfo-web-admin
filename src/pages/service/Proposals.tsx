import React from "react";
import {
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/admin/UserManagement.style";
import styled from "styled-components";
import ProposalCard from "../../components/card/ProposalCard";

const Proposals = () => {
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>작성된 제안서</PageTitle>
      </PageHeaderWrapper>
      <ProposalArea>
        <ProposalCard
          status="답변완료"
          nickname="신우현"
          age={25}
          sex="남성"
          area="대일초등학교"
          officeName="스타 공인중개소"
        />
        <ProposalCard
          status="답변완료"
          nickname="신우현"
          age={25}
          sex="남성"
          area="대일초등학교"
          officeName="스타 공인중개소"
        />
        <ProposalCard
          status="답변완료"
          nickname="신우현"
          age={25}
          sex="남성"
          area="대일초등학교"
          officeName="스타 공인중개소"
        />
        <ProposalCard
          status="답변완료"
          nickname="신우현"
          age={25}
          sex="남성"
          area="대일초등학교"
          officeName="스타 공인중개소"
        />
        <ProposalCard
          status="답변완료"
          nickname="신우현"
          age={25}
          sex="남성"
          area="대일초등학교"
          officeName="스타 공인중개소"
        />
      </ProposalArea>
    </>
  );
};

export default Proposals;

const ProposalArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 10px;
  width: 100%;
`;
