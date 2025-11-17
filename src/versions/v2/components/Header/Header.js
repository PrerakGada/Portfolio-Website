import { useState } from "react";

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
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-header w-[90%] max-w-[1280px] tablet:top-4 tablet:w-[95%]">
      <nav className="flex items-center justify-between bg-primary-dark rounded-full px-6 py-3 shadow-xl tablet:px-4 tablet:py-2 max-sm:flex-wrap max-sm:justify-center max-sm:gap-2 max-sm:px-4 max-sm:py-3">
        <div className="flex items-center gap-3 tablet:gap-2 max-sm:flex-1 max-sm:justify-center max-sm:order-2 max-sm:w-full">
          {navItems.slice(0, 2).map((item) => (
            <button
              key={item}
              className={`px-6 py-3 text-base font-medium text-text-light bg-transparent rounded-full transition-all duration-base cursor-pointer whitespace-nowrap tablet:px-5 tablet:py-2.5 tablet:text-sm max-sm:px-4 max-sm:py-2 max-sm:text-[13px] hover:bg-primary-orange/10 ${
                activeNav === item ? "bg-primary-orange text-text-light shadow-[0_4px_12px_rgba(255,140,66,0.4)]" : ""
              }`}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 cursor-pointer select-none max-sm:order-1 max-sm:mb-2">
          <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 tablet:w-10 tablet:h-10">
            <span className="text-xl font-bold text-text-light tracking-wider tablet:text-base">JC</span>
          </div>
          <span className="text-2xl font-bold text-text-light tracking-wider tablet:text-xl max-sm:text-lg">JCREA</span>
        </div>

        <div className="flex items-center gap-3 tablet:gap-2 max-sm:flex-1 max-sm:justify-center max-sm:order-2 max-sm:w-full">
          {navItems.slice(2).map((item) => (
            <button
              key={item}
              className={`px-6 py-3 text-base font-medium text-text-light bg-transparent rounded-full transition-all duration-base cursor-pointer whitespace-nowrap tablet:px-5 tablet:py-2.5 tablet:text-sm max-sm:px-4 max-sm:py-2 max-sm:text-[13px] hover:bg-primary-orange/10 ${
                activeNav === item ? "bg-primary-orange text-text-light shadow-[0_4px_12px_rgba(255,140,66,0.4)]" : ""
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
