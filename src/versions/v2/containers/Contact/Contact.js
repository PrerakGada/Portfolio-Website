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
    <section className="bg-bg-white section" id="contact">
      <div className="container">
        <h2 className="text-4xl tablet:text-3xl max-[640px]:text-2xl font-bold text-text-dark mb-2xl tablet:mb-xl text-center">
          Have an Awesome Project Idea? <span className="text-orange">Let's Discuss</span>
        </h2>

        <form className="max-w-[800px] mx-auto mb-xl" onSubmit={handleSubmit}>
          <div className="flex items-center gap-md bg-bg-white border-2 border-border-light rounded-full py-2 px-6 tablet:px-3 shadow-md tablet:flex-wrap">
            <div className="flex-shrink-0">
              <svg className="block" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L10.89 13.26C11.5 13.67 12.5 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#FF8C42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-none outline-none text-base p-3 tablet:p-2 bg-transparent tablet:w-full placeholder:text-text-muted"
              required
            />
            <button
              type="submit"
              className="bg-primary-orange text-text-light py-4 px-12 rounded-full text-base font-semibold transition-all duration-base whitespace-nowrap tablet:w-full hover:bg-[#e67a30] hover:-translate-y-[2px] hover:shadow-[0_8px_16px_rgba(255,140,66,0.4)]"
            >
              Send
            </button>
          </div>
        </form>

        <div className="flex justify-center gap-xl tablet:gap-lg flex-wrap">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-sm text-base tablet:text-sm text-text-dark">
              <span className="text-xl">{badge.icon}</span>
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
