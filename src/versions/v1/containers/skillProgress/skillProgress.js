import React from "react";
import {illustration, techStack} from "../../../../shared/data/portfolio";
import {Fade} from "react-reveal";
import Build from "../../../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import skillImage from "../../../../assets/images/skill.svg";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="main flex flex-col gap-10 lg:flex-row">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-normal leading-tight text-[var(--color-title)] max-md:text-3xl">
              Proficiency
            </h1>
            {techStack.experience.map((exp, i) => {
              return (
                <div key={i} className="space-y-2">
                  <p className="text-lg font-medium">{exp.Stack}</p>
                  <div className="h-5 overflow-hidden rounded-full bg-[var(--color-progress-bg)]">
                    <span
                      className="block h-full rounded-full bg-[var(--color-progress-span)] transition-all duration-500"
                      style={{width: exp.progressPercentage}}
                    ></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden flex-1 items-center justify-center lg:flex">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img alt="Skills" src={skillImage} className="max-w-md" />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
