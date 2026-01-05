/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#2C3E50',
          dark: '#1A1A1A',
          accent: '#3498DB',
        },
        status: {
          safe: '#27AE60',
          warn: '#F1C40F',
          danger: '#E74C3C',
        }
      }
    },
  },
  plugins: [],
}