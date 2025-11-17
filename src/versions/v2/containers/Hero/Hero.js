import React from "react";
import { greeting } from "../../../../shared/data/portfolio";

const Hero = () => {
  // Sample testimonial data - can be moved to portfolio.js later
  const testimonial = {
    text: "Jenny's Exceptional product design ensure our website's success. Highly Recommended",
    author: "Client"
  };

  const experience = {
    years: "10 Years",
    label: "Experience"
  };

  return (
    <section className="min-h-screen flex items-center pt-[120px] pb-[var(--spacing-xxxl)] bg-[var(--color-bg-white)] relative overflow-hidden md:pt-[120px] max-md:pt-[100px] max-md:pb-[var(--spacing-xxl)] max-md:min-h-auto" id="home">
      <div className="container">
        <div className="text-center relative z-10">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 mb-[var(--spacing-md)] animate-fadeIn">
            <span className="bg-[var(--color-bg-white)] border-2 border-[var(--color-primary-dark)] rounded-[var(--radius-full)] px-5 py-2 text-base font-medium text-[var(--color-text-dark)]">Hello!</span>
            <svg className="animate-wave" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5L14 3L16 5L14 7L12 5Z" fill="#FF8C42"/>
              <path d="M14 7L16 5L18 7L16 9L14 7Z" fill="#FF8C42"/>
              <path d="M16 9L18 7L19 8L17 10L16 9Z" fill="#FF8C42"/>
            </svg>
          </div>

          {/* Main Title */}
          <h1 className="text-[80px] font-bold text-[var(--color-text-dark)] mb-[var(--spacing-xl)] leading-[1.1] animate-fadeInUp lg:text-[80px] max-lg:text-[64px] md:text-[64px] max-md:text-[48px] max-md:mb-[var(--spacing-lg)] max-sm:text-[40px]">
            I'm <span className="text-orange">{greeting.username},</span>
            <br />
            Product Designer
          </h1>

          {/* Main Content Grid */}
          <div className="grid grid-cols-[1fr_2fr_1fr] gap-[var(--spacing-xl)] items-center mt-[var(--spacing-xxl)] animate-fadeInUp-delay lg:grid-cols-[1fr_2fr_1fr] max-lg:grid-cols-1 max-lg:gap-[var(--spacing-lg)]">
            {/* Left - Testimonial */}
            <div className="text-left p-[var(--spacing-lg)] lg:text-left max-lg:text-center max-lg:p-[var(--spacing-md)]">
              <svg className="mb-[var(--spacing-sm)] opacity-30 lg:block max-lg:hidden" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M12 18C12 14.6863 14.6863 12 18 12V12C21.3137 12 24 14.6863 24 18V24C24 27.3137 21.3137 30 18 30H12V18Z" fill="#2C3E50" fillOpacity="0.2"/>
                <path d="M28 18C28 14.6863 30.6863 12 34 12V12C37.3137 12 40 14.6863 40 18V24C40 27.3137 37.3137 30 34 30H28V18Z" fill="#2C3E50" fillOpacity="0.2"/>
              </svg>
              <p className="text-[var(--font-size-md)] text-[var(--color-text-dark)] leading-[var(--line-height-relaxed)] font-medium max-w-[280px] lg:text-[var(--font-size-md)] lg:max-w-[280px] max-lg:max-w-full max-lg:text-base md:block max-md:hidden">
                {testimonial.text}
              </p>
            </div>

            {/* Center - Hero Image */}
            <div className="relative flex flex-col items-center gap-[var(--spacing-xl)]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-[var(--radius-circle)] z-0 md:w-[500px] md:h-[500px] max-md:w-[350px] max-md:h-[350px] max-sm:w-[280px] max-sm:h-[280px]" style={{ background: 'radial-gradient(circle, rgba(255, 140, 66, 0.4) 0%, rgba(255, 140, 66, 0.15) 50%, rgba(255, 140, 66, 0) 70%)' }}></div>
              <div className="relative z-10 w-[400px] h-[400px] flex items-center justify-center md:w-[400px] md:h-[400px] max-md:w-[300px] max-md:h-[300px] max-sm:w-[250px] max-sm:h-[250px]">
                {/* Placeholder - replace with actual image */}
                <div className="w-full h-full flex items-end justify-center pb-5">
                  <svg className="w-full h-full" width="200" height="200" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="80" r="40" fill="#2C3E50" fillOpacity="0.2"/>
                    <path d="M50 180C50 150 70 130 100 130C130 130 150 150 150 180H50Z" fill="#2C3E50" fillOpacity="0.2"/>
                  </svg>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-[var(--spacing-md)] relative z-20 max-sm:flex-col max-sm:gap-[var(--spacing-sm)] max-sm:w-full">
                <a href="#portfolio" className="btn-primary inline-flex items-center gap-2 max-sm:w-full max-sm:max-w-[300px]">
                  Portfolio
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[var(--color-primary-orange)] text-[var(--color-primary-orange)] rounded-[var(--radius-full)] font-medium transition-all duration-[0.3s] hover:bg-[var(--color-primary-orange)] hover:text-white max-sm:w-full max-sm:max-w-[300px]">
                  Hire me
                </a>
              </div>
            </div>

            {/* Right - Experience Badge */}
            <div className="text-right p-[var(--spacing-lg)] lg:text-right max-lg:text-center max-lg:p-[var(--spacing-md)]">
              <div className="flex gap-1 justify-end mb-[var(--spacing-sm)] lg:justify-end max-lg:justify-center">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} width="28" height="28" viewBox="0 0 24 24" fill="#FF8C42" style={{ filter: 'drop-shadow(0 2px 4px rgba(255, 140, 66, 0.3))' }}>
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <div className="lg:inline-block max-lg:inline-block">
                <h3 className="text-[var(--font-size-4xl)] font-extrabold text-[var(--color-text-dark)] mb-1 md:text-[var(--font-size-4xl)] max-md:text-[var(--font-size-3xl)]">
                  {experience.years}
                </h3>
                <p className="text-[var(--font-size-md)] text-[var(--color-text-gray)] font-medium md:text-[var(--font-size-md)] max-md:text-base">
                  {experience.label}
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute z-0 opacity-60 top-[30%] left-[10%] animate-float md:block max-md:hidden">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path d="M20 40C20 40 30 20 40 40C50 60 60 40 60 40" stroke="#FF8C42" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="absolute z-0 opacity-60 bottom-[20%] right-[8%] animate-float-reverse md:block max-md:hidden">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <path d="M30 50Q40 30 50 50T70 50" stroke="#FF8C42" strokeWidth="3" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
