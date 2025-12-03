import React, { useState } from "react";
import { bigProjects } from "../../../../shared/data/portfolio";
import "./Portfolio.css";

const Portfolio = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"];

  // Use actual projects or sample data
  const sampleProjects = [
    {
      title: "Lirante - Food Delivery Solution",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      category: "Product Design",
      image: null
    }
  ];

  const projects = bigProjects.display && bigProjects.projects.length > 0
    ? bigProjects.projects
    : sampleProjects;

  return (
    <section className="v2-portfolio section" id="project">
      <div className="container">
        <div className="v2-portfolio-header">
          <h2 className="v2-section-title">
            Lets have a look at my <span className="text-orange">Portfolio</span>
          </h2>
          <a href="/projects" className="btn btn-primary">See All</a>
        </div>

        {/* Portfolio Carousel Preview */}
        <div className="v2-portfolio-carousel">
          <div className="v2-portfolio-cards">
            {/* Placeholder cards */}
            <div className="v2-portfolio-card"></div>
            <div className="v2-portfolio-card"></div>
          </div>

          <div className="v2-carousel-dots">
            <span className="v2-dot active"></span>
            <span className="v2-dot"></span>
            <span className="v2-dot"></span>
            <span className="v2-dot"></span>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="v2-portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`v2-filter-tag ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Featured Project */}
        <div className="v2-featured-project">
          <h3 className="v2-project-title">
            {projects[0].projectName || projects[0].title}
            <button className="v2-project-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </h3>
          <p className="v2-project-description">
            {projects[0].projectDesc || projects[0].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
