import React from "react";
import {illustration, techStack} from "../../../../shared/data/portfolio";
import {Fade} from "react-reveal";
import Build from "../../../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="flex flex-col md:flex-row w-[90%] py-5 px-[10px] mx-auto mt-8">
          <div className="flex-1 mb-[30px] leading-[3rem] md:leading-[4rem] lg:leading-[3.5vw] m-5 md:m-0">
            <h1 className="text-[56px] font-normal">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="leading-[3rem] md:leading-[4rem] lg:leading-[3.5vw]">
                  <p>{exp.Stack}</p>
                  <div className="h-5 relative bg-progress-bar rounded-[25px]">
                    <span
                      style={progressStyle}
                      className="block h-full rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[6px] rounded-br-[6px] bg-progress-span relative overflow-hidden"
                    ></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex-1 mb-[30px] hidden lg:block order-2">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../../../assets/images/skill.svg")}
                className="ml-20 max-w-[90%] h-auto"
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
