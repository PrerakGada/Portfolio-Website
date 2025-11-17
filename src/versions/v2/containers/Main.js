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

/**
 * Version 2 - Portfolio Design
 *
 * A modern, pixel-perfect implementation based on Figma design
 * specifications and screenshots.
 */

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white scroll-smooth">
      <Header />
      <main className="flex-1">
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
