import React from "react";
import "./Button.css";
import arrow from "../../Assets/img/arrow-icon.png";

const Button = (props) => {
  return (
    <button className="btncomp">
      <p>{props.children}</p>
      <span className="btncomp__arrow">
        <img src={arrow} alt="arrow" />
      </span>
    </button>
  );
};

export default Button;
