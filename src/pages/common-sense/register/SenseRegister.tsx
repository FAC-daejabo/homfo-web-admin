import React from "react";
import * as S from "../../../styles/pages/common-sense/register/SenseRegister.style";

const SenseRegister = () => {
  return (
    <S.RegisterContainer>
      <S.InputArea>
        <S.InputTitle>부동산 상식 이미지</S.InputTitle>
        <S.ImageInputArea>
          <S.ImageInputLabel htmlFor="image">
            <S.CameraIcon />
          </S.ImageInputLabel>
          <S.ImageInput id="image" type="file" accept="image/*" multiple />
        </S.ImageInputArea>
      </S.InputArea>
      <S.InputArea>
        <S.InputTitle>제목</S.InputTitle>
        <S.TitleInput />
      </S.InputArea>
      <S.InputArea>
        <S.InputTitle>내용</S.InputTitle>
        <S.ContentInput />
      </S.InputArea>
    </S.RegisterContainer>
  );
};

export default SenseRegister;
