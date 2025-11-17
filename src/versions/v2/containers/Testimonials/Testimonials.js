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
    <section className="relative bg-[var(--color-bg-dark)] text-[var(--color-text-light)] overflow-hidden section-dark">
      <div className="absolute top-0 left-0 w-full h-full opacity-50 z-0" style={{
        background: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255, 140, 66, 0.03) 40px, rgba(255, 140, 66, 0.03) 80px), repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(34, 40, 50, 0.5) 40px, rgba(34, 40, 50, 0.5) 80px)`
      }}></div>

      {/* Decorative sparkles */}
      <div className="absolute top-[15%] left-[10%] z-10 opacity-60 animate-pulse">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13 11L22 12L13 13L12 22L11 13L2 12L11 11L12 2Z" fill="white" opacity="0.6"/>
        </svg>
      </div>
      <div className="absolute bottom-[20%] right-[15%] z-10 opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13 11L22 12L13 13L12 22L11 13L2 12L11 11L12 2Z" fill="white" opacity="0.6"/>
        </svg>
      </div>

      <div className="container">
        <div className="text-center mb-[var(--spacing-xxl)] relative z-10 md:mb-[var(--spacing-xxl)] max-md:mb-[var(--spacing-xl)]">
          <h2 className="text-[var(--font-size-4xl)] font-bold text-[var(--color-text-light)] mb-[var(--spacing-md)] md:text-[var(--font-size-4xl)] max-md:text-[var(--font-size-3xl)]">
            Testimonials That
            <svg className="inline-block mx-2" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 5L14 3L16 5L14 7L12 5Z" fill="#FF8C42"/>
            </svg>
            <br />
            Speak to <span className="text-orange">My Results</span>
          </h2>
          <p className="text-[var(--font-size-md)] text-[var(--color-text-light)] opacity-80 max-w-[700px] mx-auto leading-[var(--line-height-relaxed)] md:text-[var(--font-size-md)] max-md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum
            ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            lobortis orci elementum egestas lobortis.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[var(--spacing-xl)] relative z-10 md:grid-cols-2 max-md:grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[rgba(43,45,58,0.6)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.1)] rounded-[var(--radius-lg)] p-[var(--spacing-lg)] relative">
              <div className="mb-[var(--spacing-md)]">
                <svg width="60" height="60" viewBox="0 0 48 48" fill="none">
                  <path d="M12 18C12 14.6863 14.6863 12 18 12V12C21.3137 12 24 14.6863 24 18V24C24 27.3137 21.3137 30 18 30H12V18Z" fill="white" fillOpacity="0.15"/>
                  <path d="M28 18C28 14.6863 30.6863 12 34 12V12C37.3137 12 40 14.6863 40 18V24C40 27.3137 37.3137 30 34 30H28V18Z" fill="white" fillOpacity="0.15"/>
                </svg>
              </div>

              <div className="flex items-center gap-[var(--spacing-md)] mb-[var(--spacing-md)]">
                <div className="w-12 h-12 flex-shrink-0">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.2"/>
                    <circle cx="24" cy="20" r="8" fill="white" fillOpacity="0.3"/>
                    <path d="M12 40C12 32 16 28 24 28C32 28 36 32 36 40H12Z" fill="white" fillOpacity="0.3"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-[rgba(255,255,255,0.7)]">{testimonial.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-[var(--spacing-md)]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FF8C42">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                ))}
                <span className="text-base font-semibold text-[var(--color-primary-orange)] ml-2">{testimonial.rating}</span>
              </div>

              <p className="text-base text-[rgba(255,255,255,0.8)] leading-[var(--line-height-relaxed)]">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
