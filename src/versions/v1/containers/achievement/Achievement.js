import React, {useContext} from "react";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../../../shared/data/portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../../../shared/contexts/StyleContext";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-5xl font-normal leading-tight text-[var(--color-title)] max-xl:text-4xl max-md:text-3xl">
              {achievementSection.title}
            </h1>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-subtitle)]">
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
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
