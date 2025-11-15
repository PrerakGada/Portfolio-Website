import React, { useState } from "react";
import "./Header.scss";
import { socialMediaLinks } from "../../../../shared/data/portfolio";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Works", href: "#works" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="v2-header">
      <div className="v2-container">
        <nav className="v2-nav">
          {/* Logo */}
          <div className="v2-logo">
            <a href="#home">XORA</a>
          </div>

          {/* Desktop Navigation */}
          <ul className="v2-nav-menu">
            {navItems.map((item, index) => (
              <li key={index} className="v2-nav-item">
                <a href={item.href} className="v2-nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="v2-social-icons">
            {socialMediaLinks.linkedin && (
              <a
                href={socialMediaLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-social-icon"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
            {socialMediaLinks.instagram && (
              <a
                href={socialMediaLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-social-icon"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {socialMediaLinks.github && (
              <a
                href={socialMediaLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-social-icon"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
            {socialMediaLinks.twitter && (
              <a
                href={socialMediaLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-social-icon"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="v2-mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="v2-mobile-menu">
            <ul className="v2-mobile-nav">
              {navItems.map((item, index) => (
                <li key={index} className="v2-mobile-nav-item">
                  <a
                    href={item.href}
                    className="v2-mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="v2-mobile-social">
              {socialMediaLinks.linkedin && (
                <a
                  href={socialMediaLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-social-icon"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              )}
              {socialMediaLinks.instagram && (
                <a
                  href={socialMediaLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-social-icon"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              )}
              {socialMediaLinks.github && (
                <a
                  href={socialMediaLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-social-icon"
                >
                  <i className="fab fa-github"></i>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
