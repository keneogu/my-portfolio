import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import HeaderSubsection from "./HeaderSubsection";

const Header = () => {
  return (
    <div className="h-[98vh] md:h-screen overflow-hidden relative flex bg-light-bg dark:bg-dark-bg bg-cover bg-no-repeat bg-center">
      <Container>
        <Navbar />
        <div className="absolute bottom-12 md:bottom-36 left-0">
          <HeaderSubsection />
        </div>
      </Container>
    </div>
  );
};

export default Header;
