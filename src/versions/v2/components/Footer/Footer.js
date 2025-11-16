import React, { useState } from "react";
import { socialMediaLinks, contactInfo } from "../../../../shared/data/portfolio";
import "./Footer.scss";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter email:", email);
  };

  const navLinks = ["Home", "About Us", "Service", "Resume", "Project"];
  const contactLinks = [
    { label: "+91 7738443636", href: "tel:+917738443636" },
    { label: "Jaycrea36@gmail.com", href: `mailto:${contactInfo.email_address || "Jaycrea36@gmail.com"}` },
    { label: "Portfolio-jcrea.com", href: "/" }
  ];

  return (
    <footer className="v2-footer">
      <div className="container">
        <div className="v2-footer-top">
          <h2 className="v2-footer-title">Lets Connect there</h2>
          <a href="#contact" className="btn btn-primary">
            Hire me
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="v2-footer-divider"></div>

        <div className="v2-footer-content">
          <div className="v2-footer-about">
            <div className="v2-footer-logo">
              <div className="v2-footer-logo-icon">
                <span>JC</span>
              </div>
              <span className="v2-footer-logo-text">JCREA</span>
            </div>
            <p className="v2-footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum
              ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed lobortis orci elementum egestas lobortis.
            </p>
            <div className="v2-footer-social">
              {socialMediaLinks.display && (
                <>
                  {socialMediaLinks.github && (
                    <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className="v2-social-icon">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {socialMediaLinks.linkedin && (
                    <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="v2-social-icon">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {socialMediaLinks.twitter && (
                    <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer" className="v2-social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {socialMediaLinks.instagram && (
                    <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer" className="v2-social-icon">
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="v2-footer-links">
            <h3 className="v2-footer-heading">
              <span className="text-orange">Navigation</span>
            </h3>
            <ul className="v2-footer-nav">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="v2-footer-contact">
            <h3 className="v2-footer-heading">
              <span className="text-orange">Contact</span>
            </h3>
            <ul className="v2-footer-nav">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="v2-footer-newsletter">
            <h3 className="v2-footer-heading">
              <span className="text-orange">Get the latest information</span>
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="v2-newsletter-form">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="v2-footer-divider"></div>

        <div className="v2-footer-bottom">
          <p className="v2-copyright">Copyright© 2023 Jayesh. All Rights Reserved.</p>
          <div className="v2-footer-legal">
            <a href="/terms">User Terms & Conditions</a>
            <span>|</span>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
