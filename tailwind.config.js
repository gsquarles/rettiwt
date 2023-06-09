/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1d9bf0",
        },
      },
    },
  },
  plugins: [],
};
