export default defineNuxtConfig({
  css: ['~/assets/css/styles.css'],
  dev: process.env.NODE_ENV !== 'production',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
      process.env.NODE_ENV === "production"
        ? {
            preset: [
              "default",
              {
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          }
        : false, // disable cssnano when not in production
    },
  },
  modules: [
    '@nuxt/image-edge',
  ],
  nitro: {
    compressPublicAssets: true,
  },
  runtimeConfig: {
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,
    CONTACTMAIL: process.env.CONTACTMAIL,
  },
})