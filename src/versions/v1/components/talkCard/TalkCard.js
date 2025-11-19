import React from "react";
import cardBackground from "../../../../assets/images/talksCardBack.svg";

export default function TalkCard({talkDetails}) {
  return (
    <div className="talk-card-container flex w-full justify-center">
      <div className="flex w-full justify-center">
        <div
          className={`rectangle relative mt-12 w-full max-w-[23.75rem] overflow-hidden rounded-lg bg-cover bg-center shadow-[0_20px_50px_var(--shadow-dark)] transition-shadow duration-300 hover:shadow-[0_20px_40px_var(--shadow-light-darker)] ${
            talkDetails.isDark ? "shadow-[0_0_20px_var(--shadow-dark-2)]" : ""
          }`}
          style={{backgroundImage: `url(${cardBackground})`}}
        >
          <div className="diagonal-fill absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30"></div>
          <div className="relative z-10 px-8 pb-10 pt-8 text-left text-[var(--color-text-dark)]">
            <div
              className="talk-card-title text-[1.625rem] font-semibold leading-snug"
              style={{display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical"}}
            >
              {talkDetails.title}
            </div>
            <p
              className="talk-card-subtitle mt-6 text-justify text-base text-[var(--color-talk-subtitle)]"
              style={{display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical"}}
            >
              {talkDetails.subtitle}
            </p>

            <div className="card-footer-button-div mt-4 flex gap-2 px-6">
              <a
                href={talkDetails.slides_url}
                target="_blank"
                rel="noreferrer noopener"
                className="talk-button inline-flex flex-1 justify-center rounded-md bg-[var(--color-button)] px-4 py-2 text-center text-sm font-semibold uppercase tracking-wide text-[var(--color-text-dark)] transition-colors duration-200 hover:bg-[var(--color-button-hover)]"
              >
                Slides
              </a>
              <a
                href={talkDetails.event_url}
                target="_blank"
                rel="noreferrer noopener"
                className="talk-button inline-flex flex-1 justify-center rounded-md bg-[var(--color-button)] px-4 py-2 text-center text-sm font-semibold uppercase tracking-wide text-[var(--color-text-dark)] transition-colors duration-200 hover:bg-[var(--color-button-hover)]"
              >
                Event
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
