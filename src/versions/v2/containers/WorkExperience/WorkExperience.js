
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
    <section className="bg-white section" id="experience">
      <div className="container">
        <h2 className="v2-section-title text-center">
          My <span className="text-orange">Work Experience</span>
        </h2>

        <div className="max-w-[1100px] mx-auto mt-2xl px-md max-md:mt-xl">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_80px_1fr] gap-xl mb-2xl last:mb-0 relative opacity-0 animate-fadeInUp max-md:grid-cols-[1fr_60px_1fr] max-md:gap-md max-md:mb-xl max-[640px]:grid-cols-1 max-[640px]:gap-sm max-[640px]:mb-lg"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <div className="text-right pr-md max-[640px]:text-left max-[640px]:pr-0 max-[640px]:pl-10 max-[640px]:relative">
                <h3 className="text-2xl font-bold text-text-dark mb-sm leading-tight max-md:text-xl max-[640px]:text-lg">
                  {exp.company || `${exp.role} - ${exp.role}`}
                </h3>
                <p className="text-base text-text-gray font-regular max-md:text-sm">{exp.date}</p>
              </div>

              <div className="flex flex-col items-center relative max-[640px]:absolute max-[640px]:left-0 max-[640px]:top-0 max-[640px]:h-full">
                <div className={`w-7 h-7 rounded-circle border-[3px] flex-shrink-0 z-[2] relative max-md:w-6 max-md:h-6 max-[640px]:w-5 max-[640px]:h-5 ${
                  index % 2 === 0
                    ? 'bg-primary-orange border-primary-orange shadow-[0_0_0_4px_rgba(255,140,66,0.2)]'
                    : 'bg-primary-dark border-primary-dark shadow-[0_0_0_4px_rgba(43,45,58,0.15)]'
                }`}></div>
                {index < experiences.length - 1 && (
                  <div
                    className="flex-1 w-0.5 mt-sm min-h-[100px] max-[640px]:mt-2 max-[640px]:min-h-[60px]"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(to bottom, #8B92A8 0, #8B92A8 8px, transparent 8px, transparent 16px)'
                    }}
                  ></div>
                )}
              </div>

              <div className="pl-md max-[640px]:pl-10">
                <h3 className="text-2xl font-bold text-text-dark mb-sm leading-tight max-md:text-xl max-[640px]:text-lg">{exp.role}</h3>
                <p className="text-base text-text-gray leading-relaxed max-w-[420px] max-md:text-sm max-[640px]:max-w-full">
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
