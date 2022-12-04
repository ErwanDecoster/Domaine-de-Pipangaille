<template>
  <div class="text-eerie-black bg-white dark:bg-eerie-black dark:text-white md:pt-[5.25rem] min-h-[100vh] h-full">
    <NavBar />
    <NuxtPage />
    <Footer />
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* filter: blur(30px); */
  filter: blur(2px);
  /* transform: scale(1.1); */
}
</style>

<script>
export default {
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