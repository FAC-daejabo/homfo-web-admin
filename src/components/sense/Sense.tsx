import React from "react";
import * as S from "../../styles/components/sense/Sense.style";
import { ISense } from "../../interfaces/SenseInterface";
import { getDate } from "../../utils/util";

const Sense = ({
  senseId,
  writerName,
  title,
  likeCount,
  favoriteCount,
  isPublic,
  status,
  createdAt,
}: ISense) => {
  return (
    <S.SenseContainer>
      <S.SenseImage src="/example.jpeg" />
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        {isPublic === "N" ? <S.PrivateIcon /> : null}
      </S.TitleContainer>
      <S.UploadDate>{getDate(createdAt)}</S.UploadDate>
    </S.SenseContainer>
  );
};

export default Sense;
