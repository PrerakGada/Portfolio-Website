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
    <footer className="bg-[var(--color-primary-dark)] text-white py-[var(--spacing-xxxl)]">
      <div className="container">
        <div className="flex justify-between items-center mb-[var(--spacing-xxl)] pb-[var(--spacing-xxl)] border-b border-[rgba(255,255,255,0.1)] md:flex-row max-md:flex-col max-md:gap-[var(--spacing-md)]">
          <h2 className="text-[var(--font-size-4xl)] font-bold md:text-[var(--font-size-4xl)] max-md:text-[var(--font-size-3xl)]">Lets Connect there</h2>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Hire me
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-4 gap-[var(--spacing-xl)] mb-[var(--spacing-xxl)] md:grid-cols-4 max-md:grid-cols-1">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--color-primary-orange)] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-white">JC</span>
              </div>
              <span className="text-2xl font-bold">JCREA</span>
            </div>
            <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum
              ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed lobortis orci elementum egestas lobortis.
            </p>
            <div className="flex gap-4">
              {socialMediaLinks.display && (
                <>
                  {socialMediaLinks.github && (
                    <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary-orange)] transition-all duration-[0.3s]">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {socialMediaLinks.linkedin && (
                    <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary-orange)] transition-all duration-[0.3s]">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {socialMediaLinks.twitter && (
                    <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary-orange)] transition-all duration-[0.3s]">
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {socialMediaLinks.instagram && (
                    <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary-orange)] transition-all duration-[0.3s]">
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                </>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-orange">Navigation</span>
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm text-[rgba(255,255,255,0.7)] hover:text-[var(--color-primary-orange)] transition-colors duration-[0.3s]">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-orange">Contact</span>
            </h3>
            <ul className="space-y-3">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-[rgba(255,255,255,0.7)] hover:text-[var(--color-primary-orange)] transition-colors duration-[0.3s]">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-orange">Get the latest information</span>
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="flex items-center bg-[rgba(255,255,255,0.1)] rounded-[var(--radius-full)] p-1">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-0 outline-none px-4 py-2 text-sm text-white placeholder:text-[rgba(255,255,255,0.5)]"
                required
              />
              <button type="submit" className="w-10 h-10 bg-[var(--color-primary-orange)] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#e67a34] transition-all duration-[0.3s]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-[var(--spacing-lg)] border-t border-[rgba(255,255,255,0.1)] flex justify-between items-center md:flex-row max-md:flex-col max-md:gap-4">
          <p className="text-sm text-[rgba(255,255,255,0.6)]">Copyright© 2023 Jayesh. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-sm text-[rgba(255,255,255,0.6)]">
            <a href="/terms" className="hover:text-[var(--color-primary-orange)] transition-colors duration-[0.3s]">User Terms & Conditions</a>
            <span>|</span>
            <a href="/privacy" className="hover:text-[var(--color-primary-orange)] transition-colors duration-[0.3s]">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
