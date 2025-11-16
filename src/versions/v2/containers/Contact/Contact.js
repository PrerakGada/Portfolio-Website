import React, { useState } from "react";
import { contactInfo } from "../../../../shared/data/portfolio";
import "./Contact.scss";

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
    <section className="v2-contact section" id="contact">
      <div className="container">
        <h2 className="v2-contact-title text-center">
          Have an Awesome Project Idea? <span className="text-orange">Let's Discuss</span>
        </h2>

        <form className="v2-contact-form" onSubmit={handleSubmit}>
          <div className="v2-form-group">
            <div className="v2-input-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L10.89 13.26C11.5 13.67 12.5 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#FF8C42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="v2-email-input"
              required
            />
            <button type="submit" className="v2-send-btn">
              Send
            </button>
          </div>
        </form>

        <div className="v2-contact-badges">
          {badges.map((badge, index) => (
            <div key={index} className="v2-badge">
              <span className="v2-badge-icon">{badge.icon}</span>
              <span className="v2-badge-text">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
