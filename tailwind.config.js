/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}",
    "./.eleventy.js"
  ],
  darkMode: 'media', // Enables dark mode based on user's system preferences
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Blue
          hover: '#2563EB',
          dark: '#60A5FA', // Lighter blue for dark mode
        },
        secondary: {
          DEFAULT: '#10B981', // Emerald
          hover: '#059669',
          dark: '#34D399', // Lighter emerald for dark mode
        },
        accent: {
          DEFAULT: '#F59E0B', // Amber
          hover: '#D97706',
          dark: '#FBBF24', // Lighter amber for dark mode
        },
        arcades: {
          blue: '#4F46E5',    // Indigo
          green: '#10B981',   // Emerald
          purple: '#8B5CF6',  // Violet
          orange: '#F59E0B',  // Amber
          pink: '#EC4899',    // Pink
          teal: '#14B8A6',    // Teal
          yellow: '#FBBF24',  // Yellow
          gray: '#6B7280',    // Gray
        },
        light: '#F3F4F6',
        dark: '#111827',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'accent': '0 4px 0 0 rgba(245, 158, 11, 0.5)',
        'dark-soft': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
        'dark-medium': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 