/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all JS/TS/JSX/TSX files in src
    "./public/**/*.{html,js}",    // Add public folder if needed
  ],
  theme: {
    extend: {}, // Add customizations here if needed
  },
  plugins: [], // Add Tailwind plugins here if needed
};