import React from "react";
import "./Header.css";
import CTA from "../CTA/CTA";
import ME from "../../assets/perfil.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Etornam Ocloo</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="an illustration of me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <HeaderSocials/>  
      </div>
    </header>
  );
};

export default Header;
