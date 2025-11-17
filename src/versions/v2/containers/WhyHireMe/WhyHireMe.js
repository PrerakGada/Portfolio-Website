import React from "react";

const WhyHireMe = () => {
  const stats = [
    { number: "450+", label: "Project Completed" },
    { number: "450+", label: "Project Completed" }
  ];

  return (
    <section className="bg-[var(--color-bg-light)] py-[var(--spacing-xxxl)] md:py-[var(--spacing-xxxl)] max-md:py-[var(--spacing-xxl)]" id="about">
      <div className="container">
        <div className="grid grid-cols-2 gap-[var(--spacing-xxxl)] items-center lg:grid-cols-2 lg:gap-[var(--spacing-xxxl)] max-lg:gap-[var(--spacing-xxl)] max-md:grid-cols-1 max-md:gap-[var(--spacing-xl)]">
          {/* Left - Image */}
          <div className="relative flex justify-center items-center min-h-[500px] md:min-h-[500px] max-md:min-h-[400px] max-sm:min-h-[350px]">
            <div className="absolute w-[450px] h-[550px] z-0 md:w-[450px] md:h-[550px] max-md:w-[350px] max-md:h-[450px] max-sm:w-[280px] max-sm:h-[380px]" style={{
              background: 'radial-gradient(ellipse, rgba(255, 140, 66, 0.35) 0%, rgba(255, 140, 66, 0.1) 50%, rgba(255, 140, 66, 0) 70%)',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
            }}></div>
            <div className="relative z-10 w-[400px] h-[450px] flex items-end justify-center md:w-[400px] md:h-[450px] max-md:w-[320px] max-md:h-[380px] max-sm:w-[260px] max-sm:h-[320px]">
              {/* Placeholder - replace with actual image */}
              <div className="w-full h-full flex items-end justify-center pb-10">
                <svg className="w-full h-full" width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="80" r="40" fill="#2C3E50" fillOpacity="0.2"/>
                  <path d="M50 180C50 150 70 130 100 130C130 130 150 150 150 180H50Z" fill="#2C3E50" fillOpacity="0.2"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="md:text-left max-md:text-center">
            <h2 className="text-[var(--font-size-4xl)] font-bold text-[var(--color-text-dark)] mb-[var(--spacing-md)] md:text-[var(--font-size-4xl)] max-md:text-[var(--font-size-3xl)]">
              Why <span className="text-orange">Hire me?</span>
            </h2>

            <p className="text-[var(--font-size-md)] text-[var(--color-text-gray)] leading-[var(--line-height-relaxed)] my-[var(--spacing-lg)] mb-[var(--spacing-xl)] max-w-[500px] md:text-[var(--font-size-md)] md:my-[var(--spacing-lg)] md:mb-[var(--spacing-xl)] md:max-w-[500px] max-md:text-base max-md:my-[var(--spacing-md)] max-md:mb-[var(--spacing-lg)] max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
              posuere in justo vulputate, bibendum sodales
            </p>

            <div className="grid grid-cols-2 gap-[var(--spacing-xl)] mb-[var(--spacing-xl)] md:grid-cols-2 md:gap-[var(--spacing-xl)] md:mb-[var(--spacing-xl)] max-md:gap-[var(--spacing-lg)] max-md:mb-[var(--spacing-lg)] max-sm:grid-cols-1 max-sm:gap-[var(--spacing-md)]">
              {stats.map((stat, index) => (
                <div key={index} className="max-sm:text-center">
                  <h3 className="text-[var(--font-size-4xl)] font-extrabold text-[var(--color-text-dark)] mb-[var(--spacing-xs)] md:text-[var(--font-size-4xl)] max-md:text-[var(--font-size-3xl)]">
                    {stat.number}
                  </h3>
                  <p className="text-[var(--font-size-md)] text-[var(--color-text-gray)] font-medium md:text-[var(--font-size-md)] max-md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[var(--color-primary-orange)] text-[var(--color-primary-orange)] rounded-[var(--radius-full)] font-medium transition-all duration-[0.3s] hover:bg-[var(--color-primary-orange)] hover:text-white">
              Hire me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
