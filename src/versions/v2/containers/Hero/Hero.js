
import { greeting } from "../../../../shared/data/portfolio";
import "./Hero.scss";

const Hero = () => {
  // Sample testimonial data - can be moved to portfolio.js later
  const testimonial = {
    text: "Jenny's Exceptional product design ensure our website's success. Highly Recommended",
    author: "Client"
  };

  const experience = {
    years: "10 Years",
    label: "Experience"
  };

  return (
    <section className="v2-hero" id="home">
      <div className="container">
        <div className="v2-hero-content">
          {/* Greeting Badge */}
          <div className="v2-hero-greeting">
            <span className="v2-greeting-badge">Hello!</span>
            <svg className="v2-greeting-hand" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5L14 3L16 5L14 7L12 5Z" fill="#FF8C42"/>
              <path d="M14 7L16 5L18 7L16 9L14 7Z" fill="#FF8C42"/>
              <path d="M16 9L18 7L19 8L17 10L16 9Z" fill="#FF8C42"/>
            </svg>
          </div>

          {/* Main Title */}
          <h1 className="v2-hero-title">
            I'm <span className="text-orange">{greeting.username},</span>
            <br />
            Product Designer
          </h1>

          {/* Main Content Grid */}
          <div className="v2-hero-grid">
            {/* Left - Testimonial */}
            <div className="v2-hero-testimonial">
              <svg className="v2-quote-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M12 18C12 14.6863 14.6863 12 18 12V12C21.3137 12 24 14.6863 24 18V24C24 27.3137 21.3137 30 18 30H12V18Z" fill="#2C3E50" fillOpacity="0.2"/>
                <path d="M28 18C28 14.6863 30.6863 12 34 12V12C37.3137 12 40 14.6863 40 18V24C40 27.3137 37.3137 30 34 30H28V18Z" fill="#2C3E50" fillOpacity="0.2"/>
              </svg>
              <p className="v2-testimonial-text">{testimonial.text}</p>
            </div>

            {/* Center - Hero Image */}
            <div className="v2-hero-image-wrapper">
              <div className="v2-hero-gradient-bg"></div>
              <div className="v2-hero-image">
                {/* Placeholder - replace with actual image */}
                <div className="v2-image-placeholder">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="80" r="40" fill="#2C3E50" fillOpacity="0.2"/>
                    <path d="M50 180C50 150 70 130 100 130C130 130 150 150 150 180H50Z" fill="#2C3E50" fillOpacity="0.2"/>
                  </svg>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="v2-hero-ctas">
                <a href="#portfolio" className="btn btn-primary">
                  Portfolio
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#contact" className="btn btn-outline">
                  Hire me
                </a>
              </div>
            </div>

            {/* Right - Experience Badge */}
            <div className="v2-hero-experience">
              <div className="v2-experience-stars">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} width="28" height="28" viewBox="0 0 24 24" fill="#FF8C42">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <div className="v2-experience-text">
                <h3 className="v2-experience-years">{experience.years}</h3>
                <p className="v2-experience-label">{experience.label}</p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="v2-hero-decoration v2-decoration-1">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path d="M20 40C20 40 30 20 40 40C50 60 60 40 60 40" stroke="#FF8C42" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="v2-hero-decoration v2-decoration-2">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <path d="M30 50Q40 30 50 50T70 50" stroke="#FF8C42" strokeWidth="3" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
