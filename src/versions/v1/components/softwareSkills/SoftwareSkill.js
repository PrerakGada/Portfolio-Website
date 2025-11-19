import React, {useContext} from "react";
import {skillsSection} from "../../../../shared/data/portfolio";
import StyleContext from "../../../../shared/contexts/StyleContext";

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);
  const baseColor = isDark ? "text-[var(--color-text-dark)]" : "text-[var(--color-subtitle)]";

  return (
    <div className="software-skills-main-div flex w-full justify-center">
      <ul className="dev-icons m-0 list-none p-0 text-center text-[3rem]">
        {skillsSection.softwareSkills.map((skills, i) => (
          <li
            key={i}
            className="software-skill-inline group mr-5 mb-5 inline-flex flex-col items-center text-center"
            name={skills.skillName}
          >
            <i
              className={`${skills.fontAwesomeClassname} ${baseColor} transition-colors duration-200 group-hover:text-[var(--color-skills)]`}
            ></i>
            <p
              className={`${baseColor} mt-2 text-[0.625rem] uppercase tracking-[0.08em] transition-colors duration-200 group-hover:text-[var(--color-skills)]`}
            >
              {skills.skillName}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
