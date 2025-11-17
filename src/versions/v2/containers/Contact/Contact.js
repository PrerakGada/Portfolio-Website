import React, { useState } from "react";
import { contactInfo } from "../../../../shared/data/portfolio";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  const badges = [
    { icon: "⭐", text: "4.9/5 Average Ratings" },
    { icon: "🏆", text: "25+ Winning Awards" },
    { icon: "✓", text: "Certified Product Designer" }
  ];

  return (
    <section className="bg-[var(--color-bg-white)] py-[var(--spacing-xxxl)] md:py-[var(--spacing-xxxl)] max-md:py-[var(--spacing-xxl)]" id="contact">
      <div className="container">
        <h2 className="text-[var(--font-size-4xl)] font-bold text-[var(--color-text-dark)] mb-[var(--spacing-xxl)] text-center md:text-[var(--font-size-4xl)] max-md:text-[var(--font-size-3xl)]">
          Have an Awesome Project Idea? <span className="text-orange">Let's Discuss</span>
        </h2>

        <form className="max-w-[700px] mx-auto mb-[var(--spacing-xxl)]" onSubmit={handleSubmit}>
          <div className="relative flex items-center bg-white border-2 border-[var(--color-border-light)] rounded-[var(--radius-full)] p-2">
            <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 ml-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L10.89 13.26C11.5 13.67 12.5 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#FF8C42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 text-base border-0 outline-none bg-transparent"
              required
            />
            <button type="submit" className="bg-[var(--color-primary-orange)] text-white px-12 py-3 rounded-[var(--radius-full)] font-semibold transition-all duration-[0.3s] hover:bg-[#e67a34] focus:outline-none flex-shrink-0">
              Send
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center gap-[var(--spacing-xl)] flex-wrap md:gap-[var(--spacing-xl)] max-md:gap-[var(--spacing-md)]">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 bg-[var(--color-bg-light)] px-6 py-4 rounded-[var(--radius-full)]">
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-base font-medium text-[var(--color-text-dark)]">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
