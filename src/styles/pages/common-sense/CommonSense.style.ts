import styled from "styled-components";

export const CommonSenseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SenseRegiserButton = styled.button`
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 1;
  width: 130px;
  height: 55px;
  border-radius: 5px;
  background-color: #624bff;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
