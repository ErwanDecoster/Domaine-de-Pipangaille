<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
  <nav class="hidden md:flex bg-white dark:bg-eerie-black shadow-lg dark:shadow-lg-dark duration-200 rounded-b-xl fixed top-0 h-24 inset-x-0 z-20">
    <div class="max-w-screen-xl mx-auto w-full flex justify-between items-center px-4">
      <div class="flex items-center gap-2 lg:gap-4">
        <NuxtLink 
          class="hidden lg:block h-full py-4"
          :to="localePath({ name: 'index' })"
          title="Domaine de Pipangaille"
          aria-label="Domaine de Pipangaille"
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
              loading="lazy"
              src="/images/logo_domaine_de_pipangaille.svg"
              alt="logo du Domaine de Pipangaille"
            >
          </picture>
        </NuxtLink>
        <LocalButtonInline 
          link="index"
          content="index.title"
        />
        <LocalButtonInline 
          link="the_place"
          content="thePlace.title"
        />
        <LocalButtonInline 
          link="accommodation"
          content="accommodation.title"
        />
        <LocalButtonInline 
          link="near"
          content="near.title"
        />
        <LocalButtonInline 
          link="book"
          content="book.title"
        />
      </div>
      <div class="flex gap-2">
        <LangSwitcher />
        <NuxtLink
          :to="localePath({ name: 'contact' })"
          class="btn-secondary"
          :title="$t('contact.contactUs')"
        >
          {{ $t('contact.contactUs') }}
        </NuxtLink>
      </div>
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
      to="index"
      class="group flex gap-2 items-center absolute left-6 top-6"
      title="Domaine de Pipangaille"
      @click="fullNavOpen = !fullNavOpen"
    > 
      <p class="whitespace-nowrap text-xl">
        domaine-de-pipangaille.fr
      </p>
    </NuxtLink>
    <LangSwitcher class="absolute left-6 top-16" />
    <div class="flex flex-col flex-wrap justify-center items-center gap-4 mx-auto h-full">
      <LocalButtonInline
        link="index"
        content="index.title"
        fontSize="20"
        @click="fullNavOpen = !fullNavOpen"
      />
      <LocalButtonInline
        link="the_place"
        content="thePlace.title"
        fontSize="20" 
        @click="fullNavOpen = !fullNavOpen"
      />
      <LocalButtonInline
        link="accommodation"
        content="accommodation.title"
        fontSize="20"
        @click="fullNavOpen = !fullNavOpen"
      />
      <LocalButtonInline
        link="near"
        content="near.title"
        fontSize="20"
        @click="fullNavOpen = !fullNavOpen"
      />
      <LocalButtonInline
        link="book"
        content="book.title"
        fontSize="20"
        @click="fullNavOpen = !fullNavOpen"
      />
      <LocalButtonInlineSecondary
        link="contact"
        content="contact.contactUs"
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
  watch:{
    $route (){
      this.UpdateDefaultStyle();
    }
  },
  mounted() {
    this.UpdateDefaultStyle();
    window.addEventListener('scroll', () => {
      let scrollYPosition = window.scrollY;
      const navBar = document.querySelector('nav');
      const logo = document.querySelector('#logo');
      if (scrollYPosition > 50 && this.$route.name.search('book') == -1)
      {
        navBar.classList.remove('h-24')
        navBar.classList.add('h-16')
        logo.classList.remove('h-[4.625rem]')
        logo.classList.add('h-14')
      }
      else if (this.$route.name.search('book') == -1)
      {
        navBar.classList.add('h-24')
        navBar.classList.remove('h-16')
        logo.classList.add('h-[4.625rem]')
        logo.classList.remove('h-14')
      }
    });
  },
  methods: {
    UpdateDefaultStyle() {
      const navBar = document.querySelector('nav');
      const logo = document.querySelector('#logo');
      if (this.$route.name.search('book') !== -1) {
        navBar.classList.remove('h-24')
        navBar.classList.add('h-16')
        logo.classList.remove('h-[4.625rem]')
        logo.classList.add('h-14')
      }
      else {
        navBar.classList.add('h-24')
        navBar.classList.remove('h-16')
        logo.classList.add('h-[4.625rem]')
        logo.classList.remove('h-14')
      }
    },
  },
};
</script>
