import React from "react";
import { skillsSection } from "../../portfolio";
import "./SoftwareSkill.scss";
import skillSvg from "../../assets/skills/flutter.svg";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                {/* <img src={skills.logo} alt={skills.skillName} width={24}/> */}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
