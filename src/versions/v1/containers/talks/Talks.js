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
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-5xl font-normal leading-tight text-[var(--color-title)] max-md:text-3xl">
              {talkSection.title}
            </h1>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-subtitle)]">
              {talkSection.subtitle}
            </p>
          </div>
          <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))]">
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
