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
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading text-[56px] max-[1380px]:text-[40px] max-md:text-[30px] max-md:text-center font-regular leading-normal m-0"
                  : "heading text-[56px] max-[1380px]:text-[40px] max-md:text-[30px] max-md:text-center font-regular leading-normal m-0"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode text-text-subtitle uppercase m-0 mb-[50px] max-md:text-base max-md:leading-normal max-md:text-center"
                  : "text-text-subtitle uppercase m-0 mb-[50px] max-md:text-base max-md:leading-normal max-md:text-center"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
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
