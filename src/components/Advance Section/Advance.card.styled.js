import styled from "styled-components";

// ADVANCE SECTION CARD CONTAINER (div)
export const AdvanceSectionCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 10px;
    background: #2acfcf;
    top: 50%;
    left: 0;
    z-index: -1;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 90%;
      background: #2acfcf;
      top: 10%;
      left: 50%;
      z-index: -1;
    }
  }
`;

// CARD CONTAINER (div)
export const CardContainer = styled.div`
  width: 32%;
  padding: 70px 30px 50px;
  background-color: white;
  margin-top: ${(props) => props.marginTop};
  position: relative;
  border-radius: 5px;

  @media (max-width: 375px) {
    margin-top: 100px;
    width: 100%;
  }
`;

// CARD ICON (div)
export const CardIcon = styled.div`
  position: absolute;
  top: -15%;
  left: 10%;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #3b3054 url(${(props) => props.backgroundImage}) no-repeat center;
  background-size: 50%;

  @media (max-width: 375px) {
    top: -10%;
    left: 52%;
    transform: translate(-50%, -15%);
  }
`;

// CARD HEADING (h3)
export const CardHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #232127;
  margin-bottom: 15px;

  @media (max-width: 375px) {
    text-align: center;
  }
`;

// CARD CONTENT (p)
export const CardContent = styled.p`
  font-size: 0.9rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: #9e9aa7;

  @media (max-width: 375px) {
    text-align: center;
  }
`;
