import React from "react";
import {
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/admin/UserManagement.style";
import styled from "styled-components";
import RequestCard from "../../components/card/RequestCard";

const Requests = () => {
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>매물 파악 중</PageTitle>
      </PageHeaderWrapper>
      <RequestArea>
        <RequestCard
          nickname="신우현"
          sex="남성"
          age={25}
          area="능동초등학교"
          status="매물 파악 중"
          date="2023-12-19 11:45:12"
        ></RequestCard>
        <RequestCard
          nickname="정윤미"
          sex="여성"
          age={25}
          area="화서초등학교"
          status="매물 파악 중"
          date="2023-12-19 11:45:12"
        ></RequestCard>
        <RequestCard
          nickname="장성호"
          sex="남성"
          age={25}
          area="기산초등학교"
          status="매물 파악 중"
          date="2023-12-19 11:45:12"
        ></RequestCard>
        <RequestCard
          nickname="강동하"
          sex="남성"
          age={25}
          area="대일초등학교"
          status="매물 파악 중"
          date="2023-12-19 11:45:12"
        ></RequestCard>
      </RequestArea>
      <PageHeaderWrapper>
        <PageTitle>매물 파악 완료</PageTitle>
      </PageHeaderWrapper>
      <RequestArea>
        <RequestCard
          nickname="신우현"
          sex="남성"
          age={25}
          area="능동초등학교"
          status="매물 파악 중"
          date="2023-12-19 11:45:12"
        ></RequestCard>
        <RequestCard
          nickname="정윤미"
          sex="여성"
          age={25}
          area="화서초등학교"
          status="매물 파악 중"
          date="2023-12-19 11:45:12"
        ></RequestCard>
        <RequestCard
          nickname="장성호"
          sex="남성"
          age={25}
          area="기산초등학교"
          status="매물 파악 중"
          date="2023-12-19 11:45:12"
        ></RequestCard>
        <RequestCard
          nickname="강동하"
          sex="남성"
          age={25}
          area="대일초등학교"
          status="매물 파악 중"
          date="2023-12-19 11:45:12"
        ></RequestCard>
      </RequestArea>
      <PageHeaderWrapper>
        <PageTitle>신청완료</PageTitle>
      </PageHeaderWrapper>
      <RequestArea>
        <RequestCard
          nickname="신우현"
          sex="남성"
          age={25}
          area="능동초등학교"
          status="매물 파악 중"
          date="2023-12-19 11:45:12"
        ></RequestCard>
        <RequestCard
          nickname="정윤미"
          sex="여성"
          age={25}
          area="화서초등학교"
          status="매물 파악 중"
          date="2023-12-19 11:45:12"
        ></RequestCard>
        <RequestCard
          nickname="장성호"
          sex="남성"
          age={25}
          area="기산초등학교"
          status="매물 파악 중"
          date="2023-12-19 11:45:12"
        ></RequestCard>
        <RequestCard
          nickname="강동하"
          sex="남성"
          age={25}
          area="대일초등학교"
          status="매물 파악 중"
          date="2023-12-19 11:45:12"
        ></RequestCard>
      </RequestArea>
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
