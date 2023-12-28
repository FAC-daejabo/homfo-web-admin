import styled from "styled-components";
import { AiFillCamera, AiFillCloseCircle } from "react-icons/ai";

export const RegisterContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  border-radius: 5px;
  height: 100%;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const InputTitle = styled.h1`
  color: black;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const ImageInputArea = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 10px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
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

export const ImageInputLabel = styled.label`
  width: 300px;
  height: 300px;
  border: 1px solid #ededed;
  margin-right: 10px;
  position: relative;
`;

export const BannerImageInputLabel = styled(ImageInputLabel)`
  width: 430px;
  height: 250px;
`;

export const ImageInput = styled.input``;

export const TitleInput = styled.input`
  border-bottom: 1px solid black;
  height: 35px;
  padding-left: 7px;
  font-size: 20px;
`;

export const ContentInput = styled.textarea`
  height: 170px;
  padding: 10px;
  font-size: 18px;
`;

export const PreviewImage = styled.img`
  width: 300px;
  height: 300px;
`;

export const BannerPreviewImage = styled(PreviewImage)`
  width: 430px;
  height: 250px;
`;

export const CameraIcon = styled(AiFillCamera)`
  width: 40px;
  height: 40px;
`;

export const DeleteIcon = styled(AiFillCloseCircle)`
  height: 20px;
  width: 20px;
  color: gba(34, 36, 40, 0.5);
  position: absolute;
  right: 4px;
  top: 4px;
  cursor: pointer;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const RegisterButton = styled.button`
  width: 155px;
  height: 48px;
  background-color: #624bff;
  border-radius: 8px;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-left: 7px;
  font-size: 16px;
  cursor: pointer;
`;

export const CancelButton = styled(RegisterButton)`
  background-color: #637381;
`;
export const ModifyButton = styled(RegisterButton)`
  background-color: #ffc107;
`;

export const DeleteButton = styled(RegisterButton)`
  background-color: #dc3545;
`;

export const CheckboxArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PublicCheckbox = styled.input``;
