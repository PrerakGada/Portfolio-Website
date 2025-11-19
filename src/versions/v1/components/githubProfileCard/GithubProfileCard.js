import React from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, isHireable} from "../../../../shared/data/portfolio";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";

export default function GithubProfileCard({prof}) {
  if (isHireable) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="mb-6 text-[40px] font-normal max-md:text-center max-md:text-[32px]">
          Reach Out to me!
        </h1>
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
          <div className="w-full text-left md:w-3/5 lg:w-2/3">
            <div className="mb-4">
              <p className="text-base text-[var(--color-subtitle)]">{contactInfo.subtitle}</p>
            </div>
            <h2 className="bio-text mb-4 text-[22px] leading-[30px] max-md:text-center max-md:text-[16px]">
              "{emoji(String(prof.bio))}"
            </h2>
            {prof.location !== null && (
              <div>
                <span className="flex items-center gap-2 text-[19px] leading-[45px] max-md:justify-center max-md:text-[16px] max-md:leading-[30px]">
                  <svg
                    viewBox="-0.5 -2 20 19"
                    version="1.1"
                    width="22"
                    height="16"
                    aria-hidden="true"
                    stroke="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                    ></path>
                  </svg>
                  {prof.location}
                </span>
              </div>
            )}
            <div className="pb-4">
              <span className="block text-[19px] leading-[45px] max-md:text-center max-md:text-[16px] max-md:leading-[30px]">
                Open for opportunities: {prof.hireable}
              </span>
            </div>
            <SocialMedia />
          </div>
          <div className="w-full text-center md:w-2/5 lg:w-1/3">
            <img
              src={prof.avatarUrl}
              alt={prof.name}
              className="profile-image mx-auto max-w-[350px] rounded-full border-[0.5rem] border-[var(--github-card-border)] shadow-[0_30px_30px_-30px_var(--shadow-light)] transition-all duration-300 hover:shadow-none max-md:max-w-[250px]"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
