import styled from "styled-components";

export const PageHeaderWrapper = styled.div`
  display: flex;
  justify-items: center;
  border-bottom: 1px solid #c4cdd5;
  padding: 10px 0;
  margin-bottom: 20px;
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const ContentContainer = styled.main`
  background-color: #ffffff;
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 40px 20px;
`;
