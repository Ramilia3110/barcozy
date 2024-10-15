/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "barcozy-gradient":
          "linear-gradient(90deg, rgba(224,246,251,1) 0%, rgba(212,249,203,1) 50%, rgba(249,240,180,1) 100%)",
      },
    },
  },
  plugins: [],
};
