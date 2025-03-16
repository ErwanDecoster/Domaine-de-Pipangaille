import process from 'node:process'

export default defineNuxtConfig({
  css: ['~/assets/css/styles.css'],
  dev: process.env.NODE_ENV !== 'production',

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
      process.env.NODE_ENV === 'production'
        ? {
            preset: [
              'default',
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
    'nuxt-icon',
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
    langDir: 'lang',
    lazy: true,
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Fr',
        file: 'fr-FR.ts',
        dir: 'ltr',
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'En',
        file: 'en-US.ts',
        dir: 'ltr',
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Es',
        file: 'es-ES.ts',
        dir: 'ltr',
      },
    ],
    customRoutes: 'config',
    pages: {
      'the_place': {
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
      'book': {
        fr: '/reserver',
        en: '/book',
        es: '/reservar',
      },
      'contact': {
        fr: '/nous-contacter',
        en: '/contact-us',
        es: '/contáctenos',
      },
      'legal_notice': {
        fr: '/mentions-legales',
        en: '/legal-notice',
        es: '/notas-legales',
      },
      'general_condition_of_sale': {
        fr: '/condition-general-de-vente',
        en: '/general-condition-of-sale',
        es: '/condiciones-generales-de-venta',
      },
    },
  },

  nitro: {
    compressPublicAssets: true,
  },

  routeRules: {
    '/le_lieu': {
      redirect: {
        to: '/le-lieu',
        statusCode: 301,
      },
    },
    '/a_proximite/a_visiter/musee_de_l_alambic': {
      redirect: {
        to: '/a-proximite/a-visiter/musee_de_l_alambic',
        statusCode: 301,
      },
    },
    '/a_proximite/a_visiter/palais_ideal_du_facteur_cheval': {
      redirect: {
        to: '/a-proximite/a-visiter/palais_ideal_du_facteur_cheval',
        statusCode: 301,
      },
    },
    '/a_proximite/se_restaurer/le_picotin': {
      redirect: {
        to: '/a-proximite/se-restaurer/le_picotin',
        statusCode: 301,
      },
    },
    '/a_proximite/se_restaurer/o_daily_truck': {
      redirect: {
        to: '/a-proximite/se-restaurer/o_daily_truck',
        statusCode: 301,
      },
    },
    '/a_proximite/se_restaurer/le_relais_mailles': {
      redirect: {
        to: '/a-proximite/se-restaurer/le_relais_mailles',
        statusCode: 301,
      },
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.PUBLIC_SITE_URL || 'https://domaine-de-pipangaille.fr',
    },
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    CONTACT_MAIL: process.env.CONTACT_MAIL,
  },

  compatibilityDate: '2024-12-16',
})
