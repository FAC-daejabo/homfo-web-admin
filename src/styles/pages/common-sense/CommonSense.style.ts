import styled from "styled-components";

export const CommonSenseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
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
`;