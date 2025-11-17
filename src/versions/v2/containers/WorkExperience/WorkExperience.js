import React from "react";
import { workExperiences } from "../../../../shared/data/portfolio";

const WorkExperience = () => {
  // Use actual data or fallback to sample data
  const experiences = workExperiences.display && workExperiences.experience.length > 0
    ? workExperiences.experience.slice(0, 3) // Show first 3 experiences
    : [
        {
          company: "Cognizant, Mumbai",
          date: "Sep 2016- July 2020",
          role: "Experience Designer",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
        },
        {
          company: "Sugee Pvt limited, Mumbai",
          date: "Sep 2020- July 2023",
          role: "UI/UX Designer",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
        },
        {
          company: "Cinetstox, Mumbai",
          date: "Sep 2023",
          role: "Lead UX Designer",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
        }
      ];

  return (
    <section className="bg-[var(--color-bg-white)] py-[var(--spacing-xxxl)] md:py-[var(--spacing-xxxl)] max-md:py-[var(--spacing-xxl)]" id="experience">
      <div className="container">
        <h2 className="text-[var(--font-size-4xl)] font-bold text-[var(--color-text-dark)] mb-[var(--spacing-md)] text-center md:text-[var(--font-size-4xl)] max-md:text-[var(--font-size-3xl)]">
          My <span className="text-orange">Work Experience</span>
        </h2>

        <div className="max-w-[1100px] mx-auto mt-[var(--spacing-xxl)] px-[var(--spacing-md)] md:mt-[var(--spacing-xxl)] max-md:mt-[var(--spacing-xl)]">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_80px_1fr] gap-[var(--spacing-xl)] mb-[var(--spacing-xxl)] relative opacity-0 animate-fadeInUp md:grid-cols-[1fr_80px_1fr] md:gap-[var(--spacing-xl)] md:mb-[var(--spacing-xxl)] max-md:grid-cols-[1fr_60px_1fr] max-md:gap-[var(--spacing-md)] max-md:mb-[var(--spacing-xl)] max-sm:grid-cols-1 max-sm:gap-[var(--spacing-sm)] max-sm:mb-[var(--spacing-lg)] last:mb-0"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              <div className="text-right pr-[var(--spacing-md)] max-sm:text-left max-sm:pr-0 max-sm:pl-10 max-sm:relative">
                <h3 className="text-[var(--font-size-2xl)] font-bold text-[var(--color-text-dark)] mb-[var(--spacing-sm)] leading-[var(--line-height-tight)] md:text-[var(--font-size-2xl)] max-md:text-[var(--font-size-xl)] max-sm:text-[var(--font-size-lg)]">
                  {exp.company || `${exp.role} - ${exp.role}`}
                </h3>
                <p className="text-base text-[var(--color-text-gray)] font-normal md:text-base max-md:text-sm">
                  {exp.date}
                </p>
              </div>

              <div className="flex flex-col items-center relative max-sm:absolute max-sm:left-0 max-sm:top-0 max-sm:h-full">
                <div className={`w-7 h-7 rounded-[var(--radius-circle)] border-[3px] flex-shrink-0 z-[2] relative md:w-7 md:h-7 max-md:w-6 max-md:h-6 max-sm:w-5 max-sm:h-5 ${
                  index % 2 === 0
                    ? "bg-[var(--color-primary-orange)] border-[var(--color-primary-orange)] shadow-[0_0_0_4px_rgba(255,140,66,0.2)]"
                    : "bg-[var(--color-primary-dark)] border-[var(--color-primary-dark)] shadow-[0_0_0_4px_rgba(43,45,58,0.15)]"
                }`}></div>
                {index < experiences.length - 1 && (
                  <div className="flex-1 w-0.5 mt-[var(--spacing-sm)] min-h-[100px] max-sm:mt-2 max-sm:min-h-[60px]" style={{
                    backgroundImage: `repeating-linear-gradient(to bottom, var(--color-text-gray) 0, var(--color-text-gray) 8px, transparent 8px, transparent 16px)`
                  }}></div>
                )}
              </div>

              <div className="pl-[var(--spacing-md)] max-sm:pl-10">
                <h3 className="text-[var(--font-size-2xl)] font-bold text-[var(--color-text-dark)] mb-[var(--spacing-sm)] leading-[var(--line-height-tight)] md:text-[var(--font-size-2xl)] max-md:text-[var(--font-size-xl)] max-sm:text-[var(--font-size-lg)]">
                  {exp.role}
                </h3>
                <p className="text-base text-[var(--color-text-gray)] leading-[var(--line-height-relaxed)] max-w-[420px] md:text-base max-md:text-sm max-sm:max-w-full">
                  {exp.desc || exp.descBullets?.[0] || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
