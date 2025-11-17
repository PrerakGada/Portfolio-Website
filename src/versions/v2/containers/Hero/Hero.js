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
    <section className="min-h-auto tablet:min-h-screen flex items-center pt-[100px] tablet:pt-[120px] pb-2xl tablet:pb-3xl bg-white relative overflow-hidden" id="home">
      <div className="container">
        <div className="text-center relative z-10">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 mb-md animate-fadeIn">
            <span className="bg-white border-2 border-primary-dark rounded-full px-5 py-2 text-base font-medium text-text-dark">Hello!</span>
            <svg className="animate-wave" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5L14 3L16 5L14 7L12 5Z" fill="#FF8C42"/>
              <path d="M14 7L16 5L18 7L16 9L14 7Z" fill="#FF8C42"/>
              <path d="M16 9L18 7L19 8L17 10L16 9Z" fill="#FF8C42"/>
            </svg>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl tablet:text-5xl desktop:text-6xl font-bold text-text-dark mb-xl tablet:mb-lg desktop:mb-xl leading-tight animate-fadeInUp [animation-delay:0.2s] [animation-fill-mode:both]">
            I'm <span className="text-primary-orange">{greeting.username},</span>
            <br />
            Product Designer
          </h1>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 desktop:grid-cols-[1fr_2fr_1fr] gap-lg desktop:gap-xl items-center mt-2xl animate-fadeInUp [animation-delay:0.4s] [animation-fill-mode:both]">
            {/* Left - Testimonial */}
            <div className="text-center desktop:text-left p-md desktop:p-lg">
              <svg className="hidden desktop:block mb-sm opacity-30" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M12 18C12 14.6863 14.6863 12 18 12V12C21.3137 12 24 14.6863 24 18V24C24 27.3137 21.3137 30 18 30H12V18Z" fill="#2C3E50" fillOpacity="0.2"/>
                <path d="M28 18C28 14.6863 30.6863 12 34 12V12C37.3137 12 40 14.6863 40 18V24C40 27.3137 37.3137 30 34 30H28V18Z" fill="#2C3E50" fillOpacity="0.2"/>
              </svg>
              <p className="hidden tablet:block text-base desktop:text-md text-text-dark leading-relaxed font-medium max-w-full desktop:max-w-[280px]">{testimonial.text}</p>
            </div>

            {/* Center - Hero Image */}
            <div className="relative flex flex-col items-center gap-xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] tablet:w-[500px] tablet:h-[500px] bg-gradient-orange rounded-circle z-0"></div>
              <div className="relative z-10 w-[250px] h-[250px] tablet:w-[300px] tablet:h-[300px] desktop:w-[400px] desktop:h-[400px] flex items-center justify-center">
                {/* Placeholder - replace with actual image */}
                <div className="w-full h-full flex items-end justify-center pb-5">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="80" r="40" fill="#2C3E50" fillOpacity="0.2"/>
                    <path d="M50 180C50 150 70 130 100 130C130 130 150 150 150 180H50Z" fill="#2C3E50" fillOpacity="0.2"/>
                  </svg>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-sm sm:gap-md w-full sm:w-auto relative z-20">
                <a href="#portfolio" className="btn btn-primary inline-flex items-center gap-2 w-full max-w-[300px] sm:w-auto sm:max-w-none">
                  Portfolio
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#contact" className="btn btn-outline inline-flex items-center gap-2 w-full max-w-[300px] sm:w-auto sm:max-w-none">
                  Hire me
                </a>
              </div>
            </div>

            {/* Right - Experience Badge */}
            <div className="text-center desktop:text-right p-md desktop:p-lg">
              <div className="flex gap-1 justify-center desktop:justify-end mb-sm [&>svg]:drop-shadow-[0_2px_4px_rgba(255,140,66,0.3)]">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} width="28" height="28" viewBox="0 0 24 24" fill="#FF8C42">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <div className="desktop:inline-block">
                <h3 className="text-3xl tablet:text-4xl font-extrabold text-text-dark mb-1">{experience.years}</h3>
                <p className="text-base tablet:text-md text-text-gray font-medium">{experience.label}</p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="hidden tablet:block absolute top-[30%] left-[10%] z-0 opacity-60 animate-float">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path d="M20 40C20 40 30 20 40 40C50 60 60 40 60 40" stroke="#FF8C42" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="hidden tablet:block absolute bottom-[20%] right-[8%] z-0 opacity-60 [animation:float_4s_ease-in-out_infinite_reverse]">
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
