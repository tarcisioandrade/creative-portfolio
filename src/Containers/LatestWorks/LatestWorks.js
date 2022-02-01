import React from "react";
import Button from "../../Components/Button/Button";
import Digart from "../../Assets/img/digart.png";
import Jiwaraga from "../../Assets/img/jiwaraga.png";
import Tekfin from "../../Assets/img/tekfin.png";
import Investimentapp from "../../Assets/img/investimentapp.png";
import "./LatestWorks.css";

const LatestWorks = () => {
  return (
    <section className="section-padding latestworks">
      <div className="latestworks__content">
        <h2 className="title-medium">Latest Works</h2>
        <p className="text-medium latestworks__text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore
        </p>
        <Button>Message Me</Button>
      </div>

      <div className="latestworks__gallery">
        <div className="latestworks__item">
          <div className="latestworks__header">
            <h3 className="latestworks__subtitle">Digart - NFT</h3>
            <p className="text-medium16">Web Design</p>
          </div>
          <div className="latestworks__img latestworks__img--digart">
            <img src={Digart} alt="" />
          </div>
        </div>

        <div className="latestworks__item">
          <div className="latestworks__header">
            <h3 className="latestworks__subtitle">Jiwa Raga</h3>
            <p className="text-medium16">Web Design</p>
          </div>
          <div className="latestworks__img latestworks__img--jiwaraga">
            <img src={Jiwaraga} alt="" />
          </div>
        </div>

        <div className="latestworks__item">
          <div className="latestworks__header">
            <h3 className="latestworks__subtitle">Tekfin</h3>
            <p className="text-medium16">Dashboard Design</p>
          </div>
          <div className="latestworks__img latestworks__img--tekfin">
            <img src={Tekfin} alt="" />
          </div>
        </div>

        <div className="latestworks__item">
          <div className="latestworks__header">
            <h3 className="latestworks__subtitle">Investiment App</h3>
            <p className="text-medium16">App Design</p>
          </div>
          <div className="latestworks__img latestworks__img--investimentapp">
            <img src={Investimentapp} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;
