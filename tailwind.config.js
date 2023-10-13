/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        textcolor: "var(--color-text)",
        cardBackground: "var(--color-Cardbackground)",
      },
    },
  },
  plugins: [],
};
