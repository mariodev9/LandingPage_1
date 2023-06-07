/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DCFF00",
      },
      fontFamily: {
        tulpen: ["Tulpen One", "cursive"],
      },
      backgroundImage: {
        laboratory: "url('/images/laboratory.jpg')",
        eng: "url(/images/eng.jpg)",
        prod: "url(/images/prod.jpg)",
        proyects: "url(/images/proyects.jpg)",
      },
      fontSize: {
        "9xl": "10rem",
        "10xl": "20rem",
        "11xl": "25rem",
      },
      height: {
        tablet: "70vh",
      },
    },
  },
  plugins: [],
};
