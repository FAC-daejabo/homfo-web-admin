import React, { useEffect, useState } from "react";
import * as S from "../../../styles/pages/common-sense/register/SenseRegister.style";
import { useForm } from "react-hook-form";
import { ISenseDetail } from "../../../interfaces/SenseInterface";
import { useRecoilState } from "recoil";
import { sensePosterList } from "../../../stores/senseAtom";

const SenseRegister = () => {
  const { register, handleSubmit, watch } = useForm<ISenseDetail>();

  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [posterList, setPosterList] = useRecoilState(sensePosterList);
  const [posterTitle, setPosterTitle] = useState("");
  const [posterContent, setPosterContent] = useState("");

  useEffect(() => {
    if (posterList && posterList.length > 0) {
      let imageUrlList = [];

      for (let i = 0; i < posterList.length; i++) {
        const currentImageUrl = URL.createObjectURL(posterList[i]);
        imageUrlList.push(currentImageUrl);
      }

      setPreviewImages(imageUrlList);
    }
  }, [posterList]);

  const handleDeleteImage = (id: number) => {
    setPreviewImages(previewImages.filter((_, index) => index !== id));
    setPosterList(posterList.filter((_, index) => index !== id));
  };

  console.log(posterList);
  console.log(previewImages);

  return (
    <S.RegisterContainer>
      <S.InputArea>
        <S.InputTitle>부동산 상식 이미지</S.InputTitle>
        <S.ImageInputArea>
          <S.ImageInputLabel htmlFor="image">
            <S.CameraIcon />
          </S.ImageInputLabel>
          <S.ImageInput
            id="image"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              setPosterList((current) => {
                let tempList = [...current];
                if (e.currentTarget?.files) {
                  tempList.push(e.currentTarget?.files[0]);
                }
                return tempList;
              });
            }}
          />
          {previewImages.map((image, id) => (
            <S.ImageInputLabel as="div" key={id}>
              <S.PreviewImage src={image} alt={`${image}-${id}`} />
              <S.DeleteIcon onClick={() => handleDeleteImage(id)} />
            </S.ImageInputLabel>
          ))}
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
