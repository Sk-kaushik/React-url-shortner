import React from "react";

// GLOBAL COMPONENTS
import { ContainerFluid, Container, PrimaryButton } from "../../GlobalStyles";

// COMPONENTS
import Navbar from "../Navbar/Navbar";
import {
  HeaderContainer,
  HeaderContent,
  Heading,
  SubHeading,
  HeaderImg,
} from "./Header.styled";

const Header = () => {
  return (
    <ContainerFluid
      backgroundColor={"#fff"}
      paddingBottom={"100px"}
      responsivePaddingBottom={"150px"}
    >
      <Container>
        {/* ---------NAVBAR----------- */}
        <Navbar />

        {/*------------ HEADER CONTAINER-------- */}
        <HeaderContainer>
          <HeaderContent>
            <Heading>More than just shorter links</Heading>
            <SubHeading>
              Build your own brand's recognition and get detailed insights on
              how your links are performing
            </SubHeading>
            <PrimaryButton
              width={"200px"}
              borderRadius={"20px"}
              marginTop={"40px"}
              padding={"10px 30px"}
              alignSelf={"center"}
            >
              Get Started
            </PrimaryButton>
          </HeaderContent>

          {/* ----------------HEADER IMAGE---------------------- */}
          <HeaderImg />
        </HeaderContainer>
      </Container>
    </ContainerFluid>
  );
};

export default Header;
