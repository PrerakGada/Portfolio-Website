import React from "react";
import "./Hero.scss";
import { greeting } from "../../../../shared/data/portfolio";

const Hero = () => {
  // Extract the username and title from greeting
  const name = greeting.username || "Prerak Gada";
  const title = greeting.title || "Product Designer";
  const subtitle = greeting.subTitle || "";

  // Years of experience (hardcoded for now, can be added to portfolio.js later)
  const yearsExperience = 10;

  return (
    <section className="v2-hero">
      <div className="v2-container">
        <div className="v2-hero-content">
          {/* Left Side - Photo */}
          <div className="v2-hero-image">
            <div className="v2-image-wrapper">
              <div className="v2-orange-circle"></div>
              {/* Placeholder for profile photo */}
              <div className="v2-photo">
                <img
                  src="https://via.placeholder.com/500x600/FF6B35/FFFFFF?text=Your+Photo"
                  alt={name}
                  className="v2-profile-img"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="v2-hero-text">
            <p className="v2-greeting">Hello,</p>
            <h1 className="v2-title">
              I'm {name},
            </h1>
            <h2 className="v2-subtitle">
              <span className="v2-accent-text">Product</span>Designer
            </h2>

            <p className="v2-description">
              {subtitle}
            </p>

            {/* Experience Badge */}
            <div className="v2-experience-badge">
              <div className="v2-badge-content">
                <div className="v2-stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="v2-badge-text">
                  <strong>{yearsExperience} Years</strong>
                  <span>Experience</span>
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="v2-hero-buttons">
              <a href="#works" className="v2-btn v2-btn-primary">
                Portfolio
              </a>
              <a href="#contact" className="v2-btn v2-btn-secondary">
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="v2-hero-decoration">
        <div className="v2-decoration-circle v2-decoration-1"></div>
        <div className="v2-decoration-circle v2-decoration-2"></div>
      </div>
    </section>
  );
};

export default Hero;
