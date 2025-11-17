/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors (from _globalColor.scss and v2 _variables.scss)
        primary: {
          purple: '#55198b',
          'purple-hover': '#8c43ce',
          orange: '#FF8C42',
          dark: '#2B2D3A',
          light: '#FFFFFF',
        },
        // Background Colors
        bg: {
          dark: '#1F2128',
          'dark-striped': '#1A1C23',
          'dark-main': '#171c28',
          light: '#F8F9FA',
          white: '#FFFFFF',
          'light-1': '#fff',
          'light-2': '#ffffff',
          'light-3': '#f5f2f4',
        },
        // Text Colors
        text: {
          dark: '#2C3E50',
          light: '#FFFFFF',
          gray: '#8B92A8',
          muted: '#9CA3AF',
          black: '#000000',
          subtitle: '#868e96',
          'card-subtitle': '#666666',
          'talk-subtitle': '#7f8287',
          'blog-title': '#262626',
        },
        // Accent Colors
        accent: {
          orange: '#FF8C42',
          'dark-circle': '#2C3E50',
          'light-gray': '#F3F4F6',
        },
        // Border Colors
        border: {
          light: '#E5E7EB',
          dark: '#374151',
          'light-1': 'rgba(211, 211, 211, 0.397)',
          education: '#a9a7f9',
        },
        // Button Colors
        button: {
          primary: '#55198b',
          hover: '#8c43ce',
          'top-hover': '#000',
        },
        // Toggle Switch
        toggle: {
          check: '#2196f3',
          slider: '#ccc',
        },
        // GitHub Specific
        github: {
          'repo-lang': '#0000ff',
          'repo-card': 'rgb(88, 96, 105)',
          'repo-stats': 'rgb(106, 115, 125)',
          'repo-name': 'rgb(36, 41, 46)',
          'profile-location': '#ffebcd',
          'profile-border': '#6c63ff',
        },
        // Social Media Colors
        social: {
          facebook: '#3b5998',
          linkedin: '#0e76a8',
          github: '#333',
          gitlab: '#fca326',
          google: '#ea4335',
          twitter: '#1da1f2',
          medium: '#000',
          stackoverflow: '#f48024',
          instagram: '#c13584',
          kaggle: '#20beff',
        },
        // Misc Colors
        skills: '#645beb',
        'progress-bar': 'rgb(243, 239, 239)',
        'progress-span': '#aaa5ff',
        icon: '#333',
      },
      fontFamily: {
        poppins: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        agustina: ['Agustina', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'md': '18px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '48px',
        '5xl': '64px',
        '6xl': '80px',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      lineHeight: {
        tight: '1.2',
        normal: '1.5',
        relaxed: '1.75',
      },
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '50px',
        'full': '50px',
        'circle': '50%',
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '64px',
        '3xl': '96px',
        '4xl': '128px',
        'container-padding': '80px',
        'container-padding-mobile': '24px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'light': 'rgba(0, 0, 0, 0.1)',
        'light-dark': 'rgba(0, 0, 0, 0.2)',
        'light-darker': 'rgba(0, 0, 0, 0.3)',
        'dark': '#d9dbdf',
        'dark-2': '#ffffff',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'ease': 'ease-in-out',
      },
      maxWidth: {
        'container': '1440px',
      },
      zIndex: {
        'dropdown': '1000',
        'modal': '2000',
        'tooltip': '3000',
        'header': '100',
      },
      backgroundImage: {
        'gradient-orange': 'radial-gradient(circle, rgba(255, 140, 66, 0.4) 0%, rgba(255, 140, 66, 0.15) 50%, rgba(255, 140, 66, 0) 70%)',
        'experience-blurred': 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
        'experience-banner': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))',
      },
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1024px',
        'wide': '1440px',
      },
      animation: {
        'wave': 'wave 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.6s ease-out',
        'fadeInUp': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '75%': { transform: 'rotate(-15deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        skCircleBounceDelay: {
          '0%, 80%, 100%': {
            transform: 'scale(0)',
          },
          '40%': {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
