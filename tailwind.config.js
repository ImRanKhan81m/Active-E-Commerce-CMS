/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#E62E04",
          secondary: "#FBE0DA",
          accent: "#455A64",
          neutral: "#81858D",
          "base-100": "#ffffff",
          info: "#F6F6F6",
          success: "#06C270",
          warning: "#ff8b2c",
          error: "#FF3B3B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
