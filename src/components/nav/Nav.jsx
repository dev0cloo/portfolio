import React from "react";
import "./Nav.css";
import { AiOutlineProject } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { RiContactsLine, RiStackLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import {BiMessage} from 'react-icons/bi'
import { useState } from "react";




const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      
        <a  onClick={() => setActiveNav('#home')}  className= {activeNav === '#home' ? 'active' : ''} href="#home">
          <RiContactsLine />
        </a>
        <a onClick={() => setActiveNav('#experience')}   className= {activeNav === '#experience' ? 'active' : ''} href="#experience">
          <IoSchoolOutline />
        </a>
        <a onClick={() => setActiveNav('#portfolio')}  className= {activeNav === '#portfolio' ? 'active' : ''}  href="#portfolio">
          <RiStackLine />
        </a>
        <a onClick={() => setActiveNav('#services')}  className= {activeNav === '#services' ? 'active' : ''} services href="#services">
          <AiOutlineProject />  
        </a>
        <a onClick={() => setActiveNav('#contact')}  className= {activeNav === '#contact' ? 'active' : ''}  href="#contact">
        <BiMessage />
        </a>
        <a onClick={() => setActiveNav('#')}  className= {activeNav === '#' ? 'active' : ''}  href="#"><FiSettings/></a>
      
    </nav>
  );
};

export default Nav;
