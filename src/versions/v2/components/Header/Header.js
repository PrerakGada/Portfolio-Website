import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [activeNav, setActiveNav] = useState("Home");

  const navItems = ["Home", "About", "Service", "Resume", "Project", "Contact"];

  const scrollToSection = (section) => {
    setActiveNav(section);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="v2-header">
      <nav className="v2-nav-container">
        <div className="v2-nav-left">
          {navItems.slice(0, 2).map((item) => (
            <button
              key={item}
              className={`v2-nav-item ${activeNav === item ? "active" : ""}`}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="v2-nav-logo">
          <div className="v2-logo-icon">
            <span className="v2-logo-text">JC</span>
          </div>
          <span className="v2-logo-name">JCREA</span>
        </div>

        <div className="v2-nav-right">
          {navItems.slice(2).map((item) => (
            <button
              key={item}
              className={`v2-nav-item ${activeNav === item ? "active" : ""}`}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
