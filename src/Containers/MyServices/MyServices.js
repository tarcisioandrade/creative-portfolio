import React from "react";
import "./MyServices.css";
import Trophy from "../../Assets/img/trophy.svg";
import Tv from "../../Assets/img/tv.svg";
import Cube from "../../Assets/img/cube.svg";
import Video from "../../Assets/img/video.svg";

const MyServices = () => {
  return (
    <section className="myservices--background">
      <div className="section-padding myservices">
        <div className="myservices__data">
          <div>
            <h2 className="title-medium myservices__title">
              My<br></br> Services
            </h2>
            <p className="text-medium myservices__text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore
            </p>
          </div>
          <ul className="myservices_ul">
            <li className="title-small myservices__li">
              120
              <p className="text-medium16">Satisfied Clients</p>
            </li>
            <li className="title-small myservices__li">
              285
              <p className="text-medium16">Projects Completed</p>
            </li>
          </ul>
        </div>

        <div className="myservices__table">
          <div className="myservices__item">
            <img src={Trophy} alt="trophy" />
            <p className="myservices__subtitle">Brand Consultant</p>
            <p className="text-small myservices__table-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>

          <div className="myservices__item">
            <img src={Tv} alt="tv" />
            <p className="myservices__subtitle">UI/UX Solutions</p>
            <p className="text-small myservices__table-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>

          <div className="myservices__item">
            <img src={Cube} alt="cube" />
            <p className="myservices__subtitle">Packaging Design</p>
            <p className="text-small myservices__table-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>

          <div className="myservices__item">
            <img src={Video} alt="video" />
            <p className="myservices__subtitle">Motion Video or TVC</p>
            <p className="text-small myservices__table-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
