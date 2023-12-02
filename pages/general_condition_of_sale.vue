<template>
  <div class="mb-8 md:pt-[5.25rem]">
    <section class="max-w-screen-xl mx-auto px-4 grid gap-8 pt-16">
      <div class="grid gap-2">
        <h1 class="text-4xl sm:text-5xl">
          {{ $t('generalConditionOfSale.pageTitle') }}
        </h1>
        <p class="text-3xl sm:text-4xl text-davys-grey">
          {{ company }}
        </p>
      </div>
      <div class="grid gap-8">
        <div 
          v-for="(article, index) in $tm('generalConditionOfSale.articles')"
          :key="article"
          class="grid gap-2"
        >
          <h2 class="text-4xl uppercase">
            ARTICLE 
            {{ index + 1 }} - {{ $rt(article.title) }}
          </h2>
          <div class="grid gap-2">
            <p 
              v-for="row in article.description"
              :key="row"
            >
              {{ $rt(row, { minCheckIn: minCheckIn, maxCheckIn: maxCheckIn, maxCheckOut: maxCheckOut, tel: tel }) }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      company: "Domaine de Pipangaille",
      tel: "+33475682824",
      minCheckIn: "17h",
      maxCheckIn: "22h",
      maxCheckOut: "10h30",
    };
  },
  mounted() {
    window.scrollTo(0,0);
  },
  created() {
    const desc = this.$t('generalConditionOfSale.meta.desc')
    const title = this.$t('generalConditionOfSale.meta.title')
    useHead({
      title: title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: desc 
        },
        { property: 'og:url', content: 'https://domaine-de-pipangaille.fr' + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + '/images/logo_domaine_de_pipangaille.svg' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: desc },
        { property: 'twitter:image', content: 'https://domaine-de-pipangaille.fr' + '/images/logo_domaine_de_pipangaille.svg' },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://domaine-de-pipangaille.fr${this.$route.path}`,
        },
      ],
    })
  }
};
</script>