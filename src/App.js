import React from "react";

// STYLES
import GlobalStyle from "./GlobalStyles";

// COMPONENTS
import Header from "./components/Header/Header";
import Shortner from "./components/Link Shortner/LinkShortner";
import AdvanceSection from "./components/Advance Section/AdvanceSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Shortner />
      <AdvanceSection />
      <Footer />
    </>
  );
};

export default App;
