import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import HeaderSubsection from "./HeaderSubsection";

const Header = () => {
  return (
    <div className="h-[90vh] md:h-screen overflow-hidden relative flex bg-light-bg dark:bg-dark-bg bg-cover bg-no-repeat bg-center">
      <Container>
        <Navbar />
        <div className="absolute bottom-28 left-0">
          <HeaderSubsection />
        </div>
      </Container>
    </div>
  );
};

export default Header;
