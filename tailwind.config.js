/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        en: ["Inter", "sans-serif"],
        fa: ["IRANSansWeb", "sans-serif"],
      },
    },
  },
  plugins: [],
};
