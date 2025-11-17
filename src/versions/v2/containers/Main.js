import React from "react";
import Header from "../components/Header/Header";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import WorkExperience from "./WorkExperience/WorkExperience";
import WhyHireMe from "./WhyHireMe/WhyHireMe";
import Portfolio from "./Portfolio/Portfolio";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog";
import Footer from "../components/Footer/Footer";
import "../styles/global.scss";
import "./Main.scss";

/**
 * Version 2 - Portfolio Design
 *
 * A modern, pixel-perfect implementation based on Figma design
 * specifications and screenshots.
 */

const Main = () => {
  return (
    <div className="v2-app">
      <Header />
      <main className="v2-main">
        <Hero />
        <Services />
        <WorkExperience />
        <WhyHireMe />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
