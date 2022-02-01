import React from "react";
import "./Business.css";
import Airbnb from "../../Assets/img/airbnb.svg";
import Amazon from "../../Assets/img/amazon.svg";
import Stripe from "../../Assets/img/stripe.svg";
import Microsoft from "../../Assets/img/microsoft.svg";

const Business = () => {
  return (
    <section className="section-padding business">
      <p className="business__title">
        Over <strong>120+</strong> Business growing me.
      </p>
      <div className="business__content">
        <img src={Airbnb} alt="airbnb" />
        <img src={Amazon} alt="airbnb" />
        <img src={Stripe} alt="airbnb" />
        <img src={Microsoft} alt="airbnb" />
      </div>
    </section>
  );
};

export default Business;
