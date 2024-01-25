<template>
  <div class="text-eerie-black bg-white dark:bg-eerie-black dark:text-white min-h-[100vh] h-full">
    <!-- <button 
      v-if="!showModal" 
      class="z-50 fixed top-1 left-1 p-2 bg-almond dark:bg-dark-almond bg-opacity-50 hover:bg-opacity-100 duration-200 rounded text-white"
      @click="showModal = true" 
    >
      Site en construction infos
    </button>
    <Modal 
      v-if="showModal" 
      @close="showModal = false"
    >
      <p class="text-xl">
        Site en construction
      </p>
      <div>
        <p>Site en cours de construction, certaine fonctionctionnaliteé ne sont pas encore au point, n'hesitez pas a donner votre avis sur votre experience. <a class="text-dark-almond dark:text-almond hover:underline" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScrA6ZsyNeKY2iKPFHmfDSfFC_EmouGnmTjgDRDo-T1ZBvuCw/viewform?usp=sf_link">Google Form</a></p>
      </div>
    </Modal> -->
    <NavBar />
    <NuxtPage />
    <LazyFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: true,
    }
  },
  created() {
    const head = useLocaleHead({
      addDirAttribute: true,
      identifierAttribute: 'id',
      addSeoAttributes: true
    })
    console.log();
    const title = this.$t('index.meta.title')
    useHead({
      title: title,
      htmlAttrs: {
        lang: head.value.htmlAttrs.lang,
        dir: head.value.htmlAttrs.dir
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow'},
        { name: 'theme-color', content: '#ffffff'},
      ],
    })
  },
  mounted() {
    const style = "background: #1A1D1A; color: #eee; border-radius: 4px; padding: 2px 10px; border: 1px solid #595859; font-size: 16px;";
    console.log("%cWebsite designed and developed by Erwan Decoster www.erwan-decoster.com in Nuxt 🤍\nGithub repo : https://github.com/ErwanDecoster/Domaine-de-Pipangaille", style)
  },
}
</script>

<style>
@font-face {
    font-family: "Nunito";
    src: local("Nunito"),
    url(~/assets/font/Nunito-Regular.ttf) format("truetype");
    font-display: swap;
}

html {
    font-family: 'Nunito';
}

/* h1, h2, h3, h4, h5 {
    font-family: "Lora";
    src: local("Lora"),
     url(~/assets/font/Lora-Regular.ttf) format("truetype");
} */
h1, h2, h3, h4, h5 {
    font-family: "WollstonecraftRomance";
    src: local("WollstonecraftRomance"),
     url(~/assets/font/WollstonecraftRomance-Regular.ttf) format("truetype");
}
/* .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
} */
</style>