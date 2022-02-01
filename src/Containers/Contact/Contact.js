import React from "react";
import Button from "../../Components/Button/Button";
import "./Contact.css"
import Facebook from "../../Assets/img/facebook.svg"
import Instagram from "../../Assets/img/instagram.svg"
import Twitter from "../../Assets/img/twitter.svg"
import Network from "../../Assets/img/network.svg"

const Contact = () => {
  return <section className="section-padding contact">
    <div className="contact__interest">
      <h2 className="title-medium contact__title">Interested in Working with me?</h2>
      <Button>Message Me</Button>
    </div>
    <div className="contact__sociais">
      <p className="contact__subtitle">Let's get social</p>
      <span className="contact__icons">
      <a href="."><img src={Facebook} alt="Facebook" /></a>
      <a href="."><img src={Instagram} alt="Instagram" /></a>
      <a href="."><img src={Twitter} alt="Twitter" /></a>
      <a href="."><img src={Network} alt="Network" /></a>
      </span>
      <p className="text-medium16 contact__copy">© 2021 Octet Design Studio.</p>
    </div>
  </section>;
};

export default Contact;
