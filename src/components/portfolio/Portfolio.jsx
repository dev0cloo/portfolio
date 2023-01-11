import React from "react";
import "./Portfolio.css";
import { Github, Demo } from "../CTA/CTA";
import IMG1 from "../../assets/work1.jpg";
import IMG2 from "../../assets/work2.jpg";
import IMG3 from "../../assets/work3.jpg";
import IMG4 from "../../assets/work4.jpg";
import IMG5 from "../../assets/work5.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="work1" />
          </div>
          <h3 className="portfolio__item-title"></h3>
          <p className="portfolio__item-details"></p>
          <div className="portfolio__item-cta">
            <Github />
            <Demo />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="work1" />
          </div>
          <h3 className="portfolio__item-title"></h3>
          <p className="portfolio__item-details"></p>
          <div className="portfolio__item-cta">
            <Github />
            <Demo />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="work1" />
          </div>
          <h3 className="portfolio__item-title"></h3>
          <p className="portfolio__item-details"></p>
          <div className="portfolio__item-cta">
            <Github />
            <Demo />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="work1" />
          </div>
          <h3 className="portfolio__item-title"></h3>
          <p className="portfolio__item-details"></p>
          <div className="portfolio__item-cta">
            <Github />
            <Demo />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="work1" />
          </div>
          <h3 className="portfolio__item-title"></h3>
          <p className="portfolio__item-details"></p>
          <div className="portfolio__item-cta">
            <Github />
            <Demo />
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="work1" />
          </div>
          <h3 className="portfolio__item-title"></h3>
          <p className="portfolio__item-details"></p>
          <div className="portfolio__item-cta">
            <Github />
            <Demo />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
