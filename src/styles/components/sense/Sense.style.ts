import styled from "styled-components";
import { RiLockFill } from "react-icons/ri";

export const SenseContainer = styled.div`
  width: 350px;
  height: 410px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  margin-bottom: 20px;
`;

export const SenseImage = styled.img`
  width: 330px;
  height: 330px;
  margin-bottom: 7px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const PrivateIcon = styled(RiLockFill)`
  margin-bottom: 8px;
  color: #dc3545;
`;

export const UploadDate = styled.span``;
