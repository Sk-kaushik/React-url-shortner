import styled from "styled-components";

// ASSETS
import BgBoost from "../../assets/bg-boost-desktop.svg";

// ADVANCE SECTION CONTAINER (div)
export const AdvanceSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 100px 0;
  @media (max-width: 375px) {
    padding: 20px 0 100px;
  }
`;

// ADVANCE SECTION SUB HEADING (h3)
export const AdvanceSectionSubHeading = styled.h3`
  width: 60%;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 10px;
  color: #bfbfbf;
  text-align: center;
  @media (max-width: 375px) {
    width: 100%;
    font-size: 1rem;
  }
`;

// BOOST YOUR LINK SECTION (div)
export const BoostYourLink = styled.div`
  width: 100%;
  height: 250px;
  background: #3b3054 url(${BgBoost}) no-repeat center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
