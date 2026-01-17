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
        primary: '#0a192f', // Deep Blue
        secondary: '#64ffda', // Electric Blue/Teal
        accent: '#f97316', // Vibrant Orange
        dark: '#020c1b',
        light: '#e6f1ff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
}
