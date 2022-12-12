<template>
  <footer class="p-8 bg-white dark:bg-eerie-black rounded-t-2xl shadow-lg-inverted dark:shadow-lg-dark-inverted z-10">
    <div class="max-w-screen-lg mx-auto relative flex justify-center">
      <NuxtLink to="/" class="hidden sm:block p-2 absolute left-0 top-1/2 -translate-y-1/2 md:translate-x-1/2">
        <picture>
          <source 
            srcset="/images/logo_domaine_de_pipangaille_light.svg" 
            media="(prefers-color-scheme: dark)">
          <img id="logo" width="165" height="74" loading="lazy" class="h-[4.625rem] duration-200" src="/images/logo_domaine_de_pipangaille.svg" alt="logo du Domaine de Pipangaille">
        </picture>
      </NuxtLink>
      <div class="grid sm:grid-cols-2 sm:gap-12">
        <div class="flex flex-col items-center">
          <ButtonInline link="https://www.facebook.com/domainedepipangaille" content="Facebook" newWindow="_blank" />
          <ButtonInline link="https://www.linkedin.com/company/domaine-de-pipangaille/" content="LinkedIn" newWindow="_blank" />
          <ButtonInline link="https://www.instagram.com/domaine_de_pipangaille" content="Instagram" newWindow="_blank" />
        </div>
        <div class="flex flex-col items-center">
          <ButtonInline link="/contact" content="Contact" />
          <ButtonInline link="/legal_notice" content="Mentions Légales" />
          <ButtonInline link="/condition_general_de_vente" content="Condition general de vente" />
        </div>
      </div>
    </div>
  </footer>
</template>