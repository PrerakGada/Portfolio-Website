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
        <div className="podcast-header">
          <h1 className="text-[56px] max-md:text-[30px] max-md:text-center font-regular leading-[0px]">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode max-md:text-base max-md:leading-normal max-md:text-center"
                : "text-text-subtitle max-md:text-base max-md:leading-normal max-md:text-center"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 max-md:text-center">
          {podcastSection.podcast.map((podcastLink, i) => {
            if (!podcastLink) {
              console.log(
                `Podcast link for ${podcastSection.title} is missing`
              );
            }
            return (
              <div key={i}>
                <iframe
                  className="w-[600px] max-md:w-[300px]"
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
