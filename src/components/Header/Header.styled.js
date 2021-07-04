import styled from "styled-components";

// ASSETS
import HeaderIllustration from "../../assets/illustration-working.svg";

// HEADER CONTAINER (div)
export const HeaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 375px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

// HEADER CONTENT CONTAINER (div)
export const HeaderContent = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start !important;
  float: left;
  margin: 0 auto;
  position: relative;
  @media (max-width: 375px) {
    justify-content: center;
    min-height: 0vh;
    align-items: center;
    align-self: center;
  }
`;

// HEADER HEADING (h1)
export const Heading = styled.h1`
  width: 60%;
  font-size: 5rem;
  line-height: 5.5rem;
  font-weight: 700;
  letter-spacing: -2px;
  color: #232127;

  @media (max-width: 375px) {
    width: 100%;
    font-size: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
  }
`;

// HEADER SubHeading (P)
export const SubHeading = styled.p`
  width: 50%;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  font-weight: 600;
  color: #9e9aa7;
  @media (max-width: 375px) {
    width: 100%;
    font-size: 1rem;
    margin-top: 20px;
    text-align: center;
  }
`;

// HEADER ILLUSTRATION (div)
export const HeaderImg = styled.div`
  width: 50%;
  height: 400px;
  background: url(${HeaderIllustration}) no-repeat center;
  background-size: contain;
  position: absolute;
  right: -100px;

  @media (max-width: 375px) {
    right: -60px;
    width: 140%;
    position: relative;
  }
`;
