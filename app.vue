<template>
  <div class="text-eerie-black bg-white dark:bg-eerie-black dark:text-white md:pt-[5.25rem] min-h-[100vh] h-full">
    <!-- <button v-if="!showModal" @click="showModal = true" class="z-50 fixed top-1 left-1 p-2 bg-almond dark:bg-dark-almond bg-opacity-50 hover:bg-opacity-100 duration-200 rounded text-white">Site en construction infos</button>
    <PopUp v-if="showModal" @close="showModal = false">
      <p class="text-xl">Site en construction</p>
      <div>
        <p>Site en cours de construction, certaine fonctionctionnaliteé ne sont pas encore au point, n'hesitez pas a donner votre avis sur votre experience. <a class="text-dark-almond dark:text-almond hover:underline" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScrA6ZsyNeKY2iKPFHmfDSfFC_EmouGnmTjgDRDo-T1ZBvuCw/viewform?usp=sf_link">Google Form</a></p>
      </div>
    </PopUp> -->
    <NavBar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>
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

<script>
export default {
  data() {
    return {
      showModal: false,
    }
  },
  created() {
    useHead({
      title: 'Domaine de Pipangaille',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow'},
        { name: 'theme-color', content: '#ffffff'},
      ],
    })
  }
}
</script>