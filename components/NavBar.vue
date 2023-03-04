<template>
  <nav class="hidden md:flex bg-white dark:bg-eerie-black shadow-lg dark:shadow-lg-dark duration-200 rounded-b-xl fixed top-0 h-24 inset-x-0 z-20">
    <div class="max-w-screen-lg mx-auto w-full flex justify-between items-center px-4">
      <div class="flex items-center gap-2 md:gap-4">
        <NuxtLink 
          class="hidden lg:block h-full py-4"
          to="/"
        >
          <picture>
            <source 
              srcset="/images/logo_domaine_de_pipangaille_light.svg" 
              media="(prefers-color-scheme: dark)"
            >
            <img 
              id="logo"
              width="165"
              height="74"
              class="h-[4.625rem] duration-200 w-max"
              src="/images/logo_domaine_de_pipangaille.svg"
              alt="logo du Domaine de Pipangaille"
            >
          </picture>
        </NuxtLink>
        <ButtonInline 
          link="/"
          content="Accueil"
        />
        <ButtonInline 
          link="/le_lieu"
          content="Le lieu"
        />
        <ButtonInline 
          link="/hebergements"
          content="Nos hébergements"
        />
        <ButtonInline 
          link="/a_proximite"
          content="À proximité"
        />
        <ButtonInline 
          link="/book"
          content="Réserver"
        />
      </div>
      <ButtonSecondary 
        link="/contact"
        content="Nous contactez"
      />
    </div>
  </nav>
  <button 
    aria-label="Voir le menu"
    class="md:hidden group h-12 w-12 px-2 pt-2.5 fixed backdrop-blur-sm rounded-lg right-6 top-6 flex flex-col gap-2 z-40"
    @click="fullNavOpen = !fullNavOpen"
  >
    <span class="w-8 bg-black dark:bg-white h-1 block rounded-full drop-shadow-lg" />
    <span class="group-hover:w-1/3 w-8 duration-150 bg-black dark:bg-white h-1 block rounded-full drop-shadow-lg" />
    <span class="w-8 bg-black dark:bg-white h-1 block rounded-full drop-shadow-lg" />
  </button>
  <div 
    v-if="fullNavOpen === true"
    class="md:hidden fixed z-40 inset-0 bg-white dark:bg-eerie-black"
  >
    <button 
      class="h-12 w-12 px-2 pt-2.5 absolute right-6 top-6 flex flex-col gap-2 duration-150 hover:rotate-90"
      @click="fullNavOpen = !fullNavOpen" 
    >
      <span class="w-8 bg-black dark:bg-white h-1 block rounded-full rotate-45 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2" />
      <span class="w-8 bg-black dark:bg-white h-1 block rounded-full -rotate-45 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2" />
    </button>
    <NuxtLink 
      to="/"
      class="group flex gap-2 items-center absolute left-6 top-6"
      @click="fullNavOpen = !fullNavOpen"
    >
      <p class="whitespace-nowrap text-xl">
        domaine-de-pipangaille.fr
      </p>
    </NuxtLink>
    <div class="flex flex-col flex-wrap justify-center items-center gap-4 mx-auto h-full">
      <ButtonInline
        link="/"
        content="Accueil"
        fontSize="20"
        @click="fullNavOpen = !fullNavOpen"
      />
      <ButtonInline
        link="/le_lieu"
        content="Le lieu"
        fontSize="20" 
        @click="fullNavOpen = !fullNavOpen"
      />
      <ButtonInline
        link="/hebergements"
        content="Nos hébergements"
        fontSize="20"
        @click="fullNavOpen = !fullNavOpen"
      />
      <ButtonInline
        link="/a_proximite"
        content="À proximité"
        fontSize="20"
        @click="fullNavOpen = !fullNavOpen"
      />
      <ButtonInline
        link="/book"
        content="Réserver"
        fontSize="20"
        @click="fullNavOpen = !fullNavOpen"
      />
      <ButtonInlineSecondary
        link="/contact"
        content="Nous contactez"
        fontSize="20"
        @click="fullNavOpen = !fullNavOpen"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullNavOpen: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      let scrollYPosition = window.scrollY;
      const navBar = document.querySelector('nav');
      const logo = document.querySelector('#logo');
      if (scrollYPosition > 50)
      {
        navBar.classList.remove('h-24')
        navBar.classList.add('h-16')
        logo.classList.remove('h-[4.625rem]')
        logo.classList.add('h-14')
      }
      else
      {
        navBar.classList.add('h-24')
        navBar.classList.remove('h-16')
        logo.classList.add('h-[4.625rem]')
        logo.classList.remove('h-14')
      }
    });
  }
};
</script>
