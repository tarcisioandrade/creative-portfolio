import React from "react";
import "./AboutMe.css";
import PhotoDev from "../../Assets/img/about-me-img.png";
import Development from "../../Assets/img/development.svg";
import Illustrating from "../../Assets/img/illustrating.svg";
import Photography from "../../Assets/img/photography.svg";
import Research from "../../Assets/img/research.svg";

const AboutMe = () => {
  return (
    <section className="section-padding aboutme">
      <h2 className="title-medium">About Me</h2>
      <div className="aboutme__container">
        <div className="aboutme__photo">
          <img src={PhotoDev} alt="PhotoDev" />
        </div>

        <div className="aboutme__content">
          <p className="text-medium aboutme__text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>

          <div className="aboutme__skills">
            <p className="aboutme__subtitle">Other Skills</p>
            <div className="aboutme__icons">
              <span className="aboutme__i">
                <img src={Development} alt="dev" />
                <p className="text-medium16">Development</p>
              </span>

              <span className="aboutme__i">
                <img src={Photography} alt="dev" />
                <p className="text-medium16">Photography</p>
              </span>

              <span className="aboutme__i">
                <img src={Illustrating} alt="dev" />
                <p className="text-medium16">Illustrating</p>
              </span>

              <span className="aboutme__i">
                <img src={Research} alt="dev" />
                <p className="text-medium16">User Research</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
