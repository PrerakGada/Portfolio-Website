import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jayesh Patil",
      title: "CEO, Lirante",
      rating: 5.0,
      text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
      image: null
    },
    {
      name: "Jayesh Patil",
      title: "CEO, Lirante",
      rating: 5.0,
      text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
      image: null
    }
  ];

  return (
    <section className="relative bg-bg-dark text-text-light overflow-hidden section-dark">
      {/* Background pattern */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-50 z-0"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(255, 140, 66, 0.03) 40px,
            rgba(255, 140, 66, 0.03) 80px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(34, 40, 50, 0.5) 40px,
            rgba(34, 40, 50, 0.5) 80px
          )`
        }}
      ></div>

      {/* Decorative sparkles */}
      <div className="absolute top-[15%] left-[10%] z-0 hidden tablet:block animate-[sparkle_2s_ease-in-out_infinite]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13 11L22 12L13 13L12 22L11 13L2 12L11 11L12 2Z" fill="white" opacity="0.6"/>
        </svg>
      </div>
      <div
        className="absolute top-[20%] right-[15%] z-0 hidden tablet:block animate-[sparkle_2s_ease-in-out_infinite]"
        style={{ animationDelay: '1s' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13 11L22 12L13 13L12 22L11 13L2 12L11 11L12 2Z" fill="white" opacity="0.6"/>
        </svg>
      </div>

      <div className="container">
        <div className="text-center mb-2xl tablet:mb-xl relative z-[1]">
          <h2 className="v2-section-title">
            Testimonials That
            <svg className="inline-block ml-xs" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 5L14 3L16 5L14 7L12 5Z" fill="#FF8C42"/>
            </svg>
            <br />
            Speak to <span className="text-orange">My Results</span>
          </h2>
          <p className="v2-section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum
            ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            lobortis orci elementum egestas lobortis.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))] gap-xl tablet:grid-cols-1 tablet:gap-lg relative z-[1]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-bg-dark/60 backdrop-blur-[20px] border border-text-light/10 rounded-lg p-xl tablet:p-lg relative transition-all duration-base hover:-translate-y-1 hover:border-primary-orange/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              {/* Quote mark */}
              <div className="absolute top-lg left-lg opacity-30">
                <svg width="60" height="60" viewBox="0 0 48 48" fill="none">
                  <path d="M12 18C12 14.6863 14.6863 12 18 12V12C21.3137 12 24 14.6863 24 18V24C24 27.3137 21.3137 30 18 30H12V18Z" fill="white" fillOpacity="0.15"/>
                  <path d="M28 18C28 14.6863 30.6863 12 34 12V12C37.3137 12 40 14.6863 40 18V24C40 27.3137 37.3137 30 34 30H28V18Z" fill="white" fillOpacity="0.15"/>
                </svg>
              </div>

              {/* Author */}
              <div className="flex items-center gap-md mb-md">
                <div className="flex-shrink-0">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.2"/>
                    <circle cx="24" cy="20" r="8" fill="white" fillOpacity="0.3"/>
                    <path d="M12 40C12 32 16 28 24 28C32 28 36 32 36 40H12Z" fill="white" fillOpacity="0.3"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-light mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-text-light/70">{testimonial.title}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-md">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FF8C42">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                ))}
                <span className="ml-xs text-lg font-bold text-text-light">{testimonial.rating}</span>
              </div>

              {/* Text */}
              <p className="text-base tablet:text-sm text-text-light/90 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes sparkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
