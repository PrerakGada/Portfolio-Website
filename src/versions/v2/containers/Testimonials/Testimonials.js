
import "./Testimonials.scss";

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
    <section className="v2-testimonials section-dark">
      <div className="v2-testimonials-bg-pattern"></div>

      {/* Decorative sparkles */}
      <div className="v2-sparkle v2-sparkle-1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13 11L22 12L13 13L12 22L11 13L2 12L11 11L12 2Z" fill="white" opacity="0.6"/>
        </svg>
      </div>
      <div className="v2-sparkle v2-sparkle-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13 11L22 12L13 13L12 22L11 13L2 12L11 11L12 2Z" fill="white" opacity="0.6"/>
        </svg>
      </div>

      <div className="container">
        <div className="v2-testimonials-header">
          <h2 className="v2-section-title">
            Testimonials That
            <svg className="v2-title-hand" width="32" height="32" viewBox="0 0 24 24" fill="none">
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

        <div className="v2-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="v2-testimonial-card">
              <div className="v2-quote-mark">
                <svg width="60" height="60" viewBox="0 0 48 48" fill="none">
                  <path d="M12 18C12 14.6863 14.6863 12 18 12V12C21.3137 12 24 14.6863 24 18V24C24 27.3137 21.3137 30 18 30H12V18Z" fill="white" fillOpacity="0.15"/>
                  <path d="M28 18C28 14.6863 30.6863 12 34 12V12C37.3137 12 40 14.6863 40 18V24C40 27.3137 37.3137 30 34 30H28V18Z" fill="white" fillOpacity="0.15"/>
                </svg>
              </div>

              <div className="v2-testimonial-author">
                <div className="v2-author-avatar">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.2"/>
                    <circle cx="24" cy="20" r="8" fill="white" fillOpacity="0.3"/>
                    <path d="M12 40C12 32 16 28 24 28C32 28 36 32 36 40H12Z" fill="white" fillOpacity="0.3"/>
                  </svg>
                </div>
                <div>
                  <h4 className="v2-author-name">{testimonial.name}</h4>
                  <p className="v2-author-title">{testimonial.title}</p>
                </div>
              </div>

              <div className="v2-testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FF8C42">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                ))}
                <span className="v2-rating-value">{testimonial.rating}</span>
              </div>

              <p className="v2-testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
