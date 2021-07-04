import styled from "styled-components";

// GLOBAL COMPONENTS
import { PrimaryButton } from "../../GlobalStyles";

// ASSEST
import ShortenBg from "../../assets/bg-shorten-desktop.svg";
import ShortenBgMobile from "../../assets/bg-shorten-mobile.svg";

// LOADER GIF
import Gear from "../../assets/Gear.gif";

// SHORTNER INPUT CONTAINER (div)
export const ShortnerInputContainer = styled.div`
  width: 100%;
  min-height: 150px;
  background: #3b3054 url(${ShortenBg}) no-repeat center;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: -75px;
  position: relative;

  @media (max-width: 375px) {
    height: 200px;
    flex-direction: column;
    background: #3b3054 url(${ShortenBgMobile}) no-repeat 100px -40px;
    background-size: contain;
  }
`;

// INPUT FIELD (input)
export const ShortnerInput = styled.input`
  width: 75%;
  height: 50px;
  background: white;
  padding: 0 10px;
  border: ${(props) => props.borderColor};
  border-radius: 5px;
  outline: none;

  &::placeholder {
    font-weight: 600;
    color: #9e9aa7;
  }

  @media (max-width: 375px) {
    width: 80%;
  }
`;

// SHOW WARNING
export const ShowWarning = styled.p`
  position: absolute;
  top: 100px;
  left: 50px;
  font-size: 15px;
  color: red;
  display: ${(props) => props.displayWarning};

  @media (max-width: 375px) {
    top: 85px;
    left: 40px;
  }
`;

export const ShortnerButton = styled(PrimaryButton)`
  @media (max-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
`;

// SHORTEN LIST CONTAINER (ul)
export const ShortenListContainer = styled.ul`
  margin: 40px 0;

  @media (max-width: 375px) {
    margin: 40px 0 120px;
  }
`;

// SHORTEN LIST ITEM (li)
export const ShortenItem = styled.li`
  width: 100%;
  background: white;
  padding: 15px 20px;
  margin: 20px 0;
  list-style: none;
  border: none;
  border-radius: 5px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 375px) {
    flex-direction: column;
    padding: 0px;
  }
`;

// SHORTEN LIST ITEM CONTAINER (div)
export const ShortenItemContainer = styled.div`
  width: 48%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 375px) {
    flex-direction: column;
    padding: 15px 0;
    width: 90%;
  }
`;

// SHORTEN ITEM LINK (h1)
export const ShortenItemLink = styled.h1`
  width: 100%;
  overflow: hidden;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.textColor};
  margin: ${(props) => props.margin};
`;

// LOADER
export const ShowLoader = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: url(${Gear}) no-repeat center;
  background-size: contain;
  align-self: center;
  transform: scale(1.1);
`;
