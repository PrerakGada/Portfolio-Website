import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import landingPerson from "../../../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../../../shared/data/portfolio";
import StyleContext from "../../../../shared/contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="w-[90%] py-5 px-[10px] mx-auto mt-8" id="greeting">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 mb-[30px]">
            <div>
              <h1
                className={`text-[24px] md:text-[50px] lg:text-[70px] leading-tight ${
                  isDark ? "text-white" : "text-text-black"
                }`}
              >
                {" "}
                {greeting.title}{" "}
                <span className="inline-block origin-[70%_70%] animate-wave">{emoji("👋")}</span>
              </h1>
              <p
                className={`text-base md:text-xl lg:text-[30px] lg:leading-[40px] leading-normal md:text-left text-center ${
                  isDark
                    ? "text-white"
                    : "text-text-subtitle"
                }`}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="flex mt-5 justify-around md:justify-start">
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
          </div>
          <div className="flex-1 mb-[30px] h-auto md:h-auto max-h-64 md:max-h-none">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../../../assets/images/manOnTable.svg")}
                className="max-w-full h-auto"
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
