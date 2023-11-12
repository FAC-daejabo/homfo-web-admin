import React, { useEffect, useState } from "react";
import * as S from "../../../styles/pages/common-sense/register/SenseRegister.style";
import { useRecoilState } from "recoil";
import {
  senseBannerAtom,
  senseContentAtom,
  senseIsPublicAtom,
  sensePosterListAtom,
  senseTitleAtom,
} from "../../../stores/senseAtom";
import Checkbox from "../../../components/checkbox/Checkbox";

const SenseRegister = () => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [bannerPreviewImage, setBannerPreviewImage] = useState<string>("");
  const [banner, setBanner] = useRecoilState(senseBannerAtom);
  const [posterList, setPosterList] = useRecoilState(sensePosterListAtom);
  const [posterTitle, setPosterTitle] = useRecoilState(senseTitleAtom);
  const [posterContent, setPosterContent] = useRecoilState(senseContentAtom);
  const [isPublic, setIsPublic] = useRecoilState(senseIsPublicAtom);

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

  useEffect(() => {
    if (banner) {
      setBannerPreviewImage(URL.createObjectURL(banner));
    }
  }, [banner]);

  const handleDeleteImage = (id: number) => {
    setPreviewImages(previewImages.filter((_, index) => index !== id));
    setPosterList(posterList.filter((_, index) => index !== id));
  };

  console.log(posterList);
  console.log(previewImages);
  console.log(banner);
  console.log(bannerPreviewImage);

  return (
    <S.RegisterContainer>
      <S.InputArea>
        <S.CheckboxArea>
          <S.InputTitle>부동산 상식 이미지 업로드</S.InputTitle>
          <Checkbox
            content="공개 여부"
            checked={isPublic}
            setChange={setIsPublic}
          />
        </S.CheckboxArea>

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
        <S.InputTitle>배너 이미지 업로드 (최대 1개)</S.InputTitle>

        <S.ImageInputArea>
          <S.ImageInputLabel htmlFor="banner">
            <S.CameraIcon />
          </S.ImageInputLabel>
          <S.ImageInput
            id="banner"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              if (e.currentTarget.files) {
                setBanner(e.currentTarget.files[0]);
              }
            }}
          />
          {bannerPreviewImage ? (
            <S.ImageInputLabel as="div">
              <S.PreviewImage
                src={bannerPreviewImage}
                alt="bannerPreviewImage"
              />
              <S.DeleteIcon
                onClick={() => {
                  setBanner(undefined);
                  setBannerPreviewImage("");
                }}
              />
            </S.ImageInputLabel>
          ) : null}
        </S.ImageInputArea>
      </S.InputArea>
      <S.InputArea>
        <S.InputTitle>제목</S.InputTitle>
        <S.TitleInput
          value={posterTitle}
          onChange={(e) => {
            setPosterTitle(e.currentTarget.value);
          }}
        />
      </S.InputArea>
      <S.InputArea>
        <S.InputTitle>내용</S.InputTitle>
        <S.ContentInput
          value={posterContent}
          onChange={(e) => {
            setPosterContent(e.currentTarget.value);
          }}
        />
      </S.InputArea>

      <S.ButtonArea>
        <S.DeleteButton>삭제</S.DeleteButton>
        <S.ModifyButton>수정</S.ModifyButton>
        <S.RegisterButton>등록</S.RegisterButton>
      </S.ButtonArea>
    </S.RegisterContainer>
  );
};

export default SenseRegister;
