import styled from "styled-components";

// FOOTER CONTAINER
export const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

// FOOTER COLUMN CONTAINER
export const FooterColumnsContainer = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 40px 0;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  }
`;

// FOOTER COLUMN
export const FooterColumn = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 40px;
  }
`;

// FOOTER ICONS CONTAINER
export const FooterSocailIconsContainer = styled.div`
  display: flex;
`;

// FOOTER ICONS
export const FooterSocailIcon = styled.svg`
  width: 30px;
  fill: #fff;
  margin: 0 10px;
  &:hover {
    fill: #2acfcf;
    cursor: pointer;
  }
`;

// FOOTER BRAND HEADING
export const FooterHeading = styled.h3`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};
  color: white;
  margin-bottom: 20px;
  @media (max-width: 375px) {
    margin-bottom: 15px;
  }
`;

// FOOTER LINKS
export const FooterLinks = styled.a`
  color: #bfbfbf;
  font-weight: 600;
  margin: 5px 0;
  transition: 0.3s;

  &:hover {
    color: #2acfcf;
    cursor: pointer;
  }
  @media (max-width: 375px) {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;
