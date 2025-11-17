import React, { useState } from "react";
import { bigProjects } from "../../../../shared/data/portfolio";

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
    <section className="bg-white section" id="project">
      <div className="container">
        <div className="flex justify-between items-center mb-2xl max-md:flex-col max-md:gap-md max-md:mb-xl">
          <h2 className="v2-section-title">
            Lets have a look at my <span className="text-orange">Portfolio</span>
          </h2>
          <a href="/projects" className="btn btn-primary">See All</a>
        </div>

        {/* Portfolio Carousel Preview */}
        <div className="mb-xl text-center">
          <div className="flex gap-lg justify-center mb-lg max-md:gap-md">
            {/* Placeholder cards */}
            <div className="w-[500px] h-[350px] bg-gradient-to-br from-bg-light to-[#E5E7EB] rounded-lg shadow-lg max-desktop:w-[400px] max-desktop:h-[300px] max-tablet:w-[300px] max-tablet:h-[250px] max-[640px]:w-full max-[640px]:max-w-[320px] max-[640px]:h-[220px]"></div>
            <div className="w-[500px] h-[350px] bg-gradient-to-br from-bg-light to-[#E5E7EB] rounded-lg shadow-lg max-desktop:w-[400px] max-desktop:h-[300px] max-tablet:w-[300px] max-tablet:h-[250px] max-[640px]:w-full max-[640px]:max-w-[320px] max-[640px]:h-[220px]"></div>
          </div>

          <div className="v2-carousel-dots">
            <span className="v2-dot active"></span>
            <span className="v2-dot"></span>
            <span className="v2-dot"></span>
            <span className="v2-dot"></span>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex justify-center gap-sm flex-wrap mb-2xl max-md:mb-xl">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-base border-none cursor-pointer max-md:px-5 max-md:py-2.5 max-md:text-sm ${
                activeFilter === filter
                  ? "bg-primary-orange text-white"
                  : "bg-bg-light text-text-dark hover:bg-primary-orange/10"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Featured Project */}
        <div className="max-w-[900px] mx-auto text-center">
          <h3 className="text-3xl font-bold text-text-dark mb-md flex items-center justify-center gap-md max-md:text-2xl">
            {projects[0].projectName || projects[0].title}
            <button className="w-14 h-14 rounded-circle bg-primary-orange text-white flex items-center justify-center transition-all duration-base flex-shrink-0 hover:scale-110 hover:shadow-[0_8px_20px_rgba(255,140,66,0.4)] max-md:w-12 max-md:h-12">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </h3>
          <p className="text-base text-text-gray leading-relaxed max-md:text-sm">
            {projects[0].projectDesc || projects[0].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
