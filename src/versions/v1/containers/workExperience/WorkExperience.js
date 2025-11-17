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
      <div className="flex w-[90%] py-5 px-[10px] mx-auto mt-8 animate-fadeInUp" id="workExperience">
        <div className="flex-1">
          <h1 className="text-[30px] md:text-[40px] lg:text-[56px] font-normal text-center md:text-left">Experiences</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4">
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
