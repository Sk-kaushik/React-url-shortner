import React, { useState } from "react";

// UUID
import uuid from "react-uuid";

// GLOBAL COMPONENTS
import { Container } from "../../GlobalStyles";

// COMPONENTS
import {
  ShortnerInputContainer,
  ShortnerInput,
  ShortenListContainer,
  ShortnerButton,
  ShowLoader,
  ShowWarning,
} from "./Shortner.styled";

import ShortenItems from "./ShortenItem";

const LinkShortnerSection = () => {
  const [links, setLinks] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [isEmptyInput, setIsEmptyInput] = useState(false);

  // SHORTEN LINK BUTTON
  const shortenLink = (e) => {
    var input = document.querySelector("#linkInput").value;

    if (input !== "") {
      setIsEmptyInput(false);

      setShowLoader(true);

      fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
        .then((res) => res.json())
        .then((res) => handleLinkState(res.result.full_short_link, input))
        .catch((err) => {
          setShowLoader(false);

          console.log(err);
        });
    } else {
      setIsEmptyInput(true);
    }
  };

  // SET LINK IN STATE AND DISABLE LOADER
  const handleLinkState = (shortenLink, rawLink) => {
    setShowLoader(false);

    setLinks((prev) => [
      ...prev,
      {
        shortenLink,
        rawLink,
      },
    ]);
  };

  return (
    <>
      <Container>
        {/* ----------SHORTEN INPUT CONTAINER-------------- */}
        <ShortnerInputContainer>
          <ShortnerInput
            placeholder="Shorten the link here"
            id="linkInput"
            borderColor={isEmptyInput ? "2px solid red" : "none"}
          />

          {/* ----------------EMPTY INPUT WARNING------------------- */}
          <ShowWarning displayWarning={isEmptyInput ? "block" : "none"}>
            Please enter a link
          </ShowWarning>

          <ShortnerButton
            width={"150px"}
            height={"50px"}
            borderRadius={"5px"}
            mobileMarginTop={"0"}
            onClick={shortenLink}
          >
            {!showLoader ? <span>Shorten it!</span> : <ShowLoader />}
          </ShortnerButton>
        </ShortnerInputContainer>

        {/*----------------SHORTENED LINKS LIST----------------- */}
        <ShortenListContainer>
          {links.length > 0 &&
            links.map((link) => (
              <ShortenItems data={link} key={uuid()}></ShortenItems>
            ))}
        </ShortenListContainer>
      </Container>
    </>
  );
};

export default LinkShortnerSection;
