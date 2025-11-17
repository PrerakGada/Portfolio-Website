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
        <h1 className="m-0 text-[40px] font-regular tablet:pb-4 tablet:text-[32px] tablet:text-center">
          Reach Out to me!
        </h1>
        <div className="flex tablet:flex tablet:flex-col">
          <div className="flex-[80%] tablet:text-center tablet:order-2">
            <div className="blog-header">
              <p className="text-text-subtitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>
            <h2 className="leading-[30px] text-[22px] tablet:text-base">
              "{emoji(String(prof.bio))}"
            </h2>
            {prof.location !== null && (
              <div className="[text-shadow:_0_0_10px_#ffebcd]">
                <span className="leading-[45px] text-[19px] tablet:leading-[30px] tablet:text-base">
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
              <span className="leading-[45px] text-[19px] tablet:leading-[30px] tablet:text-base">
                Open for opportunities: {prof.hireable}
              </span>
            </div>
            <SocialMedia />
          </div>
          <div className="text-right flex-[20%] max-w-full h-auto tablet:mx-auto tablet:order-1">
            <img
              src={prof.avatarUrl}
              alt={prof.name}
              className="rounded-full border-[0.5rem] border-github-profile-border ml-auto w-full max-w-[350px] h-auto shadow-[rgba(0,0,0,0.1)_0_30px_30px_-30px] transition-all duration-300 ease-out hover:shadow-none tablet:mx-auto tablet:max-w-[250px] tablet:hover:shadow-[rgba(0,0,0,0.1)_0_50px_50px_-50px] tablet:hover:transition-[0.3s] tablet:hover:ease-out"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
