import React, {useContext} from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../../../shared/data/portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../../../shared/contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);

  // Detect Safari browser for compatibility
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (workExperiences.display) {
    const content = (
      <div className="main" id="workExperience">
        <div className="space-y-8">
          <h1 className="text-5xl font-normal leading-tight text-[var(--color-title)] max-xl:text-4xl max-md:text-center max-md:text-3xl">
            Experiences
          </h1>
          <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))]">
            {workExperiences.experience.map((card, i) => {
              return (
                <ExperienceCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    company: card.company,
                    desc: card.desc,
                    date: card.date,
                    companylogo: card.companylogo,
                    role: card.role,
                    descBullets: card.descBullets
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );

    return (
      <div id="experience">
        {isSafari ? (
          content
        ) : (
          <Fade bottom duration={1000} distance="20px">
            {content}
          </Fade>
        )}
      </div>
    );
  }
  return null;
}
