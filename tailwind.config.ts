import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: "#002855",
        royalRed: "#E9302D",
        royalYellow: "#F7C531",
        royalPurple: "#9B6DE3",
        royalTeal: "#34C3C3",
        royalGreen: "#89D163",
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui"],
        body: ["Nunito", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],   // ← remove aspect-ratio plugin here
} satisfies Config;
