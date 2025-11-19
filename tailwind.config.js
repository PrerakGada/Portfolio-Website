const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        legacy: {
          button: "#55198b",
          "button-hover": "#8c43ce",
          title: "#000000",
          text: "#000000",
          subtitle: "#868e96",
          "card-subtitle": "#666666",
          "talk-subtitle": "#7f8287",
          "blog-title": "#262626",
          "text-dark": "#ffffff",
          "dark-background": "#171c28",
          "light-background": "#ffffff",
          "skills-accent": "#645beb"
        },
        brand: {
          primary: "#FF8C42",
          dark: "#2B2D3A",
          light: "#FFFFFF"
        },
        surface: {
          dark: "#1F2128",
          "dark-striped": "#1A1C23",
          light: "#F8F9FA",
          white: "#FFFFFF"
        },
        text: {
          dark: "#2C3E50",
          light: "#FFFFFF",
          gray: "#8B92A8",
          muted: "#9CA3AF"
        },
        accent: {
          orange: "#FF8C42",
          "light-gray": "#F3F4F6",
          border: "#E5E7EB",
          "border-dark": "#374151"
        }
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
        signature: ["Agustina Regular", ...defaultTheme.fontFamily.serif]
      },
      boxShadow: {
        card: "0 20px 50px rgba(0, 0, 0, 0.1)",
        "card-dark": "0 20px 50px rgba(0, 0, 0, 0.3)",
        "glass-lg": "0 30px 80px rgba(15, 23, 42, 0.28)",
        glow: "0 10px 40px rgba(255, 140, 66, 0.35)"
      },
      borderRadius: {
        "2lg": "14px",
        "3xl": "24px",
        "4xl": "32px",
        pill: "999px"
      },
      spacing: {
        13: "3.25rem",
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        42: "10.5rem",
        48: "12rem",
        60: "15rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
        120: "30rem"
      },
      maxWidth: {
        content: "1440px"
      },
      screens: {
        wide: "1440px"
      },
      backgroundImage: {
        "legacy-progress": "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))",
        "legacy-banner": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))"
      },
      transitionDuration: {
        150: "150ms",
        300: "300ms",
        500: "500ms"
      }
    }
  },
  plugins: []
};
