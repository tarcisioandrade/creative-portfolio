import React from "react";
import Button from "../../Components/Button/Button";
import Homem from "../../Assets/img/homem.png";
import Pontilhados from "../../Assets/img/pontilhados.png";
import Tracos from "../../Assets/img/tracos.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="mainHeader section-padding">
      <div className="mainHeader__boxlogo">
        <p className="mainHeader__logo">
          <strong>Adin</strong> MC'Call
        </p>
        <a href="." className="mainHeader__start text-small">
          Start a Project
        </a>
      </div>

      <div className="headercontent">
        <div className="headercontent__texts">
          <h1 className="title-big">
            Hello, I am Adin<br></br>A Product Designer
          </h1>
          <p className="text-medium headercontent__text--p">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet
          </p>
          <Button>Message Me</Button>
        </div>

        <div className="headercontent__img">
          <img
            src={Homem}
            alt="Developer"
            className="headercontent__img--dev"
          />
          <img
            src={Pontilhados}
            alt="pontilhados"
            className="headercontent__img--pontilhado"
          />
        </div>

        <div className="headercontent__data">
          <ul className="headercontent__ul">
            <li className="title-small headercontent__li">
              120
              <p className="text-medium16">Satisfied Clients</p>
            </li>
            <li className="title-small headercontent__li">
              285
              <p className="text-medium16">Projects Completed</p>
            </li>
            <li className="title-small headercontent__li">
              10
              <p className="text-medium16">Years of Experience</p>
            </li>
            <li className="title-small headercontent__li">
              4300+
              <p className="text-medium16">Hours of Work</p>
            </li>
          </ul>
        </div>

        <img src={Tracos} alt="tracos" className="maincontent__tracos" />
      </div>
    </header>
  );
};

export default Header;
