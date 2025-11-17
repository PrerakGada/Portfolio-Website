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
    <section className="bg-[var(--color-bg-white)] py-[var(--spacing-xxxl)] md:py-[var(--spacing-xxxl)] max-md:py-[var(--spacing-xxl)]" id="project">
      <div className="container">
        <div className="flex justify-between items-center mb-[var(--spacing-xxl)] md:flex-row md:mb-[var(--spacing-xxl)] max-md:flex-col max-md:gap-[var(--spacing-md)] max-md:mb-[var(--spacing-xl)]">
          <h2 className="text-[var(--font-size-4xl)] font-bold text-[var(--color-text-dark)] mb-[var(--spacing-md)] md:text-[var(--font-size-4xl)] max-md:text-[var(--font-size-3xl)]">
            Lets have a look at my <span className="text-orange">Portfolio</span>
          </h2>
          <a href="/projects" className="btn-primary">See All</a>
        </div>

        {/* Portfolio Carousel Preview */}
        <div className="mb-[var(--spacing-xl)] text-center">
          <div className="flex gap-[var(--spacing-lg)] justify-center mb-[var(--spacing-lg)] md:gap-[var(--spacing-lg)] max-md:gap-[var(--spacing-md)]">
            {/* Placeholder cards */}
            <div className="w-[500px] h-[350px] rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] lg:w-[500px] lg:h-[350px] max-lg:w-[400px] max-lg:h-[300px] max-md:w-[300px] max-md:h-[250px] max-sm:w-full max-sm:max-w-[320px] max-sm:h-[220px]" style={{
              background: 'linear-gradient(135deg, var(--color-bg-light) 0%, #E5E7EB 100%)'
            }}></div>
            <div className="w-[500px] h-[350px] rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] lg:w-[500px] lg:h-[350px] max-lg:w-[400px] max-lg:h-[300px] max-md:w-[300px] max-md:h-[250px] max-sm:w-full max-sm:max-w-[320px] max-sm:h-[220px]" style={{
              background: 'linear-gradient(135deg, var(--color-bg-light) 0%, #E5E7EB 100%)'
            }}></div>
          </div>

          <div className="flex justify-center items-center gap-[var(--spacing-sm)]">
            <span className="h-3 w-10 rounded-[var(--radius-full)] bg-[var(--color-primary-orange)]"></span>
            <span className="h-3 w-3 rounded-[var(--radius-circle)] bg-[rgba(139,146,168,0.3)]"></span>
            <span className="h-3 w-3 rounded-[var(--radius-circle)] bg-[rgba(139,146,168,0.3)]"></span>
            <span className="h-3 w-3 rounded-[var(--radius-circle)] bg-[rgba(139,146,168,0.3)]"></span>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex justify-center gap-[var(--spacing-sm)] flex-wrap mb-[var(--spacing-xxl)] md:mb-[var(--spacing-xxl)] max-md:mb-[var(--spacing-xl)]">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-6 py-3 rounded-[var(--radius-full)] font-medium transition-all duration-[var(--transition-base)] border-0 cursor-pointer md:px-6 md:py-3 md:text-base max-md:px-5 max-md:py-2.5 max-md:text-sm ${
                activeFilter === filter
                  ? "bg-[var(--color-primary-orange)] text-[var(--color-text-light)]"
                  : "bg-[var(--color-bg-light)] text-[var(--color-text-dark)] hover:bg-[rgba(255,140,66,0.1)]"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Featured Project */}
        <div className="max-w-[900px] mx-auto text-center">
          <h3 className="text-[var(--font-size-3xl)] font-bold text-[var(--color-text-dark)] mb-[var(--spacing-md)] flex items-center justify-center gap-[var(--spacing-md)] md:text-[var(--font-size-3xl)] max-md:text-[var(--font-size-2xl)]">
            {projects[0].projectName || projects[0].title}
            <button className="w-14 h-14 rounded-[var(--radius-circle)] bg-[var(--color-primary-orange)] text-[var(--color-text-light)] flex items-center justify-center transition-all duration-[var(--transition-base)] flex-shrink-0 border-0 cursor-pointer md:w-14 md:h-14 max-md:w-12 max-md:h-12 hover:scale-110 hover:shadow-[0_8px_20px_rgba(255,140,66,0.4)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </h3>
          <p className="text-base text-[var(--color-text-gray)] leading-[var(--line-height-relaxed)] md:text-base max-md:text-sm">
            {projects[0].projectDesc || projects[0].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
