import React, { useState } from "react";
import { socialMediaLinks, contactInfo } from "../../../../shared/data/portfolio";

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
    <footer className="bg-primary-dark text-text-light py-2xl pb-lg">
      <div className="container">
        {/* Footer Top */}
        <div className="flex justify-between items-center mb-xl max-tablet:flex-col max-tablet:gap-md max-tablet:text-center">
          <h2 className="text-3xl font-bold text-text-light max-tablet:text-2xl">Lets Connect there</h2>
          <a href="#contact" className="btn btn-primary">
            Hire me
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-text-light/10 my-xl"></div>

        {/* Footer Content */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1.5fr] gap-2xl mb-xl max-desktop:grid-cols-2 max-desktop:gap-xl max-tablet:grid-cols-1 max-tablet:gap-lg max-tablet:text-center">
          {/* About Section */}
          <div className="max-tablet:flex max-tablet:flex-col max-tablet:items-center">
            <div className="flex items-center gap-sm mb-md max-tablet:justify-center">
              <div className="w-12 h-12 bg-primary-orange rounded-circle flex items-center justify-center flex-shrink-0">
                <span className="text-[20px] font-bold text-text-light">JC</span>
              </div>
              <span className="text-xl font-bold text-text-light">JCREA</span>
            </div>
            <p className="text-sm text-text-light/70 leading-relaxed mb-md max-w-[400px] max-tablet:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum
              ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed lobortis orci elementum egestas lobortis.
            </p>
            <div className="flex gap-sm max-tablet:justify-center">
              {socialMediaLinks.display && (
                <>
                  {socialMediaLinks.github && (
                    <a
                      href={socialMediaLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-circle bg-text-light/10 flex items-center justify-center text-text-light text-md transition-all duration-base hover:bg-primary-orange hover:-translate-y-0.5"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {socialMediaLinks.linkedin && (
                    <a
                      href={socialMediaLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-circle bg-text-light/10 flex items-center justify-center text-text-light text-md transition-all duration-base hover:bg-primary-orange hover:-translate-y-0.5"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {socialMediaLinks.twitter && (
                    <a
                      href={socialMediaLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-circle bg-text-light/10 flex items-center justify-center text-text-light text-md transition-all duration-base hover:bg-primary-orange hover:-translate-y-0.5"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {socialMediaLinks.instagram && (
                    <a
                      href={socialMediaLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-circle bg-text-light/10 flex items-center justify-center text-text-light text-md transition-all duration-base hover:bg-primary-orange hover:-translate-y-0.5"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-text-light mb-md max-tablet:text-center">
              <span className="text-primary-orange">Navigation</span>
            </h3>
            <ul className="list-none p-0 m-0">
              {navLinks.map((link, index) => (
                <li key={index} className="mb-sm">
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-text-light/70 text-base transition-colors duration-base hover:text-primary-orange"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-lg font-bold text-text-light mb-md max-tablet:text-center">
              <span className="text-primary-orange">Contact</span>
            </h3>
            <ul className="list-none p-0 m-0">
              {contactLinks.map((link, index) => (
                <li key={index} className="mb-sm">
                  <a
                    href={link.href}
                    className="text-text-light/70 text-base transition-colors duration-base hover:text-primary-orange"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-text-light mb-md max-tablet:text-center">
              <span className="text-primary-orange">Get the latest information</span>
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="flex bg-bg-white rounded-full overflow-hidden p-1">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 border-0 outline-none py-3 px-5 text-base bg-transparent text-text-dark placeholder:text-text-muted"
              />
              <button
                type="submit"
                className="w-12 h-12 rounded-circle bg-primary-orange text-text-light flex items-center justify-center transition-all duration-base flex-shrink-0 hover:bg-primary-orange/90 hover:scale-105"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-text-light/10 my-xl"></div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center pt-lg max-tablet:flex-col max-tablet:gap-sm max-tablet:text-center">
          <p className="text-sm text-text-light/60">Copyright© 2023 Jayesh. All Rights Reserved.</p>
          <div className="flex gap-sm text-sm text-text-light/60">
            <a
              href="/terms"
              className="text-text-light/60 transition-colors duration-base hover:text-primary-orange"
            >
              User Terms & Conditions
            </a>
            <span className="text-text-light/30">|</span>
            <a
              href="/privacy"
              className="text-text-light/60 transition-colors duration-base hover:text-primary-orange"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
