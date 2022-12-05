import VueGtag from 'vue-gtag-next'
const config = useRuntimeConfig();
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: config.GTAGID,
    }
  })
})