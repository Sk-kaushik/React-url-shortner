import React, { useState } from "react";

// GLOBAL COMPONENTS
import { PrimaryButton } from "../../GlobalStyles";

// COMPONENTS
import {
  ShortenItem,
  ShortenItemContainer,
  ShortenItemLink,
} from "./Shortner.styled";

const ShortenItems = ({ data }) => {
  const [copyLink, setCopyLink] = useState(false);

  // HANDLE COPY BUTTON CLICK
  const HandleCopyLink = (e) => {
    setCopyLink(!copyLink);

    let text = data.shortenLink;

    // COPY TEXT TO CLIPBOARD
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("copied");
      },
      function (err) {
        console.log("error");
      }
    );
  };

  return (
    <ShortenItem>
      {/*---------------RAW LINK---------------- */}
      <ShortenItemContainer>
        <ShortenItemLink color={"#232127"}>{data.rawLink}</ShortenItemLink>
      </ShortenItemContainer>

      {/*------------- SHORTENED LINK-------- */}
      <ShortenItemContainer>
        <ShortenItemLink textColor={"#2acfcf"}>
          {data.shortenLink}
        </ShortenItemLink>

        {/* ------------------COPY LINK BUTTON----------------- */}
        {!copyLink ? (
          <PrimaryButton
            borderRadius={"5px"}
            onClick={HandleCopyLink}
            mobileMarginTop={"10px"}
          >
            Copy
          </PrimaryButton>
        ) : (
          <PrimaryButton
            borderRadius={"5px"}
            backgroundColor={"#3b3054"}
            mobileMarginTop={"10px"}
          >
            Copied!
          </PrimaryButton>
        )}
      </ShortenItemContainer>
    </ShortenItem>
  );
};

export default ShortenItems;
