<script setup>
const { t } = useI18n()

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})

useHead({
  title: t('index.meta.title'),
  htmlAttrs: {
    lang: head.value.htmlAttrs.lang,
    dir: head.value.htmlAttrs.dir,
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index, follow' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  script: [
        {
          innerHTML: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:5312041,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
          type: 'text/javascript',
        },
      ],
})

onMounted(() => {
  const style = 'background: #1A1D1A; color: #eee; border-radius: 4px; padding: 2px 10px; border: 1px solid #595859; font-size: 16px;'
  console.log(
    '%cWebsite designed and developed by Erwan Decoster www.erwan-decoster.com in Nuxt 🤍\nGithub repo : https://github.com/ErwanDecoster/Domaine-de-Pipangaille',
    style,
  )
})
</script>

<template>
  <div class="text-eerie-black bg-white dark:bg-eerie-black dark:text-white min-h-[100vh] h-full">
    <NavBar />
    <NuxtPage />
    <LazyFooter />
  </div>
</template>

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

h1, h2, h3, h4, h5 {
    font-family: "WollstonecraftRomance";
    src: local("WollstonecraftRomance"),
     url(~/assets/font/WollstonecraftRomance-Regular.ttf) format("truetype");
}
</style>
