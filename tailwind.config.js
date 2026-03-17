/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ needed for theme toggle
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
      },
    },
  },
  plugins: [],
};
