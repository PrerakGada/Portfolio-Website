import React, { useState } from "react";
import "./Services.scss";

const Services = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const services = [
    {
      title: "UI/ UX Design",
      description: "Creating intuitive and engaging user experiences",
      icon: "design"
    },
    {
      title: "Web Design",
      description: "Modern and responsive website designs",
      icon: "web"
    },
    {
      title: "Landing Page",
      description: "High-converting landing page designs",
      icon: "landing"
    }
  ];

  const totalSlides = services.length;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="v2-services section-dark" id="service">
      <div className="v2-services-bg-pattern"></div>

      {/* Decorative Blobs */}
      <div className="v2-blob v2-blob-1"></div>
      <div className="v2-blob v2-blob-2"></div>

      <div className="container">
        <div className="v2-services-header">
          <h2 className="v2-section-title">
            My <span className="text-orange">Services</span>
          </h2>
          <p className="v2-section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
            posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        <div className="v2-services-carousel">
          <div className="v2-services-track" style={{ transform: `translateX(-${activeSlide * 33.33}%)` }}>
            {services.map((service, index) => (
              <div key={index} className="v2-service-card">
                <div className="v2-service-card-inner">
                  <h3 className="v2-service-title">{service.title}</h3>

                  <div className="v2-service-preview">
                    {/* Placeholder for service mockup images */}
                    <div className="v2-mockup-grid">
                      <div className="v2-mockup-item"></div>
                      <div className="v2-mockup-item"></div>
                      <div className="v2-mockup-item"></div>
                    </div>
                  </div>

                  <button className="v2-service-arrow" aria-label="View service details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="v2-carousel-dots">
          {services.map((_, index) => (
            <button
              key={index}
              className={`v2-dot ${activeSlide === index ? "active" : ""}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
