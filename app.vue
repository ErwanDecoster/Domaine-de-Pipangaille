<template>
  <div class="text-eerie-black bg-white dark:bg-eerie-black dark:text-white min-h-[100vh] h-full">
    <!-- <button v-if="!showModal" @click="showModal = true" class="z-50 fixed top-1 left-1 p-2 bg-almond dark:bg-dark-almond bg-opacity-50 hover:bg-opacity-100 duration-200 rounded text-white">Site en construction infos</button> -->
    <PopUp 
      v-if="showModal" 
      @close="showModal = false"
    >
      <!-- <p class="text-xl">Site en construction</p> -->
      <!-- <div>
        <p>Site en cours de construction, certaine fonctionctionnaliteé ne sont pas encore au point, n'hesitez pas a donner votre avis sur votre experience. <a class="text-dark-almond dark:text-almond hover:underline" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScrA6ZsyNeKY2iKPFHmfDSfFC_EmouGnmTjgDRDo-T1ZBvuCw/viewform?usp=sf_link">Google Form</a></p>
      </div> -->
      <img 
        class="h-fill"
        src="/images/post_concert_pipangaille_22.04.2023.webp" 
        alt="Poster de l'événement concert aux chambres d'hôtes Domaine de Pipangaille"
      >
      <div>
        <p class="text-xl text-center py-2">
          Réserver  :
        </p>
        <div class="flex flex-row justify-center object-cover gap-2 items-center">
          <a 
            href="mailto:contact@domaine-de-pipangaille.fr?subject=Réservation concert 20 mai 2023&body=Nom : %0D%0A Prénom : %0D%0A Nombre de personnes :"
            target="_blank" 
            class="pl-2 underline decoration-2 underline-offset-2 decoration-almond dark:decoration-dark-almond text-md block"
          >
            contact@domaine-de-pipangaille.fr
          </a>
          <p>ou</p>
          <a 
            href="tel:+33603605430"
            class="pl-2 underline decoration-2 underline-offset-2 decoration-almond dark:decoration-dark-almond text-md block"
          >
            06 03 60 54 30
          </a>
        </div>
      </div>
    </PopUp>
    <NavBar />
    <NuxtPage />
    <Footer />
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