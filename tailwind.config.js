/** @type {import('tailwindcss').Config} */
export default {
  content:
  [
      './views/*.{pug, html}',
  ],
  theme: {
    extend: {
      colors : {
        "orange" : "#fb7413",
        "grey-light" : "#959eac",
        "grey-medium" : "#7c8798",
        "blue-dark" : "#252d37",
        "blue-very-dark" : "#121417",
      },
      fontFamily : {
        "sans" : ['Overpass', 'sans-serif']
      },
      fontSize : {
        "text-normal" : "15px"
      },
      maxWidth : {
        "normal" : "90%"
      }
    },
  },
  plugins: [],
}

