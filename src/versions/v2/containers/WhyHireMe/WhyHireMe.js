import React from "react";
import "./WhyHireMe.css";

const WhyHireMe = () => {
  const stats = [
    { number: "450+", label: "Project Completed" },
    { number: "450+", label: "Project Completed" }
  ];

  return (
    <section className="v2-why-hire-me section" id="about">
      <div className="container">
        <div className="v2-why-hire-grid">
          {/* Left - Image */}
          <div className="v2-why-hire-image">
            <div className="v2-why-hire-gradient-bg"></div>
            <div className="v2-why-hire-photo">
              {/* Placeholder - replace with actual image */}
              <div className="v2-photo-placeholder">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="80" r="40" fill="#2C3E50" fillOpacity="0.2"/>
                  <path d="M50 180C50 150 70 130 100 130C130 130 150 150 150 180H50Z" fill="#2C3E50" fillOpacity="0.2"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="v2-why-hire-content">
            <h2 className="v2-section-title">
              Why <span className="text-orange">Hire me?</span>
            </h2>

            <p className="v2-why-hire-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
              posuere in justo vulputate, bibendum sodales
            </p>

            <div className="v2-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="v2-stat-item">
                  <h3 className="v2-stat-number">{stat.number}</h3>
                  <p className="v2-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-outline">
              Hire me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
