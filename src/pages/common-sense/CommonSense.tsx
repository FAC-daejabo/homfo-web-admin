import React, { useEffect, useState } from "react";
import Sense from "../../components/sense/Sense";
import * as S from "../../styles/pages/common-sense/CommonSense.style";
import { Link } from "react-router-dom";
import {
  PageHeaderWrapper,
  PageTitle,
} from "../../styles/pages/admin/UserManagement.style";
import { ISense } from "../../interfaces/SenseInterface";
import { getSenses } from "../../api/auth/api";

const CommonSense = () => {
  const [senses, setSenses] = useState<ISense[]>([]);

  useEffect(() => {
    getSenses(setSenses);
  }, []);
  return (
    <>
      <PageHeaderWrapper>
        <PageTitle>부동산 상식 업로드</PageTitle>
      </PageHeaderWrapper>
      <S.CommonSenseContainer>
        {senses.map((sense) => (
          <Sense
            key={sense.senseId}
            senseId={sense.senseId}
            writerName={sense.writerName}
            title={sense.writerName}
            content={sense.content}
            likeCount={sense.likeCount}
            favoriteCount={sense.favoriteCount}
            images={sense.images}
            bannerImage={sense.bannerImage}
            status={sense.status}
            isPublic={sense.isPublic}
            createdAt={sense.createdAt}
          />
        ))}
      </S.CommonSenseContainer>
      <Link to="/common-sense/register">
        <S.SenseRegiserButton>등록하기</S.SenseRegiserButton>
      </Link>
    </>
  );
};

export default CommonSense;
