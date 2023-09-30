import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const InputTitle = styled.span`
  color: #1e293b;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 7px;
  padding-left: 2px;
`;

export const InputText = styled.input`
  width: 300px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  padding-left: 7px;
`;

export const InputSelect = styled.select`
  width: 300px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  padding-left: 7px;
`;

export const SubmitButton = styled.button`
  width: 300px;
  height: 42px;
  border-radius: 8px;
  color: #ffffff;
  background-color: #624bff;
  margin-top: 15px;
  cursor: pointer;
`;
