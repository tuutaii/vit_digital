/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A192F', // Deep Navy Blue
          light: '#172A45',
        },
        secondary: {
          DEFAULT: '#F3F4F6', // Neutral Gray for backgrounds
          dark: '#E5E7EB',
        },
        accent: {
          DEFAULT: '#F59E0B', // Amber/Gold
          hover: '#D97706',
        },
        // Re-adding 'dark' and 'light' for compatibility with existing components
        dark: '#0A192F',
        light: '#e6f1ff',
        text: {
          main: '#374151', // Dark Gray for light mode
          light: '#F9FAFB', // White for dark mode
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      container: {
        center: true,
        padding: '2rem', // Increased padding for whitespace
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px', // Restrain max width for cleaner layout
        },
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
