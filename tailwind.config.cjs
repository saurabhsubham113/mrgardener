/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "400px",
        md: "728px",
        lg: "934px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    height: {
      lg: "420px",
      100: "100%",
      full: "100%",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        jose: ["Josefin Sans", "sans-serif"],
        pacific: ["Pacifico", "sans-serif"],
      },
      backgroundImage: {
        "hero-img":
          "linear-gradient(to right, rgba(182, 182, 182, 0.4), rgba(255,255,255, 0.2)),url('src/assets/HeroImg.png')",
      },
      colors: {
        darkGreen: "#166233",
        lightGreen: "#00b863",
        lightTeal: "#00b86333",
      },
    },
  },
  plugins: [],
};
