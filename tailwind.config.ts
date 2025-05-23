import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Noto Sans KR",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
