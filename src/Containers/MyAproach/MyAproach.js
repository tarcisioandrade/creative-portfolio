import React from "react";
import "./MyAproach.css";

const MyAproach = () => {
  return (
    <section className="section-padding myaproach">
      <h1 className="title-medium">My Aproach</h1>
      <div className="myaproach__cards">
        <div className="myaproach__item">
          <p className="text-medium">One</p>
          <h3 className="myaproach__subtitle">Research</h3>
          <p className="text-medium myaproach__text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et
          </p>
        </div>

        <div className="myaproach__item">
          <p className="text-medium">Two</p>
          <h3 className="myaproach__subtitle">Concept</h3>
          <p className="text-medium myaproach__text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et
          </p>
        </div>

        <div className="myaproach__item">
          <p className="text-medium">Three</p>
          <h3 className="myaproach__subtitle">Development</h3>
          <p className="text-medium myaproach__text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyAproach;
