module.exports = {
  mode: 'jit',
  purge: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  content: [],
  theme: {
    colors: {
      'almond': '#EEDECC',
      'eerie-black': '#1A1D1A',
      'white': '#ffffff',
      'black': '#000000',
      'red': '#ff0000',
      'yellow-red': '#EFB94F',
    },
    extend: {
      boxShadow: {
        'rlg': '0 -4px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1);',
      }
    },
  },
  plugins: [],
}
