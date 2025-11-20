/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgdefault: '#0b7b9e',
        box: '#ffffff',
        title: '#0b7b9e',
        descriptiontext: '#0b0b0b',
        buttontext: '#ffffff',
        tooltiptext: '#ffffff',
        pinkbtn: '#F2055A',
        purplebtn: '#9260cf',
        bluebtn: '#408AF1',
        rainbowbtn: "#e8befa",
      }
    },
  },
  plugins: [],
}