import React from 'react'
import {FiLinkedin, FiTwitter, FiGithub} from "react-icons/fi"


const HeaderSocials = () => {
  return (
    <div className="header__socials">
    <a href="https://linkendin.com" target="_blank" rel="noreferrer">
      <FiLinkedin/>
    </a>
    <a href="https://github.com" target="_blank" rel="noreferrer">
      <FiGithub/>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer">
      <FiTwitter/>
    </a>
  </div>
  )
}

export default HeaderSocials