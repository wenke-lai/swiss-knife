/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // default entrypoint
    "./index.html",
    // React
    "./src/**/*.{js,ts,jsx,tsx}",
    // SVG
    "./src/**/*.svg",
  ],
  // toggling dark mode manually
  darkMode: "selector",
  theme: {
    extend: {},
  },
  plugins: [],
};
