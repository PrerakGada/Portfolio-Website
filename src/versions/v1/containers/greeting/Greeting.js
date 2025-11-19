import React from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import landingPerson from "../../../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../../../shared/data/portfolio";
import manOnTable from "../../../../assets/images/manOnTable.svg";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  const sectionClasses =
    "mx-auto mt-10 w-[min(90%,1100px)] px-2.5 py-5 sm:px-6 lg:mt-16";
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className={sectionClasses} id="greeting">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center">
          <div className="flex-1">
            <h1 className="text-center text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-tight text-[var(--color-text)] lg:text-left">
              {greeting.title} <span className="animate-wave-hand inline-block">{emoji("👋")}</span>
            </h1>
            <p className="mt-4 text-center text-[clamp(1.125rem,3vw,1.875rem)] leading-snug text-[var(--color-subtitle)] lg:text-left">
              {greeting.subTitle}
            </p>
            <div className="mt-6">
              <SocialMedia />
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              )}
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={manOnTable}
                className="max-h-[360px]"
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
