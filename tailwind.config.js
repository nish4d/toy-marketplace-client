/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abc: ["Rubik","sans-serif"],
      },
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF1276",

          secondary: "#01B0ED",

          accent: "#01B0ED",

          neutral: "#FAFAFA",

          "base-100": "#FFFFFF",

          info: "#5BBBEC",

          success: "#24B283",

          warning: "#FFEA00",

          error: "#E9356E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
