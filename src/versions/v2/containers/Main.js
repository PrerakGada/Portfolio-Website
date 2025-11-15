import React from "react";
import "./Main.scss";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

/**
 * Version 2 - Modern Portfolio Design (Figma)
 *
 * Main layout component for v2
 * Implements the modern, orange-accented design from Figma
 *
 * Current Status: Session 1 Complete
 * - Header ✅
 * - Hero ✅
 * - Services (upcoming)
 * - Experience (upcoming)
 * - Portfolio (upcoming)
 * - Footer (upcoming)
 */

const Main = () => {
  return (
    <div className="v2-app">
      <Header />
      <main>
        <Hero />

        {/* Coming Soon sections */}
        <section className="v2-coming-soon">
          <div className="v2-container">
            <div className="v2-coming-soon-content">
              <h2>More Sections Coming Soon</h2>
              <p>The following sections are in development:</p>
              <ul>
                <li>Services Section</li>
                <li>Work Experience Timeline</li>
                <li>Why Hire Me</li>
                <li>Portfolio Gallery</li>
                <li>Testimonials</li>
                <li>Blog Posts</li>
                <li>Footer</li>
              </ul>
              <p className="v2-progress-note">
                Session 1 Complete: Foundation (Header + Hero) ✅
              </p>
              <a href="/v1" className="v2-btn v2-btn-secondary">
                ← View Version 1 (Classic)
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
