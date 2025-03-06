import { defineNuxtPlugin } from 'nuxt/app'
import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: {
      id: 'G-0332DJY37K',
    },
  }, nuxtApp.$router)
})
