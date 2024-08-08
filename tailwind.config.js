/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
      },
      fontFamily: {
        arial: ["Arial"],
        dancingScript: ["Dancing Script"]
     },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      width: {
        '9/10': '90%',
      },
      height: {
        '450' : '450px',
      },
      boxShadow: {
        'bottom-right-light': '4px 4px 2px black',
        'bottom-right-dark': '4px 4px 2px white',
      },
      backgroundImage: {
        'custom-image': "url('https://www.google.com/imgres?imgurl=https%3A%2F%2Faquantuo.com%2Ftheme%2Flatest-assets%2Fimages%2Fservices%2Fwarehouse-service1.png&tbnid=NwmdTEqIzDMt_M&vet=12ahUKEwjU3bK8i5-GAxVtk_0HHZQPAqcQMyhQegUIARCHAg..i&imgrefurl=https%3A%2F%2Faquantuo.com%2Fwarehouse-outsourcing-company&docid=e5gwJG2-5TjCOM&w=523&h=299&q=warehouse%20services&ved=2ahUKEwjU3bK8i5-GAxVtk_0HHZQPAqcQMyhQegUIARCHAg')",
      },
    },
  },
  plugins: [],
}