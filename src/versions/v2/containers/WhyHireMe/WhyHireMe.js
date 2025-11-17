
const WhyHireMe = () => {
  const stats = [
    { number: "450+", label: "Project Completed" },
    { number: "450+", label: "Project Completed" }
  ];

  return (
    <section className="bg-bg-light section" id="about">
      <div className="container">
        <div className="grid grid-cols-2 gap-3xl items-center max-desktop:gap-2xl max-md:grid-cols-1 max-md:gap-xl">
          {/* Left - Image */}
          <div className="relative flex justify-center items-center min-h-[500px] max-md:min-h-[400px] max-[640px]:min-h-[350px]">
            <div
              className="absolute w-[450px] h-[550px] z-0 max-md:w-[350px] max-md:h-[450px] max-[640px]:w-[280px] max-[640px]:h-[380px]"
              style={{
                background: 'radial-gradient(ellipse, rgba(255, 140, 66, 0.35) 0%, rgba(255, 140, 66, 0.1) 50%, rgba(255, 140, 66, 0) 70%)',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
              }}
            ></div>
            <div className="relative z-[1] w-[400px] h-[450px] flex items-end justify-center max-md:w-[320px] max-md:h-[380px] max-[640px]:w-[260px] max-[640px]:h-[320px]">
              {/* Placeholder - replace with actual image */}
              <div className="w-full h-full flex items-end justify-center pb-10">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="w-full h-full">
                  <circle cx="100" cy="80" r="40" fill="#2C3E50" fillOpacity="0.2"/>
                  <path d="M50 180C50 150 70 130 100 130C130 130 150 150 150 180H50Z" fill="#2C3E50" fillOpacity="0.2"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="max-md:text-center">
            <h2 className="v2-section-title">
              Why <span className="text-orange">Hire me?</span>
            </h2>

            <p className="text-md text-text-gray leading-relaxed my-lg max-w-[500px] max-md:text-base max-md:my-md max-md:mx-auto max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
              posuere in justo vulputate, bibendum sodales
            </p>

            <div className="grid grid-cols-2 gap-xl mb-xl max-md:gap-lg max-md:mb-lg max-[640px]:grid-cols-1 max-[640px]:gap-md">
              {stats.map((stat, index) => (
                <div key={index} className="max-[640px]:text-center">
                  <h3 className="text-4xl font-extrabold text-text-dark mb-xs max-md:text-3xl">{stat.number}</h3>
                  <p className="text-md text-text-gray font-medium max-md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-outline">
              Hire me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
