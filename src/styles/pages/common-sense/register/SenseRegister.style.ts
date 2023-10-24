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
  display: flex;
`;

export const ImageInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: normal;
  vertical-align: middle;
  width: 300px;
  height: 300px;
  border: 1px solid #ededed;
  margin-right: 10px;
  position: relative;
  cursor: pointer;
`;

export const ImageInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

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
  height: 14px;
  width: 14px;
  color: gba(34, 36, 40, 0.5);
  position: absolute;
  right: 4px;
  top: 4px;
`;
