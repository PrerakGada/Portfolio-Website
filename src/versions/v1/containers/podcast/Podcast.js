import React, {useContext} from "react";
import {podcastSection} from "../../../../shared/data/portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../../../shared/contexts/StyleContext";

export default function Podcast() {
  const {isDark} = useContext(StyleContext);

  if (!podcastSection)
    console.error("podcastSection object for Podcast section is missing");

  if (!podcastSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="text-center">
          <h1 className="text-5xl font-normal leading-tight text-[var(--color-title)] max-md:text-3xl">
            {podcastSection.title}
          </h1>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-subtitle)]">
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="mt-8 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {podcastSection.podcast.map((podcastLink, i) => {
            if (!podcastLink) {
              console.log(
                `Podcast link for ${podcastSection.title} is missing`
              );
            }
            return (
              <div key={i}>
                <iframe
                  className="h-[200px] w-full rounded-lg border border-[var(--color-border-light)] shadow-sm"
                  src={podcastLink}
                  frameBorder="0"
                  scrolling="no"
                  title="Podcast"
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
