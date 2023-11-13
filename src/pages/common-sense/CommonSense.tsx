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
import { useSetRecoilState } from "recoil";
import {
  senseBannerAtom,
  senseContentAtom,
  senseIdAtom,
  senseIsPublicAtom,
  sensePosterListAtom,
  senseTitleAtom,
} from "../../stores/senseAtom";

const CommonSense = () => {
  const [senses, setSenses] = useState<ISense[]>([]);
  const setBanner = useSetRecoilState(senseBannerAtom);
  const setPosterList = useSetRecoilState(sensePosterListAtom);
  const setPosterTitle = useSetRecoilState(senseTitleAtom);
  const setPosterContent = useSetRecoilState(senseContentAtom);
  const setIsPublic = useSetRecoilState(senseIsPublicAtom);
  const setSenseId = useSetRecoilState(senseIdAtom);

  useEffect(() => {
    getSenses(setSenses);
    setBanner(undefined);
    setPosterList([]);
    setPosterTitle("");
    setPosterContent("");
    setIsPublic(false);
    setSenseId(undefined);
  }, [
    setBanner,
    setPosterList,
    setPosterTitle,
    setPosterContent,
    setIsPublic,
    setSenseId,
  ]);
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
            title={sense.title}
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
