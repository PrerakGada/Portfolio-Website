import React, { useContext } from "react";
import { Fade } from "react-reveal";
import codingPerson from "../../../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import StyleContext from "../../../../shared/contexts/StyleContext";
import { illustration, skillsSection } from "../../../../shared/data/portfolio";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={`w-[90%] py-5 px-[10px] mx-auto mt-8 ${isDark ? "text-white" : ""}`} id="skills">
      <div className="flex flex-col md:flex-row w-full overflow-hidden">
        <Fade left duration={1000}>
          <div className="flex-1 mb-[30px] md:order-1 order-2">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../../../assets/images/developerActivity.svg")}
                className="max-w-full h-auto"
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="flex-1 mb-[30px] ml-0 md:ml-[50px] md:order-2 order-1 m-5 md:m-0">
            <h1
              className={`text-[30px] md:text-[40px] lg:text-[56px] font-normal text-center md:text-left ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={`text-base md:text-base lg:text-base text-center md:text-left ${
                isDark
                  ? "text-white"
                  : "text-text-subtitle"
              }`}
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={`text-base ${
                      isDark
                        ? "text-white"
                        : "text-text-subtitle"
                    }`}
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
