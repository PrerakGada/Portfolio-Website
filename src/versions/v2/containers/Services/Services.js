import React, { useState } from "react";

const Services = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const services = [
    {
      title: "UI/ UX Design",
      description: "Creating intuitive and engaging user experiences",
      icon: "design"
    },
    {
      title: "Web Design",
      description: "Modern and responsive website designs",
      icon: "web"
    },
    {
      title: "Landing Page",
      description: "High-converting landing page designs",
      icon: "landing"
    }
  ];

  const totalSlides = services.length;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="relative bg-[var(--color-bg-dark)] text-[var(--color-text-light)] overflow-hidden section-dark" id="service">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 z-0" style={{
        background: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255, 140, 66, 0.03) 40px, rgba(255, 140, 66, 0.03) 80px), repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(34, 40, 50, 0.5) 40px, rgba(34, 40, 50, 0.5) 80px)`
      }}></div>

      {/* Decorative Blobs */}
      <div className="absolute rounded-full blur-[60px] opacity-30 z-0 animate-blob w-[400px] h-[400px] -top-[100px] -left-[100px]" style={{ background: 'radial-gradient(circle, rgba(255, 140, 66, 0.4) 0%, rgba(255, 140, 66, 0) 70%)' }}></div>
      <div className="absolute rounded-full blur-[60px] opacity-30 z-0 animate-blob-delay w-[500px] h-[500px] -bottom-[150px] -right-[150px]" style={{ background: 'radial-gradient(circle, rgba(255, 140, 66, 0.3) 0%, rgba(255, 140, 66, 0) 70%)' }}></div>

      <div className="container">
        <div className="text-center mb-[var(--spacing-xxl)] relative z-10 md:mb-[var(--spacing-xxl)] max-md:mb-[var(--spacing-xl)]">
          <h2 className="text-[var(--font-size-4xl)] font-bold text-[var(--color-text-light)] mb-[var(--spacing-md)] md:text-[var(--font-size-4xl)] max-md:text-[var(--font-size-3xl)]">
            My <span className="text-orange">Services</span>
          </h2>
          <p className="text-[var(--font-size-md)] text-[var(--color-text-light)] opacity-80 max-w-[700px] mx-auto leading-[var(--line-height-relaxed)] md:text-[var(--font-size-md)] max-md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
            posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        <div className="relative z-10 overflow-hidden mb-[var(--spacing-lg)]">
          <div className="flex gap-[var(--spacing-lg)] transition-transform duration-500 ease-in-out lg:gap-[var(--spacing-lg)] max-lg:gap-[var(--spacing-md)]" style={{ transform: `translateX(-${activeSlide * 33.33}%)` }}>
            {services.map((service, index) => (
              <div key={index} className="flex-[0_0_calc(33.333%-var(--spacing-lg))] min-w-[calc(33.333%-var(--spacing-lg))] lg:flex-[0_0_calc(33.333%-var(--spacing-lg))] lg:min-w-[calc(33.333%-var(--spacing-lg))] max-lg:flex-[0_0_calc(50%-var(--spacing-md))] max-lg:min-w-[calc(50%-var(--spacing-md))] max-md:flex-[0_0_calc(100%-var(--spacing-md))] max-md:min-w-[calc(100%-var(--spacing-md))]">
                <div className="bg-[rgba(31,33,40,0.6)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.1)] rounded-[var(--radius-lg)] p-[var(--spacing-lg)] min-h-[450px] flex flex-col relative transition-all duration-[var(--transition-base)] md:min-h-[450px] max-md:min-h-[380px] hover:-translate-y-2 hover:border-[rgba(255,140,66,0.3)] hover:shadow-[0_20px_40px_rgba(255,140,66,0.15)] group">
                  <h3 className="text-[var(--font-size-2xl)] font-bold text-[var(--color-text-light)] mb-[var(--spacing-lg)] pb-[var(--spacing-md)] border-b border-[rgba(255,255,255,0.1)] md:text-[var(--font-size-2xl)] max-md:text-[var(--font-size-xl)]">
                    {service.title}
                  </h3>

                  <div className="flex-1 flex items-center justify-center py-[var(--spacing-md)] mb-[var(--spacing-md)]">
                    {/* Placeholder for service mockup images */}
                    <div className="grid grid-cols-3 gap-[var(--spacing-sm)] w-full max-w-[320px] md:max-w-[320px] max-md:max-w-[280px]">
                      <div className="aspect-square rounded-[var(--radius-md)] border border-[rgba(255,255,255,0.1)] relative overflow-hidden col-span-2 row-span-2" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)' }}>
                        <div className="absolute top-2 left-2 right-2 bottom-2 rounded-[var(--radius-sm)] bg-[rgba(255,255,255,0.03)]"></div>
                      </div>
                      <div className="aspect-square rounded-[var(--radius-md)] border border-[rgba(255,255,255,0.1)] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)' }}>
                        <div className="absolute top-2 left-2 right-2 bottom-2 rounded-[var(--radius-sm)] bg-[rgba(255,255,255,0.03)]"></div>
                      </div>
                      <div className="aspect-square rounded-[var(--radius-md)] border border-[rgba(255,255,255,0.1)] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)' }}>
                        <div className="absolute top-2 left-2 right-2 bottom-2 rounded-[var(--radius-sm)] bg-[rgba(255,255,255,0.03)]"></div>
                      </div>
                    </div>
                  </div>

                  <button className="absolute bottom-[var(--spacing-lg)] right-[var(--spacing-lg)] w-[60px] h-[60px] rounded-[var(--radius-circle)] bg-[rgba(43,45,58,0.8)] text-[var(--color-text-light)] flex items-center justify-center transition-all duration-[var(--transition-base)] cursor-pointer md:w-[60px] md:h-[60px] max-md:w-[50px] max-md:h-[50px] hover:bg-[var(--color-primary-orange)] group-hover:bg-[var(--color-primary-orange)] group-hover:translate-x-1 group-hover:-translate-y-1" aria-label="View service details">
                    <svg className="w-7 h-7 md:w-7 md:h-7 max-md:w-6 max-md:h-6" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-[var(--spacing-sm)] relative z-10">
          {services.map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-[var(--radius-circle)] border-0 cursor-pointer transition-all duration-[var(--transition-base)] p-0 ${
                activeSlide === index
                  ? "bg-[var(--color-primary-orange)] w-10 rounded-[var(--radius-full)]"
                  : "bg-[rgba(255,255,255,0.3)] w-3 hover:bg-[rgba(255,255,255,0.5)]"
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
