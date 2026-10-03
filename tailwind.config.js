/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "system-ui", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#060a14",
          soft: "#0b101d",
          card: "#0e1424",
        },
        accent: {
          DEFAULT: "#22d3ee",
          soft: "#67e8f9",
          dim: "#0e7490",
        },
        ink: {
          DEFAULT: "#e6ecf5",
          muted: "#8b96ab",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "orbit-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        orbit: "orbit 18s linear infinite",
        "orbit-reverse": "orbit-reverse 18s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
