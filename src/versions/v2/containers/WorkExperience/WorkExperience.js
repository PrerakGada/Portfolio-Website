import React from "react";
import { workExperiences } from "../../../../shared/data/portfolio";
import "./WorkExperience.scss";

const WorkExperience = () => {
  // Use actual data or fallback to sample data
  const experiences = workExperiences.display && workExperiences.experience.length > 0
    ? workExperiences.experience.slice(0, 3) // Show first 3 experiences
    : [
        {
          company: "Cognizant, Mumbai",
          date: "Sep 2016- July 2020",
          role: "Experience Designer",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
        },
        {
          company: "Sugee Pvt limited, Mumbai",
          date: "Sep 2020- July 2023",
          role: "UI/UX Designer",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
        },
        {
          company: "Cinetstox, Mumbai",
          date: "Sep 2023",
          role: "Lead UX Designer",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
        }
      ];

  return (
    <section className="v2-work-experience section" id="experience">
      <div className="container">
        <h2 className="v2-section-title text-center">
          My <span className="text-orange">Work Experience</span>
        </h2>

        <div className="v2-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="v2-timeline-item">
              <div className="v2-timeline-left">
                <h3 className="v2-company-name">
                  {exp.company || `${exp.role} - ${exp.role}`}
                </h3>
                <p className="v2-company-date">{exp.date}</p>
              </div>

              <div className="v2-timeline-center">
                <div className={`v2-timeline-dot ${index % 2 === 0 ? 'orange' : 'dark'}`}></div>
                {index < experiences.length - 1 && <div className="v2-timeline-line"></div>}
              </div>

              <div className="v2-timeline-right">
                <h3 className="v2-role-title">{exp.role}</h3>
                <p className="v2-role-description">
                  {exp.desc || exp.descBullets?.[0] || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
