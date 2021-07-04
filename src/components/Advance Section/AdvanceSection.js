import React from "react";

// GLOBAL COMPONENTS
import {
  ContainerFluid,
  Container,
  Heading,
  PrimaryButton,
} from "../../GlobalStyles";

// COMPONENTS
import {
  AdvanceSectionContainer,
  AdvanceSectionSubHeading,
  BoostYourLink,
} from "./Advance.styled";

import {
  AdvanceSectionCardsContainer,
  CardContainer,
  CardIcon,
  CardHeading,
  CardContent,
} from "./Advance.card.styled";

// ASSETS
import IconBrandRecognition from "../../assets/icon-brand-recognition.svg";
import IconDetailedRecords from "../../assets/icon-detailed-records.svg";
import IconFullyCustomizable from "../../assets/icon-fully-customizable.svg";

const AdvanceSection = () => {
  return (
    <ContainerFluid>
      <Container>
        {/* ------ADVANCE SECTION HEADING CONTAINER---------- */}
        <AdvanceSectionContainer>
          <Heading width={"100%"}>Advanced Statistics</Heading>
          <AdvanceSectionSubHeading>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </AdvanceSectionSubHeading>

          {/* --------ADVANCE SECTION CARDS CONTAINER ----------- */}

          <AdvanceSectionCardsContainer>
            {/*---------CARD--------- */}
            <CardContainer marginTop={"0px"}>
              <CardIcon backgroundImage={IconBrandRecognition} />
              <CardHeading>Brand Recognition</CardHeading>
              <CardContent>
                Boot your brand recognition with each click. Generic links don't
                mean a thing. Branded links help instil confidence in your
                content
              </CardContent>
            </CardContainer>

            {/*---------CARD--------- */}
            <CardContainer marginTop={"90px"}>
              <CardIcon backgroundImage={IconDetailedRecords} />
              <CardHeading>Detailed Record</CardHeading>
              <CardContent>
                Gain insight to who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </CardContent>
            </CardContainer>

            {/*---------CARD--------- */}
            <CardContainer marginTop={"180px"}>
              <CardIcon backgroundImage={IconFullyCustomizable} />
              <CardHeading>Fully Customizable</CardHeading>
              <CardContent>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagment.
              </CardContent>
            </CardContainer>
          </AdvanceSectionCardsContainer>
        </AdvanceSectionContainer>
      </Container>

      {/* -------------BOOST YOUR LINK SECTION---------- */}
      <BoostYourLink>
        <Heading color={"white"}>Boost your links today</Heading>
        <PrimaryButton
          width={"200px"}
          borderRadius={"20px"}
          marginTop={"30px"}
          padding={"10px 30px"}
        >
          Get Started
        </PrimaryButton>
      </BoostYourLink>
    </ContainerFluid>
  );
};

export default AdvanceSection;
