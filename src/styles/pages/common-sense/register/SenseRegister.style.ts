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
  font-size: 20px;
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

export const ImageInput = styled.input``;

export const TitleInput = styled.input`
  border-bottom: 1px solid black;
  height: 30px;
  padding-left: 7px;
`;

export const ContentInput = styled.textarea`
  height: 200px;
  padding: 10px;
`;

export const PreviewImage = styled.img`
  width: 300px;
  height: 300px;
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
