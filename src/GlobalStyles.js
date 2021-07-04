import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0px;
    padding:0px;
    box-sizing:border-box;
    font-family: "Poppins",sans-serif;
}
body{
    overflow-x: hidden;
    background:#EFF1F7;
    @media (max-width: 375px){
      font-size:12px;
    }
}
`;

// CONTAINER FLUID
export const ContainerFluid = styled.div`
  padding-bottom: ${(props) => props.paddingBottom};
  margin: 0 auto;
  background: ${(props) => props.backgroundColor};

  @media (max-width: 375px) {
    width: 100%;
    padding-bottom: ${(props) => props.responsivePaddingBottom};
  }
`;

// CONTAINER
export const Container = styled(ContainerFluid)`
  width: 80%;

  @media (max-width: 375px) {
    width: 90%;
  }
`;

// HEADING (h1)
export const Heading = styled.h1`
  width: ${(props) => props.width};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2.5rem")};
  font-weight: 700;
  text-align: ${(props) => (props.fontSize ? props.textAlign : "center")};
  color: ${(props) => (props.color ? props.color : " #232127")};
  padding: ${(props) => props.padding};
  @media (max-width: 375px) {
    width: 100%;
    font-size: 1.6rem;
  }
`;

// PRIMARY BUTTON
export const PrimaryButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#2acfcf"};
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: ${(props) => (props.padding ? props.padding : "10px 20px")};
  margin-top: ${(props) => props.marginTop};
  border-radius: ${(props) => props.borderRadius};
  border: none;

  &:hover {
    cursor: pointer;
    background: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "#9be3e2"};
  }

  @media (max-width: 375px) {
    width: ${(props) => (props.width ? props.width : "100%")};
    margin-top: ${(props) => props.mobileMarginTop};
    align-self: ${(props) => props.alignSelf};
  }
`;

export default GlobalStyle;
