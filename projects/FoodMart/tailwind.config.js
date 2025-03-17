/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {

    extend: {
      container: {
        center: true
      },
      colors:{
       "light-gray":{
        default:"#f8f8f8f8",
       },
       "market-orange":{
        default:"#ffc43f",
       }
      }
    },
  },
  plugins: [],
}

