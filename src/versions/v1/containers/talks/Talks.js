import React, {useContext} from "react";
import TalkCard from "../../components/talkCard/TalkCard";
import {talkSection} from "../../../../shared/data/portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../../../shared/contexts/StyleContext";

export default function Talks() {
  const {isDark} = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="text-[56px] max-md:text-[26px] max-md:text-center font-regular leading-[0px]">{talkSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode max-md:text-base max-md:leading-normal max-md:text-center"
                : "text-text-subtitle max-md:text-base max-md:leading-normal max-md:text-center"
            }
          >
            {talkSection.subtitle}
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4 gap-x-12">
          {talkSection.talks.map((talk, i) => {
            return (
              <TalkCard
                key={i}
                talkDetails={{
                  title: talk.title,
                  subtitle: talk.subtitle,
                  slides_url: talk.slides_url,
                  event_url: talk.event_url,
                  image: talk.image,
                  isDark
                }}
              />
            );
          })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
