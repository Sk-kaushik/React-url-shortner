import React, { useState } from "react";

// COMPONENTS
import {
  Nav,
  NavContainer,
  Brand,
  NavItems,
  NavLink,
  NavButton,
  NavButtonContainer,
  SignUp,
  Burger,
  BurgerLine,
} from "./Navbar.styled";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  // BURGER MENU CLICK
  const handleBurgerClick = (e) => {
    setShowNav(!showNav);
  };

  return (
    <NavContainer>
      <Brand href="#">Shortly</Brand>
      <Nav
        displayNav={showNav ? "150%" : "-1000%"}
        height={showNav ? "350px" : "0%"}
      >
        <NavItems>
          <NavLink>Features</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Resources</NavLink>
        </NavItems>
        <NavButtonContainer>
          <NavButton>Login</NavButton>
          <SignUp borderRadius={"20px"} padding={"10px 30px"}>
            Sign Up
          </SignUp>
        </NavButtonContainer>
      </Nav>

      {/* -----------------BURGER--------------------- */}
      <Burger id="burger" onClick={handleBurgerClick}>
        <BurgerLine></BurgerLine>
        <BurgerLine></BurgerLine>
        <BurgerLine></BurgerLine>
      </Burger>
    </NavContainer>
  );
};

export default Navbar;
