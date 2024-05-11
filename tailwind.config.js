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
  theme: {
    extend: {},
  },
  plugins: [],
};
