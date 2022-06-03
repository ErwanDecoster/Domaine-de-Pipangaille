<template>
  <footer class="p-8 bg-white rounded-t-2xl shadow-rlg ">
    <div class="max-w-screen-lg mx-auto relative flex justify-center">
    <NuxtLink to="/hebergements" class="hidden sm:block p-2 absolute left-0 top-1/2 -translate-y-1/2 md:translate-x-1/2">
      <img src="@/assets/images/logo.svg" alt="logo du Domaine de Pipangaile">
    </NuxtLink>
      <div class="grid grid-cols-2 gap-12">
        <ul class="flex flex-col align-middle ">
          <li class="w-full text-center">
            <a href="https://www.facebook.com/domainedepipangaille" target="_blank" class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md">Facebook</a>
          </li>
          <li class="w-full text-center">
            <a href="https://www.instagram.com/domaine_de_pipangaille/" target="_blank" class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md">Instagram</a>
          </li>
        </ul>
        <ul class="flex flex-col align-middle ">
          <li class="w-full text-center">
            <NuxtLink to="/contact" class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md">Contact</NuxtLink>
          </li>
          <li class="w-full text-center">
            <NuxtLink to="/legal_notice" class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md">Mensions Legal</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>