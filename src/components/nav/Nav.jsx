import React from "react";
import "./Nav.css";
import { AiOutlineProject } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { RiContactsLine, RiStackLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import {BiMessage} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      
        <a href="#home">
          <RiContactsLine />
        </a>
        <a href="#experience">
          <IoSchoolOutline />
        </a>
        <a href="#portfolio">
          <RiStackLine />
        </a>
        <a href="#services">
          <AiOutlineProject />  
        </a>
        <a href="#contact">
        <BiMessage />
        </a>
        <a href="#"><FiSettings/></a>
      
    </nav>
  );
};

export default Nav;
