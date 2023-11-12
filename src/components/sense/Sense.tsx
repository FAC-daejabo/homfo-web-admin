import React from "react";
import * as S from "../../styles/components/sense/Sense.style";
import { ISense } from "../../interfaces/SenseInterface";
import { getDate } from "../../utils/util";
import { Link } from "react-router-dom";

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
  return (
    <Link to={`/common-sense/${senseId}`}>
      <S.SenseContainer>
        <S.SenseImage src={bannerImage} />
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
