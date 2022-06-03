<template>
  <nav class="hidden sm:flex bg-white shadow-lg rounded-b-xl absolute top-0 h-24 inset-x-0 z-10">
    <div class="max-w-screen-lg mx-auto w-full flex justify-between items-center  px-8">
      <div class="flex items-center gap-2 md:gap-4">
        <NuxtLink class="hidden md:block" to="/">
          <img src="@/assets/images/logo.svg" alt="logo du Domaine de Pipangaile">
        </NuxtLink>
        <NuxtLink to="/" class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md">Domaine de Pipangaille</NuxtLink>
        <NuxtLink to="/hebergements" class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md">Nos hebergements</NuxtLink>
        <NuxtLink to="/le_lieu" class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md">Le lieu</NuxtLink>
        <NuxtLink to="/a_proximiter" class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md">A proximiter</NuxtLink>
      </div>
      <NuxtLink to="/contact" class="p-2 px-4 flex items-center bg-almond rounded-lg text-md">Nous contactez</NuxtLink>
    </div>
  </nav>
  <button @click="fullNavOpen = !fullNavOpen" aria-label="Voir le menu" class="sm:hidden group h-8 w-8 absolute right-6 top-6 flex flex-col gap-2 z-10">
    <span class="w-full bg-black h-1 block rounded-full"></span>
    <span class="group-hover:w-1/3 w-full duration-150 bg-black h-1 block rounded-full"></span>
    <span class="w-full bg-black h-1 block rounded-full"></span>
  </button>
  <div v-if="fullNavOpen === true" class="md:hidden fixed z-30 inset-0 bg-white">
    <button @click="fullNavOpen = !fullNavOpen" class="h-8 w-8 absolute right-6 top-6 flex flex-col gap-2 duration-150 hover:rotate-45">
      <span class="w-full bg-black h-1 block rounded-full rotate-45 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"></span>
      <span class="w-full bg-black h-1 block rounded-full -rotate-45 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"></span>
    </button>
    <NuxtLink to="/" class="group flex gap-2 items-center absolute left-6 top-6">
      <p class="whitespace-nowrap text-xl">domaine-de-pipangaille.fr</p>
    </NuxtLink>
    <div class="flex flex-col justify-center items-center gap-4 mx-auto w-max h-full">
      <NuxtLink @click="fullNavOpen = !fullNavOpen" to="/" class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-xl">Domaine de Pipangaille</NuxtLink>
      <NuxtLink @click="fullNavOpen = !fullNavOpen" to="/hebergements" class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-xl">Nos hebergements</NuxtLink>
      <NuxtLink @click="fullNavOpen = !fullNavOpen" to="/le_lieu" class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-xl">Le lieu</NuxtLink>
      <NuxtLink @click="fullNavOpen = !fullNavOpen" to="/a_proximiter" class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-xl">A proximiter</NuxtLink>
      <NuxtLink @click="fullNavOpen = !fullNavOpen" to="/contact" class="p-2 px-4 flex items-center bg-almond rounded-lg text-xl">Nous contactez</NuxtLink>
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
  methods: {
  },
  computed: {
  }
};
</script>
