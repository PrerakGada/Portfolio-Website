import React, {useContext} from "react";
import {Fade} from "react-reveal";
import codingPerson from "../../../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import StyleContext from "../../../../shared/contexts/StyleContext";
import {illustration, skillsSection} from "../../../../shared/data/portfolio";
import developerActivity from "../../../../assets/images/developerActivity.svg";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const sectionClasses =
    "mx-auto mt-16 w-[min(90%,1100px)] px-2.5 py-5 sm:px-6 lg:mt-20";
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={`${isDark ? "dark-mode" : ""} ${sectionClasses}`} id="skills">
      <div className="flex w-full flex-col gap-8 overflow-hidden lg:flex-row">
        <Fade left duration={1000}>
          <div className="order-2 flex flex-1 items-center justify-center lg:order-1">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={developerActivity}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="order-1 flex-1 space-y-6 lg:order-2 lg:pl-12">
            <h1 className="text-center text-[clamp(2.25rem,6vw,3.5rem)] font-normal text-[var(--color-text)] lg:text-left">
              {skillsSection.title}
            </h1>
            <p className="text-center text-lg leading-relaxed text-[var(--color-subtitle)] lg:text-left">
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div className="space-y-4 text-[var(--color-subtitle)]">
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className="text-base leading-relaxed lg:text-lg"
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
