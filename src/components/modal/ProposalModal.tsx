import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { areaIdAtom, requestIdAtom } from "../../stores/requestAtom";
import { getAreaDetail, getRequestDetail } from "../../api/auth/api";
import { IArea, IRequestDetail } from "../../interfaces/RequestInterface";
import { offerImagesAtom } from "../../stores/offerAtom";
import { AiFillCamera, AiFillCloseCircle } from "react-icons/ai";
import { RegisterButton } from "../../styles/pages/common-sense/register/SenseRegister.style";
import { FlexEndRow } from "../../styles/util";
import Swal from "sweetalert2";

const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "80%",
    height: "90%",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "space-between",
    overflow: "auto",
    display: "flex",
  },
};

const ProposalModal = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [requestId, setRequestId] = useRecoilState(requestIdAtom);
  const [requestDetail, setRequestDetail] = useState<IRequestDetail>();
  const [areaId, setAreaId] = useRecoilState(areaIdAtom);
  const [areaDetail, setAreaDetail] = useState<IArea>();
  const [offerImages, setOfferImages] = useRecoilState(offerImagesAtom);
  const [offerPreviewImages, setOfferPreviewImages] = useState<string[]>([]);

  console.log(requestDetail);
  console.log(areaDetail);

  useEffect(() => {
    if (requestId) {
      getRequestDetail(
        requestId,
        setRequestDetail as React.Dispatch<
          React.SetStateAction<IRequestDetail>
        >,
        setAreaId as React.Dispatch<React.SetStateAction<number>>
      );
    }
  }, [requestId]);

  useEffect(() => {
    if (areaId) {
      getAreaDetail(
        areaId,
        setAreaDetail as React.Dispatch<React.SetStateAction<IArea>>
      );
    }
  }, [areaId]);

  useEffect(() => {
    if (offerImages && offerImages.length > 0) {
      let imageUrlList = [];

      for (let i = 0; i < offerImages.length; i++) {
        const currentImageUrl = URL.createObjectURL(offerImages[i]);
        imageUrlList.push(currentImageUrl);
      }

      setOfferPreviewImages(imageUrlList);
    }
  }, [offerImages]);

  const handleDeleteImage = (id: number) => {
    setOfferPreviewImages(
      offerPreviewImages.filter((_, index) => index !== id)
    );
    setOfferImages(offerImages.filter((_, index) => index !== id));
  };

  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => {
        setModalOpen(false);
        setRequestId(undefined);
        setRequestDetail(undefined);
        setOfferImages([]);
        setOfferPreviewImages([]);
        setAreaId(undefined);
        setAreaDetail(undefined);
      }}
      style={customModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
      shouldCloseOnOverlayClick={true}
    >
      <RequestArea>
        <Title>요청서</Title>

        <ProposalInfoRow>
          <span>1. 구역 위치 : </span>
          <span>{areaDetail?.name}</span>
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>2. 매물 유형 : </span>
          {requestDetail?.realEstateType.map((type) => (
            <span>{type}</span>
          ))}
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>3. 계약 유형 : </span>
          <span>{requestDetail?.contractType}</span>
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>4. 희망 거주기간 : </span>
          <span>{requestDetail?.residencePeriod}</span>
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>5. 금액대 : </span>
          {requestDetail?.deposit.deposit.length === 2 ? (
            <DepositRow>
              월세 보증금 : {requestDetail?.deposit.deposit[0]} ~{" "}
              {requestDetail?.deposit.deposit[1]}
            </DepositRow>
          ) : null}
          {requestDetail?.deposit.monthlyRent.length === 2 ? (
            <DepositRow>
              월 임대료 : {requestDetail?.deposit.monthlyRent[0]} ~{" "}
              {requestDetail?.deposit.monthlyRent[1]}
            </DepositRow>
          ) : null}
          {requestDetail?.deposit.jeonseDeposit.length === 2 ? (
            <DepositRow>
              전세 보증금 : {requestDetail?.deposit.jeonseDeposit[0]} ~{" "}
              {requestDetail?.deposit.jeonseDeposit[1]}
            </DepositRow>
          ) : null}
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>6. 대출 가능 유무 : </span>
          <span>{requestDetail?.loanAvailability}</span>
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>7. 대출 유형 : </span>
          <span>{requestDetail?.loanType}</span>
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>8. 예상 입주시기 : </span>
          <span>{requestDetail?.moveInPeriod}</span>
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>9. 옵션 : </span>
          {requestDetail?.roomOption.map((option) => (
            <span>{option} </span>
          ))}
          <span>{requestDetail?.otherRoomOption}</span>
        </ProposalInfoRow>
        <ProposalInfoRow>
          <span>10. 추가 요청사항 : </span>
          <span>{requestDetail?.additionalRequests}</span>
        </ProposalInfoRow>
      </RequestArea>
      <ProposalArea>
        <Title>제안서</Title>
        <ImageInputArea>
          <ImageInputLabel htmlFor="image">
            <CameraIcon />
          </ImageInputLabel>
          <ImageInput
            id="image"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              setOfferImages((current) => {
                let tempList = [...current];
                if (e.currentTarget?.files) {
                  tempList.push(e.currentTarget?.files[0]);
                }
                return tempList;
              });
            }}
          />
          {offerPreviewImages.map((image, id) => (
            <ImageInputLabel as="div" key={id}>
              <PreviewImage src={image} alt={`${image}-${id}`} />
              <DeleteIcon onClick={() => handleDeleteImage(id)} />
            </ImageInputLabel>
          ))}
        </ImageInputArea>
        <InputContainer>
          <InputTitle>구역 선택</InputTitle>
          <Select>
            <option value="계룡리슈빌">계룡리슈빌</option>
            <option value="보정동카페거리, 죽현마을">
              보정동카페거리, 죽현마을
            </option>
            <option value="보정우체국">보정우체국</option>
            <option value="한신 길훈아파트">한신 길훈아파트</option>
            <option value="대일초등학교">대일초등학교</option>
            <option value="단국대학교, 죽전야외음악당, 성현마을2단지">
              단국대학교, 죽전야외음악당, 성현마을2단지
            </option>
            <option value="동부아파트">동부아파트</option>
            <option value="내대지마을5단지 정문">내대지마을5단지 정문</option>
            <option value="건영캐스빌후문">건영캐스빌후문</option>
            <option value="죽전교차로">죽전교차로</option>
            <option value="동보아파트, 수지파크푸르지오">
              동보아파트, 수지파크푸르지오
            </option>
          </Select>
        </InputContainer>
        <InputContainer>
          <InputTitle>계약형태</InputTitle>
          <Select>
            <option value="전세">전세</option>
            <option value="월세">월세</option>
          </Select>
        </InputContainer>
        <InputContainer>
          <InputTitle>임대료</InputTitle>
          <Input />
        </InputContainer>
        <InputContainer>
          <InputTitle>보증금</InputTitle>
          <Input />
        </InputContainer>
        <InputContainer>
          <InputTitle>대출유무</InputTitle>
          <Select>
            <option value="예">예</option>
            <option value="아니오">아니오</option>
          </Select>
        </InputContainer>
        <InputContainer>
          <InputTitle>형태</InputTitle>
          <Input />
        </InputContainer>
        <InputContainer>
          <InputTitle>입주 가능 시기</InputTitle>
          <Input />
        </InputContainer>
        <InputContainer>
          <InputTitle>옵션</InputTitle>
          <Input />
        </InputContainer>
        <InputContainer>
          <InputTitle>기타 전달 사항</InputTitle>
          <Input />
        </InputContainer>
        <FlexEndRow>
          <RegisterButton
            onClick={() => {
              Swal.fire({
                text: "제안서가 작성되었습니다.",
              }).then(() => {
                setModalOpen(false);
                setRequestId(undefined);
                setRequestDetail(undefined);
                setOfferImages([]);
                setOfferPreviewImages([]);
                setAreaId(undefined);
                setAreaDetail(undefined);
              });
            }}
          >
            작성
          </RegisterButton>
        </FlexEndRow>
      </ProposalArea>
    </ReactModal>
  );
};

export default ProposalModal;

const RequestArea = styled.div`
  height: 100%;
  width: 40%;
  border: 1px solid #aeaeae;
  border-radius: 12px;
  padding: 20px 15px;
`;

const ProposalArea = styled.div`
  height: 100%;
  width: 55%;
  border: 1px solid #aeaeae;
  border-radius: 12px;
  padding: 20px 15px;
  overflow-y: scroll;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
`;

const ProposalInfoRow = styled.div`
  margin: 20px 0;
  font-size: 18px;
`;

const DepositRow = styled.div`
  margin: 15px 0;
  font-size: 18px;
`;

const ImageInputArea = styled.div`
  padding-top: 15px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);
  /* @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  } */
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const ImageInputLabel = styled.label`
  width: 120px;
  height: 120px;
  border: 1px solid #ededed;
  margin-right: 10px;
  position: relative;
  margin-bottom: 15px;
`;

const CameraIcon = styled(AiFillCamera)`
  width: 20px;
  height: 20px;
`;

const ImageInput = styled.input``;

const PreviewImage = styled.img`
  width: 120px;
  height: 120px;
`;

const DeleteIcon = styled(AiFillCloseCircle)`
  height: 15px;
  width: 15px;
  color: gba(34, 36, 40, 0.5);
  position: absolute;
  right: 4px;
  top: 4px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Select = styled.select`
  height: 30px;
  border-radius: 4px;
  border: 1px solid #212121;
  padding: 2px;
  color: #212121;
  font-size: 14px;
`;

const InputTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: 1px solid #212121;
  font-size: 14px;
  border-radius: 4px;
  padding: 5px;
  height: 30px;
`;
