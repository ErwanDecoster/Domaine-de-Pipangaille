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
    'nuxt-simple-sitemap',
    '@nuxtjs/i18n',
  ],
  i18n: {
    baseUrl: 'https://domaine-de-pipangaille.fr',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    langDir: "lang",
    lazy: true,
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: "en-US.ts",
        dir: "ltr",
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
        file: "fr-FR.ts",
        dir: "ltr",
      }
    ],
    customRoutes: 'config',
    pages: {
      the_place: {
        fr: '/le-lieu',
        en: '/the-place',
      },
      'accommodation/index': {
        fr: '/hebergements',
        en: '/accommodation',
      },
      'accommodation/[id]': {
        fr: '/hebergements/[id]',
        en: '/accommodation/[id]',
      },
      'near/index': {
        fr: '/à-proximité',
        en: '/near',
      },
      'near/[group]/[id]': {
        fr: '/à-proximité/[group]/[id]',
        en: '/near/[group]/[id]',
      },
      book: {
        fr: '/réserver',
        en: '/book',
      },
      contact: {
        fr: '/nous-contacter',
        en: '/contact-us',
      },
      legal_notice: {
        fr: '/mentions-légales',
        en: '/legal-notice',
      },
      general_condition_of_sale: {
        fr: '/condition-general-de-vente',
        en: '/general-condition-of-sale',
      },
    },
    defaultLocale: 'fr',
  },
  nitro: {
    compressPublicAssets: true,
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.PUBLIC_SITE_URL || 'https://domaine-de-pipangaille.fr',
    },
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,
    CONTACTMAIL: process.env.CONTACTMAIL,
  },
})