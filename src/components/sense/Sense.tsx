import React from "react";
import * as S from "../../styles/components/sense/Sense.style";
import { ISense } from "../../interfaces/SenseInterface";
import { getDate } from "../../utils/util";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
  senseBannerAtom,
  senseContentAtom,
  senseIdAtom,
  senseIsPublicAtom,
  sensePosterListAtom,
  senseTitleAtom,
} from "../../stores/senseAtom";
import {
  converBannerUrlToFile,
  convertImagesUrlToFile,
} from "../../api/auth/api";
import Swal from "sweetalert2";

const Sense = ({
  senseId,
  writerName,
  title,
  content,
  likeCount,
  favoriteCount,
  images,
  bannerImage,
  status,
  isPublic,
  createdAt,
}: ISense) => {
  const setBanner = useSetRecoilState(senseBannerAtom);
  const setPosterList = useSetRecoilState(sensePosterListAtom);
  const setPosterTitle = useSetRecoilState(senseTitleAtom);
  const setPosterContent = useSetRecoilState(senseContentAtom);
  const setIsPublic = useSetRecoilState(senseIsPublicAtom);
  const setSenseId = useSetRecoilState(senseIdAtom);

  const navigate = useNavigate();

  return (
    <Link to={`/common-sense/register`}>
      <S.SenseContainer
        onClick={() => {
          if (
            localStorage.getItem("nickName") === writerName ||
            localStorage.getItem("role") === "절대관리자"
          ) {
            converBannerUrlToFile(
              bannerImage,
              setBanner as React.Dispatch<React.SetStateAction<File>>
            );
            convertImagesUrlToFile(images, setPosterList);
            setPosterTitle(title);
            setPosterContent(content);
            setIsPublic(isPublic === "Y" ? true : false);
            setSenseId(senseId);
          } else {
            Swal.fire({
              text: "수정 권한이 없습니다.",
              showConfirmButton: true,
            }).then(() => navigate(-1));
          }
        }}
      >
        <S.SenseImage src={images[0]} />
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
          {isPublic === "N" ? <S.PrivateIcon /> : null}
        </S.TitleContainer>
        <S.UploadDate>{getDate(createdAt)}</S.UploadDate>
      </S.SenseContainer>
    </Link>
  );
};

export default Sense;
