import React, {useContext} from "react";
import "./Talks.scss";
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
          <h1 className="talk-header-title">{talkSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            {talkSection.subtitle}
          </p>
          <div className="talk-container">
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
