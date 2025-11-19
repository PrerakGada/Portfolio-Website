import React, {useContext} from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../../../shared/data/portfolio";
import {Fade} from "react-reveal";
import email from "../../../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../../../shared/contexts/StyleContext";
import contactMailDark from "../../../../assets/images/contactMailDark.svg";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const sectionClasses =
    "mx-auto mt-16 w-[min(90%,1100px)] px-2.5 py-5 sm:px-6 lg:mt-20";
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={sectionClasses} id="contact">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
          <div className="w-full">
            <h1 className="heading text-[clamp(2.5rem,6vw,4rem)] font-normal text-[var(--color-text)]">
              {contactInfo.title}
            </h1>
            <p
              className={`mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-subtitle)] sm:text-sm ${
                isDark ? "text-[var(--color-text-dark)]" : ""
              }`}
            >
              {contactInfo.subtitle}
            </p>
            <div className="mt-6 flex flex-col">
              {contactInfo.number && (
                <a
                  className="text-2xl font-normal text-[var(--color-subtitle)] transition duration-300 hover:text-[var(--color-text)] hover:drop-shadow [text-decoration:none] md:text-4xl"
                  href={"tel:" + contactInfo.number}
                >
                  {contactInfo.number}
                </a>
              )}
              {contactInfo.number && <div className="h-6" />}
              <a
                className="text-2xl font-normal text-[var(--color-subtitle)] transition duration-300 hover:text-[var(--color-text)] hover:drop-shadow [text-decoration:none] md:text-4xl"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <div className="my-6">
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="hidden flex-1 items-center justify-center lg:flex">
            {illustration.animated ? (
              <div className="ml-6 -mt-16 w-full max-w-lg">
                <DisplayLottie animationData={email} />
              </div>
            ) : (
              <img
                alt="Man working"
                src={contactMailDark}
                className="ml-6 -mt-16 max-w-sm"
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
