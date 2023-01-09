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

        <div className="about_container_main">
          <div className="about__image">
            <img src={ABOUT} alt="me" />
          </div>
          <div className="about__content">
            <div className="card">
              <div className="about__card">
                <a className="about_link" href="#experience">
                  <RiMedalLine />
                  <h3>Experience</h3>
                  <h5>2+ Years Working</h5>
                </a>
              </div>
              <div className="about__card">
                <a className="about_link" href="#testimonials">
                  <BsPeople />
                  <h3>Clients</h3>
                  <h5>50+ Worldwide</h5>
                </a>
              </div>
              <div className="about__card">
                <a className="about_link" href="#portfolio">
                  <VscFolderLibrary />
                  <h3>Projects</h3>
                  <h5>8+ Completed</h5>
                </a>
              </div>
            </div>
            <div>
              <p className="about__me">
                Hi there! I'm full stack developer with a love for all things
                tech and a passion for creating innovative web solutions. With a
                strong foundation in front-end and back-end technologies and
                experience working with smart contracts on Ethereum and Solidity
                projects, I'm always eager to push the boundaries of what's
                possible.about
              </p>
            </div>
            <Talk />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
