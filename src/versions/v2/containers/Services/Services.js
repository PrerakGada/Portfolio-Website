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

  const blobFloatKeyframes = `
    @keyframes blobFloat {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      33% {
        transform: translate(30px, -30px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
    }
  `;

  return (
    <section className="relative bg-bg-dark text-text-light overflow-hidden" id="service">
      <style>{blobFloatKeyframes}</style>

      {/* Background Pattern */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-50 z-0"
        style={{
          background: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255, 140, 66, 0.03) 40px, rgba(255, 140, 66, 0.03) 80px), repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(34, 40, 50, 0.5) 40px, rgba(34, 40, 50, 0.5) 80px)`
        }}
      ></div>

      {/* Decorative Blobs */}
      <div
        className="absolute rounded-circle blur-[60px] opacity-30 z-0 w-[400px] h-[400px] -top-[100px] -left-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 140, 66, 0.4) 0%, rgba(255, 140, 66, 0) 70%)',
          animation: 'blobFloat 8s ease-in-out infinite'
        }}
      ></div>
      <div
        className="absolute rounded-circle blur-[60px] opacity-30 z-0 w-[500px] h-[500px] -bottom-[150px] -right-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 140, 66, 0.3) 0%, rgba(255, 140, 66, 0) 70%)',
          animation: 'blobFloat 8s ease-in-out infinite',
          animationDelay: '-4s'
        }}
      ></div>

      <div className="container">
        <div className="text-center mb-xl tablet:mb-2xl relative z-10">
          <h2 className="text-3xl tablet:text-4xl font-bold text-text-light mb-md">
            My <span className="text-primary-orange">Services</span>
          </h2>
          <p className="text-base tablet:text-md text-[rgba(255,255,255,0.8)] max-w-[700px] mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
            posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        <div className="relative z-10 overflow-hidden mb-lg">
          <div
            className="flex gap-md desktop:gap-lg transition-transform duration-slow ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 33.33}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-[0_0_calc(100%-1rem)] min-w-[calc(100%-1rem)] tablet:flex-[0_0_calc(50%-1rem)] tablet:min-w-[calc(50%-1rem)] desktop:flex-[0_0_calc(33.333%-2rem)] desktop:min-w-[calc(33.333%-2rem)]"
              >
                <div className="group bg-[rgba(31,33,40,0.6)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.1)] rounded-lg p-lg min-h-[380px] tablet:min-h-[450px] flex flex-col relative transition-all duration-base hover:-translate-y-2 hover:border-[rgba(255,140,66,0.3)] hover:shadow-[0_20px_40px_rgba(255,140,66,0.15)]">
                  <h3 className="text-xl tablet:text-2xl font-bold text-text-light mb-lg pb-md border-b border-[rgba(255,255,255,0.1)]">
                    {service.title}
                  </h3>

                  <div className="flex-1 flex items-center justify-center py-md mb-md">
                    {/* Placeholder for service mockup images */}
                    <div className="grid grid-cols-3 gap-sm w-full max-w-[280px] tablet:max-w-[320px]">
                      <div className="aspect-square bg-gradient-to-br from-[rgba(255,140,66,0.2)] to-[rgba(255,255,255,0.05)] rounded-md border border-[rgba(255,255,255,0.1)] relative overflow-hidden col-span-2 row-span-2 before:content-[''] before:absolute before:top-2 before:left-2 before:right-2 before:bottom-2 before:rounded-sm before:bg-[rgba(255,255,255,0.03)]"></div>
                      <div className="aspect-square bg-gradient-to-br from-[rgba(255,140,66,0.2)] to-[rgba(255,255,255,0.05)] rounded-md border border-[rgba(255,255,255,0.1)] relative overflow-hidden before:content-[''] before:absolute before:top-2 before:left-2 before:right-2 before:bottom-2 before:rounded-sm before:bg-[rgba(255,255,255,0.03)]"></div>
                      <div className="aspect-square bg-gradient-to-br from-[rgba(255,140,66,0.2)] to-[rgba(255,255,255,0.05)] rounded-md border border-[rgba(255,255,255,0.1)] relative overflow-hidden before:content-[''] before:absolute before:top-2 before:left-2 before:right-2 before:bottom-2 before:rounded-sm before:bg-[rgba(255,255,255,0.03)]"></div>
                    </div>
                  </div>

                  <button className="absolute bottom-lg right-lg w-[50px] h-[50px] tablet:w-[60px] tablet:h-[60px] rounded-circle bg-[rgba(43,45,58,0.8)] text-text-light flex items-center justify-center transition-all duration-base cursor-pointer hover:bg-primary-orange group-hover:bg-primary-orange group-hover:translate-x-1 group-hover:-translate-y-1" aria-label="View service details">
                    <svg className="w-6 h-6 tablet:w-7 tablet:h-7" width="24" height="24" viewBox="0 0 24 24" fill="none">
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

        <div className="flex justify-center items-center gap-sm relative z-10">
          {services.map((_, index) => (
            <button
              key={index}
              className={`border-0 cursor-pointer transition-all duration-base p-0 ${
                activeSlide === index
                  ? 'w-10 h-3 rounded-full bg-primary-orange'
                  : 'w-3 h-3 rounded-circle bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)]'
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
