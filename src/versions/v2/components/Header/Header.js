import React, { useState } from "react";

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
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-[90%] max-w-[1280px] md:top-6 max-md:top-4 max-md:w-[95%]">
      <nav className="flex items-center justify-between bg-[var(--color-primary-dark)] rounded-[var(--radius-full)] px-6 py-3 shadow-[var(--shadow-xl)] md:px-6 md:py-3 max-md:px-4 max-md:py-2 max-sm:flex-wrap max-sm:justify-center max-sm:gap-2 max-sm:px-4 max-sm:py-3">
        <div className="flex items-center gap-3 md:gap-3 max-md:gap-2 max-sm:flex-1 max-sm:justify-center max-sm:order-2 max-sm:w-full">
          {navItems.slice(0, 2).map((item) => (
            <button
              key={item}
              className={`px-6 py-3 font-medium bg-transparent rounded-[var(--radius-full)] cursor-pointer whitespace-nowrap border-0 md:px-6 md:py-3 md:text-base max-md:px-5 max-md:py-2.5 max-md:text-sm max-sm:px-4 max-sm:py-2 max-sm:text-[13px] transition-all duration-[0.3s] ease-in-out hover:bg-[rgba(255,140,66,0.1)] ${
                activeNav === item
                  ? "bg-[var(--color-primary-orange)] text-[var(--color-text-light)] shadow-[0_4px_12px_rgba(255,140,66,0.4)]"
                  : "text-[var(--color-text-light)]"
              }`}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 cursor-pointer select-none max-sm:order-1 max-sm:mb-2">
          <div className="w-12 h-12 bg-[var(--color-primary-orange)] rounded-[var(--radius-circle)] flex items-center justify-center flex-shrink-0 md:w-12 md:h-12 max-md:w-10 max-md:h-10">
            <span className="text-xl font-bold text-[var(--color-text-light)] tracking-[0.5px] md:text-xl max-md:text-base">
              JC
            </span>
          </div>
          <span className="text-2xl font-bold text-[var(--color-text-light)] tracking-[1px] md:text-2xl max-md:text-xl max-sm:text-lg">
            JCREA
          </span>
        </div>

        <div className="flex items-center gap-3 md:gap-3 max-md:gap-2 max-sm:flex-1 max-sm:justify-center max-sm:order-2 max-sm:w-full">
          {navItems.slice(2).map((item) => (
            <button
              key={item}
              className={`px-6 py-3 font-medium bg-transparent rounded-[var(--radius-full)] cursor-pointer whitespace-nowrap border-0 md:px-6 md:py-3 md:text-base max-md:px-5 max-md:py-2.5 max-md:text-sm max-sm:px-4 max-sm:py-2 max-sm:text-[13px] transition-all duration-[0.3s] ease-in-out hover:bg-[rgba(255,140,66,0.1)] ${
                activeNav === item
                  ? "bg-[var(--color-primary-orange)] text-[var(--color-text-light)] shadow-[0_4px_12px_rgba(255,140,66,0.4)]"
                  : "text-[var(--color-text-light)]"
              }`}
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
