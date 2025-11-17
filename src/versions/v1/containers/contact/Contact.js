import React, {useContext} from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../../../shared/data/portfolio";
import {Fade} from "react-reveal";
import email from "../../../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../../../shared/contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main mt-16" id="contact">
        <div className="flex">
          <div className="contact-header flex-1">
            <h1 className="heading text-[65px] max-[1380px]:text-[56px] max-md:text-[40px] max-md:text-center font-regular">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode uppercase max-md:text-base max-md:leading-normal max-md:text-center"
                  : "text-text-subtitle uppercase max-md:text-base max-md:leading-normal max-md:text-center"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode mt-6 max-md:text-center" : "mt-6 max-md:text-center"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="mt-5 text-[40px] max-md:text-[20px] font-regular text-text-subtitle no-underline hover:text-text-dark hover:shadow-[2px_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className={isDark ? "dark-mode mt-5 text-[40px] max-md:text-[20px] font-regular text-text-subtitle no-underline hover:text-text-dark hover:shadow-[2px_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300" : "mt-5 text-[40px] max-md:text-[20px] font-regular text-text-subtitle no-underline hover:text-text-dark hover:shadow-[2px_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300"}
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="flex-1 max-md:hidden">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../../../assets/images/contactMailDark.svg")}
                className="max-w-full h-auto ml-6 -mt-16"
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
