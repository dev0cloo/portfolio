import React from "react";
import "./Header.css";
import { Talk } from "../CTA/CTA";
import CTA from '../CTA/CTA';
import ME from "../../assets/perfil.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Etornam Ocloo</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <div className="cta">
          <CTA />
          <Talk />
        </div>

        <div className="me">
          <img src={ME} alt="an illustration of me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
