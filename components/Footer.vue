<script setup>
const route = useRoute()

const onBookPage = computed(() => !route.name.includes('book'))
</script>

<template>
  <footer
    v-if="onBookPage"
    class="p-8 pb-16 lg:pb-8 bg-white dark:bg-eerie-black rounded-t-2xl shadow-lg-inverted dark:shadow-lg-dark-inverted z-10"
  >
    <div class="max-w-screen-xl gap-y-8 mx-auto relative grid lg:grid-cols-5 justify-items-center items-center">
      <NuxtLink
        :to="$localePath({ name: 'index' })"
        class="hidden lg:block"
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
            loading="lazy"
            title="Domaine de Pipangaille"
            class="h-[4.625rem] duration-200"
            src="/images/logo_domaine_de_pipangaille.svg"
            alt="logo du Domaine de Pipangaille"
          >
        </picture>
      </NuxtLink>
      <div class="grid sm:grid-cols-2 gap-y-8 sm:gap-12 lg:col-span-3">
        <div class="grid grid-cols-2 justify-items-center">
          <h2 class="col-span-2 text-xl pb-2">
            {{ $t('ourSocialNetworks') }}
          </h2>
          <ButtonInline
            link="https://facebook.com/domainedepipangaille"
            content="facebook"
            new-window="_blank"
          />
          <ButtonInline
            link="https://instagram.com/domaine_de_pipangaille"
            content="instagram"
            new-window="_blank"
          />
          <ButtonInline
            link="https://linkedin.com/company/domaine-de-pipangaille/"
            content="linkedin"
            new-window="_blank"
          />
          <ButtonInline
            link="https://twitter.com/D_Pipangaille"
            content="x"
            new-window="_blank"
          />
        </div>
        <div class="grid grid-cols-2 justify-items-center">
          <h2 class="col-span-2 text-xl pb-2">
            {{ $t('ourOtherPages') }}
          </h2>
          <LocalButtonInline
            link="contact"
            content="contact.contactUs"
          />
          <LocalButtonInline
            link="legal_notice"
            content="legalNotice.title"
          />
          <LocalButtonInline
            link="general_condition_of_sale"
            content="generalConditionOfSale.title"
            class="col-span-2"
          />
        </div>
      </div>
      <LangSwitcher place="footer" />
    </div>
  </footer>
</template>
