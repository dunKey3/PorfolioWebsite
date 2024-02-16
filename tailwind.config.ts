  /** @type {import('tailwindcss').Config} */
  module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
    ],
    theme: {
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1220px",
        "2md": "936px",
        "2xl": "1440px",
        "3xl": "1700px",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          inter: ["Inter", "sans-serif"],
        },
        colors: {
          primary: "#2190FF",
          
          grey: "#5d737e",
          pearl :"#E6E1C5",
          richBlack : "#040F0F",
          rose :"#B592A0",
          red : "#C1292E",
          purple: "#8C7CFF",
          pink: "#ED5FBD",
          violet: "#F16565",
          orange: "#FF964B",

          black: {
            DEFAULT: "#000",
            100: "#0D1117",
            200: "#161B22",
            300: "#1F2428",
            400: "#242C38",
          },

          white: {
            DEFAULT: "#FFF",
            400: "#A3B3BC",
            500: "#A4B8D5",
            800: "#D0DFFF",
          },
        },

        backgroundImage: {
          banner: "url('/jsm_resources_banner.svg')",
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  };