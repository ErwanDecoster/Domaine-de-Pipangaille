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
    'nuxt-vercel-analytics',
    'nuxt-security',
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n',
    'nuxt-delay-hydration',
  ],
  security: {
    headers: {
      crossOriginEmbedderPolicy: false,
    },
  },
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
    defaultLocale: 'fr',
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Fr',
        file: "fr-FR.ts",
        dir: "ltr",
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'En',
        file: "en-US.ts",
        dir: "ltr",
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Es',
        file: "es-ES.ts",
        dir: "ltr",
      },
    ],
    customRoutes: 'config',
    pages: {
      the_place: {
        fr: '/le-lieu',
        en: '/the-place',
        es: '/el-lugar',
      },
      'accommodation/index': {
        fr: '/hebergements',
        en: '/accommodation',
        es: '/alojamiento',
      },
      'accommodation/[id]': {
        fr: '/hebergements/[id]',
        en: '/accommodation/[id]',
        es: '/alojamiento/[id]',
      },
      'near/index': {
        fr: '/a-proximite',
        en: '/near',
        es: '/a-proximidad',
      },
      'near/[group]/[id]': {
        fr: '/a-proximite/[group]/[id]',
        en: '/near/[group]/[id]',
        es: '/a-proximidad/[group]/[id]',
      },
      book: {
        fr: '/reserver',
        en: '/book',
        es: '/reservar',
      },
      contact: {
        fr: '/nous-contacter',
        en: '/contact-us',
        es: '/contáctenos',
      },
      legal_notice: {
        fr: '/mentions-legales',
        en: '/legal-notice',
        es: '/notas-legales',
      },
      general_condition_of_sale: {
        fr: '/condition-general-de-vente',
        en: '/general-condition-of-sale',
        es: '/condiciones-generales-de-venta',
      },
    },
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