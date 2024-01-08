/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green_btn: {
          100: "#57C49F",
        },
        text_gray: {
          50: "#E0E0E0",
          100: "#D0D0D0",
          200: "#6A6A6A",
        },
        text_black: {
          200: "#2C2C2C",
        },
      },
    },
    screens: {
      ssm: "390px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
