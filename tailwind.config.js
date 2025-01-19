/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'nav-spacing': '50px',
      }
    },
    screens: {
      'half': '930px',
    },
    
  },
  plugins: [],
}

