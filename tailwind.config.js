/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#80f46b",

          "secondary": "#35ccb5",

          "accent": "#9a8bed",

          "neutral": "#2D2031",

          "base-100": "#F9FAFB",

          "info": "#3F66CA",

          "success": "#24B77F",

          "warning": "#DEA517",

          "error": "#E7665F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
