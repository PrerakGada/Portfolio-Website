import React, {useContext} from "react";
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
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header
        className={`
          max-h-[100px] w-full py-[15px] px-5 mx-auto
          ${isDark ? 'bg-bg-dark-main text-text-light' : 'bg-bg-light-1'}
          tablet:flex tablet:items-center tablet:justify-between
        `}
      >
        <a href="/" className="block flex-none float-left text-2xl no-underline mt-2.5 leading-normal">
          <span className="text-text-subtitle">&lt;</span>
          <span className="font-agustina font-bold px-2.5" style={{fontVariantLigatures: 'no-common-ligatures', WebkitFontVariantLigatures: 'no-common-ligatures'}}>
            {greeting.username}
          </span>
          <span className="text-text-subtitle">/&gt;</span>
        </a>

        <input className="hidden peer" type="checkbox" id="menu-btn" />

        <label
          className="cursor-pointer inline-block float-right py-7 px-5 relative select-none tablet:hidden"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={`
            block h-0.5 w-[18px] relative transition-all duration-200
            ${isDark ? 'bg-text-light' : 'bg-icon'}
            before:content-[''] before:block before:h-full before:absolute before:transition-all before:duration-200 before:w-full before:top-[5px]
            after:content-[''] after:block after:h-full after:absolute after:transition-all after:duration-200 after:w-full after:-top-[5px]
            ${isDark ? 'before:bg-text-light after:bg-text-light' : 'before:bg-icon after:bg-icon'}
            peer-checked:bg-transparent peer-checked:before:rotate-[-45deg] peer-checked:after:rotate-45 peer-checked:before:top-0 peer-checked:after:top-0
          `}></span>
        </label>

        <ul
          className={`
            m-0 p-0 list-none overflow-hidden clear-both max-h-0 transition-all duration-200
            peer-checked:max-h-[486px]
            tablet:max-h-none
            ${isDark ? 'bg-bg-dark-main text-text-light' : ''}
          `}
        >
          {viewSkills && (
            <li className="tablet:float-left">
              <a
                href="#skills"
                className={`
                  block py-[15px] px-5 no-underline
                  ${isDark ? 'text-text-light hover:bg-button-primary' : 'text-text-black hover:bg-[#f4f4f4]'}
                `}
              >
                Skills
              </a>
            </li>
          )}
          {viewExperience && (
            <li className="tablet:float-left">
              <a
                href="#experience"
                className={`
                  block py-[15px] px-5 no-underline
                  ${isDark ? 'text-text-light hover:bg-button-primary' : 'text-text-black hover:bg-[#f4f4f4]'}
                `}
              >
                Work Experiences
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li className="tablet:float-left">
              <a
                href="#opensource"
                className={`
                  block py-[15px] px-5 no-underline
                  ${isDark ? 'text-text-light hover:bg-button-primary' : 'text-text-black hover:bg-[#f4f4f4]'}
                `}
              >
                Open Source
              </a>
            </li>
          )}
          {viewAchievement && (
            <li className="tablet:float-left">
              <a
                href="#achievements"
                className={`
                  block py-[15px] px-5 no-underline
                  ${isDark ? 'text-text-light hover:bg-button-primary' : 'text-text-black hover:bg-[#f4f4f4]'}
                `}
              >
                Achievements
              </a>
            </li>
          )}
          {viewBlog && (
            <li className="tablet:float-left">
              <a
                href="#blogs"
                className={`
                  block py-[15px] px-5 no-underline
                  ${isDark ? 'text-text-light hover:bg-button-primary' : 'text-text-black hover:bg-[#f4f4f4]'}
                `}
              >
                Blogs
              </a>
            </li>
          )}
          {viewTalks && (
            <li className="tablet:float-left">
              <a
                href="#talks"
                className={`
                  block py-[15px] px-5 no-underline
                  ${isDark ? 'text-text-light hover:bg-button-primary' : 'text-text-black hover:bg-[#f4f4f4]'}
                `}
              >
                Talks
              </a>
            </li>
          )}
          <li className="tablet:float-left">
            <a
              href="#contact"
              className={`
                block py-[15px] px-5 no-underline
                ${isDark ? 'text-text-light hover:bg-button-primary' : 'text-text-black hover:bg-[#f4f4f4]'}
              `}
            >
              Contact Me
            </a>
          </li>
          <li className="tablet:float-left">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="block py-[15px] px-5">
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
