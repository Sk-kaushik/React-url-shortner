import styled from "styled-components";

// GLOBAL COMPONENT
import { PrimaryButton } from "../../GlobalStyles";

// NAVBAR CONTAINER (div)
export const NavContainer = styled.nav`
  height: 80px;
  margin: 0 auto;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 99;
  background: white;

  @media (max-width: 375px) {
    height: 80px;
  }
`;

// NAVBAR (div)
export const Nav = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;

  @media (max-width: 375px) {
    margin: auto;
    width: 100%;
    position: absolute;
    top: ${(props) => props.displayNav};
    height: ${(props) => props.height};
    flex-direction: column;
    background: #3b3054;
    padding: 20px 20px;
    border-radius: 10px;
    z-index: -9;
    transition: 0.3s ease;
  }
`;

// NAV BRAND NAME (a)
export const Brand = styled.a`
  font-size: 2.5em;
  text-decoration: none;
  font-weight: 700;
  color: #232127;

  @media (max-width: 375px) {
    margin-right: 10px;
  }
`;

// NAV ITEMS (li)
export const NavItems = styled.li`
  display: flex;
  text-decoration: none;
  list-style: none;

  @media (max-width: 375px) {
    flex-direction: column;
    text-align: center;
    padding-bottom: 15px;
  }
`;

// NAV LINK (a)
export const NavLink = styled.a`
  font-size: 16px;
  margin: 0 20px;
  padding: 5px;
  font-weight: bold;
  color: #9e9aa7;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    color: #232127;
  }

  @media (max-width: 375px) {
    color: white;
    padding: 15px 0;
    &:hover {
      color: #2acfcf;
    }
  }
`;

// NAV BUTTON CONTAINER

export const NavButtonContainer = styled.div`
  display: flex;

  @media (max-width: 375px) {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    padding: 20px 0;
    border-top: 1px solid #53496c;
  }
`;

// NAV BUTTON LOGIN (button)
export const NavButton = styled.button`
  width: 120px;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  background: none;
  color: #9e9aa7;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: #232127;
    transition: 0.3s;
  }

  @media (max-width: 375px) {
    color: white;
    &:hover {
      color: #2acfcf;
    }
  }
`;

// SIGN UP BUTTON
export const SignUp = styled(PrimaryButton)`
  width: 60%;
  @media (max-width: 375px) {
    width: 80%;
  }
`;

// BURGER MENU
export const Burger = styled.div`
  display: none;
  width: 50px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 375px) {
    display: flex;
    transform: ${(props) => props.rotateBurgerMenu};
    transition: 0.3s;

    &:hover {
      cursor: pointer;
    }
  }
`;

// BURGER LINE
export const BurgerLine = styled.div`
  display: none;
  height: 3px;
  width: 60%;
  background: #9e9aa7;
  @media (max-width: 375px) {
    display: flex;
  }
`;
