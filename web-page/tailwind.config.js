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
        redbuttonunhovered: '#ff0000',
        redbuttonhovered: '#c51017',
        greenbuttonunhovered: '#52a447',
        greenbuttonhovered: '#008000',
        bluebuttonunhovered: '#59C1E8',
        bluebuttonhovered: '#1e90ff',
      }
    },
  },
  plugins: [],
}