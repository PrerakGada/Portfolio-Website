/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors
        'primary-purple': '#55198b',
        'primary-purple-hover': '#8c43ce',
        'primary-orange': '#FF8C42',
        'primary-dark': '#2B2D3A',
        'primary-light': '#FFFFFF',

        // Background colors
        'bg-dark': '#1F2128',
        'bg-dark-striped': '#1A1C23',
        'bg-dark-main': '#171c28',
        'bg-light': '#F8F9FA',
        'bg-white': '#FFFFFF',
        'bg-light-1': '#fff',
        'bg-light-2': '#ffffff',
        'bg-light-3': '#f5f2f4',

        // Text colors
        'text-dark': '#2C3E50',
        'text-light': '#FFFFFF',
        'text-gray': '#8B92A8',
        'text-muted': '#9CA3AF',
        'text-black': '#000000',
        'text-subtitle': '#868e96',
        'text-card-subtitle': '#666666',
        'text-talk-subtitle': '#7f8287',
        'text-blog-title': '#262626',

        // Accent colors
        'accent-orange': '#FF8C42',
        'accent-dark-circle': '#2C3E50',
        'accent-light-gray': '#F3F4F6',

        // Border colors
        'border-light': '#E5E7EB',
        'border-dark': '#374151',
        'border-light-1': 'rgba(211, 211, 211, 0.397)',
        'border-education': '#a9a7f9',

        // Button colors
        'button-primary': '#55198b',
        'button-hover': '#8c43ce',
        'button-top-hover': '#000',

        // Toggle colors
        'toggle-check': '#2196f3',
        'toggle-slider': '#ccc',

        // GitHub colors
        'github-repo-lang': '#0000ff',
        'github-repo-card': 'rgb(88, 96, 105)',
        'github-repo-stats': 'rgb(106, 115, 125)',
        'github-repo-name': 'rgb(36, 41, 46)',
        'github-profile-location': '#ffebcd',
        'github-profile-border': '#6c63ff',

        // Social media colors
        'social-facebook': '#3b5998',
        'social-linkedin': '#0e76a8',
        'social-github': '#333',
        'social-gitlab': '#fca326',
        'social-google': '#ea4335',
        'social-twitter': '#1da1f2',
        'social-medium': '#000',
        'social-stackoverflow': '#f48024',
        'social-instagram': '#c13584',
        'social-kaggle': '#20beff',

        // Misc colors
        'skills': '#645beb',
        'progress-bar': 'rgb(243, 239, 239)',
        'progress-span': '#aaa5ff',
        'icon': '#333',
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
      fontFamily: {
        'poppins': ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        'agustina': ['Agustina', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
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
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '50px',
        'full': '50px',
        'circle': '50%',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1024px',
        'wide': '1440px',
      },
      zIndex: {
        'header': 1000,
        'modal': 2000,
        'tooltip': 3000,
      },
    },
  },
  plugins: [],
}
