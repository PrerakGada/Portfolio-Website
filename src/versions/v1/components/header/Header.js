import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../../../shared/contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../../../shared/data/portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  const navItems = [
    viewSkills && {label: "Skills", href: "#skills"},
    viewExperience && {label: "Work Experiences", href: "#experience"},
    viewOpenSource && {label: "Open Source", href: "#opensource"},
    viewAchievement && {label: "Achievements", href: "#achievements"},
    viewBlog && {label: "Blogs", href: "#blogs"},
    viewTalks && {label: "Talks", href: "#talks"},
    {label: "Contact Me", href: "#contact"}
  ].filter(Boolean);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  const headerClasses = `header flex flex-wrap items-center justify-between px-5 py-3 shadow-sm ${
    isDark
      ? "bg-[var(--color-dark-background)] text-[var(--color-text-dark)]"
      : "bg-[var(--color-light-background-1)] text-[var(--color-text)]"
  }`;

  return (
    <Headroom>
      <header className={headerClasses}>
        <a href="/" className="logo flex items-center text-xl font-semibold" onClick={closeMenu}>
          <span className="text-[var(--color-subtitle)]">&lt;</span>
          <span className="logo-name px-2 font-[var(--font-signature)]">
            {greeting.username}
          </span>
          <span className="text-[var(--color-subtitle)]">/&gt;</span>
        </a>
        <button
          type="button"
          className="menu-icon flex h-12 w-12 items-center justify-center rounded-md border border-transparent text-[var(--color-text)] md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span className="navicon relative block h-4 w-6">
            {["top", "middle", "bottom"].map((position, index) => {
              const baseClass = "absolute left-0 block h-0.5 w-full transition duration-300";
              const colorClass = isDark
                ? "bg-[var(--color-text-dark)]"
                : "bg-[var(--color-icon-bg)]";
              if (position === "middle") {
                return (
                  <span
                    key={position}
                    className={`${baseClass} ${colorClass} top-1/2 -translate-y-1/2 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                );
              }
              const transformClass =
                position === "top"
                  ? isMenuOpen
                    ? "translate-y-[2px] rotate-45"
                    : "-translate-y-[6px]"
                  : isMenuOpen
                    ? "-translate-y-[2px] -rotate-45"
                    : "translate-y-[6px]";
              return (
                <span
                  key={position}
                  className={`${baseClass} ${colorClass} top-1/2 ${transformClass}`}
                ></span>
              );
            })}
          </span>
        </button>
        <nav
          className={`menu flex w-full flex-col items-start gap-2 overflow-hidden transition-[max-height,opacity] duration-300 md:w-auto md:flex-row md:items-center md:gap-1 ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
          }`}
        >
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="w-full px-4 py-2 text-base font-medium transition-colors duration-200 hover:bg-[var(--color-header-hover)] md:w-auto md:rounded-md"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <div className="px-4 py-2 md:pl-4">
            <ToggleSwitch />
          </div>
        </nav>
      </header>
    </Headroom>
  );
}
export default Header;
