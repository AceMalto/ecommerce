/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xz": {"min": "300px", "max":"320px"},
        "xy": {"min": "320px", "max":"375px"},
        "xx": {"min": "375px", "max":"425px"},
        "xw": {"min": "425px", "max":"768px"},
        "xv": {"min": "768px", "max":"1024px"},
        "xu": {"min": "1024px", "max":"1440px"},
        "xt": {"min": "1440px", "max":"2560px"},
      }
    },
  },
  plugins: [],
}