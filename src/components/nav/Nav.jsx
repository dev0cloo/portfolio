import React from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { GrContact, GrProjects } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";

const Nav = () => {
  return (
    <nav>
      <ul>
        <a href="#home">
          <AiOutlineHome />
        </a>
        <a href="#about">
          <IoSchoolOutline />
        </a>
        <a href="">
          <AiOutlineProject />
        </a>
        <a href="#portfolio">
          <GrProjects />
        </a>
        <a href="#contact">
          <GrContact />
        </a>
        <a href="#"><FiSettings/></a>
      </ul>
    </nav>
  );
};

export default Nav;
