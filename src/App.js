import React from "react";
import "./App.css";
import AboutMe from "./Containers/AboutMe/AboutMe";
import Business from "./Containers/Business/Business";
import Contact from "./Containers/Contact/Contact";
import Header from "./Containers/Header/Header";
import LatestWorks from "./Containers/LatestWorks/LatestWorks";
import MyAproach from "./Containers/MyAproach/MyAproach";
import MyServices from "./Containers/MyServices/MyServices";
import Testimonials from "./Containers/Testimonials/Testimonials";

function App() {
  return (
    <main className="App container">
      <Header />
      <Business />
      <MyServices />
      <LatestWorks />
      <MyAproach />
      <AboutMe />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
