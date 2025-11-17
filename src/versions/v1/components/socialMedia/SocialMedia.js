import React from "react";
import {socialMediaLinks} from "../../../../shared/data/portfolio";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="text-[2em] tablet:text-center">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="mb-2.5 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="
            fab fa-github
            text-text-light rounded-[2.6rem] cursor-pointer inline-block
            text-[1.3rem] h-[2.6rem] leading-[2.6rem] mx-[5px] my-0 mb-2.5
            relative text-center select-none w-[2.6rem]
            transition-all duration-200 ease-in
            bg-social-github hover:bg-text-black
          "></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="mb-2.5 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="
            fab fa-linkedin-in
            text-text-light rounded-[2.6rem] cursor-pointer inline-block
            text-[1.3rem] h-[2.6rem] leading-[2.6rem] mx-[5px] my-0 mb-2.5
            relative text-center select-none w-[2.6rem]
            transition-all duration-200 ease-in
            bg-social-linkedin hover:bg-text-black
          "></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="mb-2.5 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="
            fas fa-envelope
            text-text-light rounded-[2.6rem] cursor-pointer inline-block
            text-[1.3rem] h-[2.6rem] leading-[2.6rem] mx-[5px] my-0 mb-2.5
            relative text-center select-none w-[2.6rem]
            transition-all duration-200 ease-in
            bg-social-google hover:bg-text-black
          "></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="mb-2.5 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="
            fab fa-gitlab
            text-text-light rounded-[2.6rem] cursor-pointer inline-block
            text-[1.3rem] h-[2.6rem] leading-[2.6rem] mx-[5px] my-0 mb-2.5
            relative text-center select-none w-[2.6rem]
            transition-all duration-200 ease-in
            bg-social-gitlab hover:bg-text-black
          "></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="mb-2.5 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="
            fab fa-facebook-f
            text-text-light rounded-[2.6rem] cursor-pointer inline-block
            text-[1.3rem] h-[2.6rem] leading-[2.6rem] mx-[5px] my-0 mb-2.5
            relative text-center select-none w-[2.6rem]
            transition-all duration-200 ease-in
            bg-social-facebook hover:bg-text-black
          "></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="mb-2.5 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="
            fab fa-instagram
            text-text-light rounded-[2.6rem] cursor-pointer inline-block
            text-[1.3rem] h-[2.6rem] leading-[2.6rem] mx-[5px] my-0 mb-2.5
            relative text-center select-none w-[2.6rem]
            transition-all duration-200 ease-in
            bg-social-instagram hover:bg-text-black
          "></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="mb-2.5 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="
            fab fa-twitter
            text-text-light rounded-[2.6rem] cursor-pointer inline-block
            text-[1.3rem] h-[2.6rem] leading-[2.6rem] mx-[5px] my-0 mb-2.5
            relative text-center select-none w-[2.6rem]
            transition-all duration-200 ease-in
            bg-social-twitter hover:bg-text-black
          "></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.medium ? (
        <a
          href={socialMediaLinks.medium}
          className="mb-2.5 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="
            fab fa-medium
            text-text-light rounded-[2.6rem] cursor-pointer inline-block
            text-[1.3rem] h-[2.6rem] leading-[2.6rem] mx-[5px] my-0 mb-2.5
            relative text-center select-none w-[2.6rem]
            transition-all duration-200 ease-in
            bg-social-medium hover:bg-text-black
          "></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.stackoverflow ? (
        <a
          href={socialMediaLinks.stackoverflow}
          className="mb-2.5 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="
            fab fa-stack-overflow
            text-text-light rounded-[2.6rem] cursor-pointer inline-block
            text-[1.3rem] h-[2.6rem] leading-[2.6rem] mx-[5px] my-0 mb-2.5
            relative text-center select-none w-[2.6rem]
            transition-all duration-200 ease-in
            bg-social-stackoverflow hover:bg-text-black
          "></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.kaggle ? (
        <a
          href={socialMediaLinks.kaggle}
          className="mb-2.5 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="
            fab fa-kaggle
            text-text-light rounded-[2.6rem] cursor-pointer inline-block
            text-[1.3rem] h-[2.6rem] leading-[2.6rem] mx-[5px] my-0 mb-2.5
            relative text-center select-none w-[2.6rem]
            transition-all duration-200 ease-in
            bg-social-kaggle hover:bg-text-black
          "></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
