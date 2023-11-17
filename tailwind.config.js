module.exports = {
  mode: 'jit',
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.{vue,js,ts}",
  ],
  theme: {
    colors: {
      'almond': '#EEDECC',
      'dark-almond': '#86663D',
      'eerie-black': '#1A1D1A',
      'davys-grey': '#595859',
      'northern_light_grey': '#A7AEB4',
      'white': '#ffffff',
      'black': '#000000',
      'red': '#ff0000',
      'yellow-red': '#EFB94F',
      'copper-penny': '#B4656F',
      'ufo-green': '#42D481',
      'transparent': 'transparent',
    },
    extend: {
      boxShadow: {
        'lg-inverted': '0 -4px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1);',
        'lg-dark-inverted': '0 -4px 15px -3px rgb(0 0 0 / 0.4), 0 -4px 6px -4px rgb(0 0 0 / 0.4);',
        'lg-dark': '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4);',
      },
      maxWidth: {
        'screen-3xl': '1792px',
        'screen-4xl': '2048px',
        'screen-5xl': '2304px',
      },
      screens: {
        '3xl': '1792px',
        '4xl': '2048px',
        '5xl': '2304px',
      },
    },
  },
  plugins: [],
}
