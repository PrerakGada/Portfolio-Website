import { skillsSection } from "../../../../shared/data/portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div>
        <ul className="pl-0 list-none text-5xl mb-0 mt-0 text-center">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="inline-block mr-5 mb-5 group"
                name={skills.skillName}
              >
                <i className={`${skills.fontAwesomeClassname} text-text-subtitle group-hover:text-skills transition-colors duration-200`}></i>
                {/* <img src={skills.logo} alt={skills.skillName} width={24}/> */}
                <p className="text-text-subtitle text-[10px] group-hover:text-skills transition-colors duration-200">{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
