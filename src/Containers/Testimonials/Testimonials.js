import React from "react";
import "./Testimonials.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Josh from "../../Assets/img/josh.png";
import Mike from "../../Assets/img/mike.png";

const Testimonials = () => {
  const [size, setSize] = React.useState(null);

  React.useEffect(() => {
    function hideToSize() {
      const { matches } = window.matchMedia("(max-width: 1180px");
      setSize(matches);
    }
    hideToSize();
    window.addEventListener("resize", hideToSize);
    return () => {
      window.removeEventListener("resize", hideToSize);
    };
  }, []);

  return (
    <section className="section-padding testimonials">
      <h2 className="title-medium">Testimonials</h2>

      {!size ? (
        <Splide
          options={{
            type: "loop",
            rewind: true,
            width: "100%",
            height: "14.5rem",
            padding: "5.5rem",
            lazyLoad: "sequential",
            mediaQuery: "max",
          }}
        >
          <SplideSlide>
            <div className="testimonials__slide">
              <span className="testimonials__profile">
                <img src={Josh} alt="Josh" className="testimonials__img" />
                <p className="testimonials__name">Josh Brollins</p>
                <p className="testimonials__url">mywebsite.com</p>
              </span>
              <p className="text-medium16 testimonials__text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="testimonials__slide">
              <span className="testimonials__profile">
                <img src={Mike} alt="Mike" className="testimonials__img" />
                <p className="testimonials__name">Mike Pense</p>
                <p className="testimonials__url">thiswebsite.com</p>
              </span>
              <p className="text-medium16 testimonials__text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita
              </p>
            </div>
          </SplideSlide>
        </Splide>
      ) : (
        <div className="testimonials__container">
          <div className="testimonials__slide">
            <span className="testimonials__profile">
              <img src={Josh} alt="Josh" className="testimonials__img" />
              <p className="testimonials__name">Josh Brollins</p>
              <p className="testimonials__url">mywebsite.com</p>
            </span>
            <p className="text-medium16 testimonials__text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita
            </p>
          </div>

          <div className="testimonials__slide">
            <span className="testimonials__profile">
              <img src={Mike} alt="Mike" className="testimonials__img" />
              <p className="testimonials__name">Mike Pense</p>
              <p className="testimonials__url">thiswebsite.com</p>
            </span>
            <p className="text-medium16 testimonials__text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
