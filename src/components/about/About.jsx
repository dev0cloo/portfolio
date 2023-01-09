import { Talk } from "../CTA/CTA";
import "./About.css";
import ABOUT from "../../assets/about.jpg";
import { RiMedalLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ABOUT} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <a className="about_link" href="#experience">
              <article className="about__card">
                <RiMedalLine className="about_card_icon" />
                <h3>Experience</h3>
                <small>2+ Years Working</small>
              </article>
            </a>
            <a className="about_link" href="#testimonials">
              <article className="about__card">
                <BsPeople className="about_card_icon" />
                <h3>Clients</h3>
                <small>50+ Worldwide</small>
              </article>
            </a>
            <a className="about_link" href="#portfolio">
              <article className="about__card">
                <VscFolderLibrary className="about_card_icon" />
                <h3>Projects</h3>
                <small>20+ Completed</small>
              </article>
            </a>
          </div>
          <div>
            <p className="about__me">
              Hi there! I'm full stack developer with a love for all things tech
              and a passion for creating innovative web solutions. With a strong
              foundation in front-end and back-end technologies and experience
              working with smart contracts on Ethereum and Solidity projects,
              I'm always eager to push the boundaries of what's possible.
            </p>
          </div>
          <Talk/>
        </div>
      </div>
    </section>
  );
};

export default About;
