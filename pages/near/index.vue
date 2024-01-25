<template>
  <div class="mb-8 md:pt-[5.25rem]">
    <section class="max-w-screen-xl mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">
        {{ $t('near.title') }}
      </h1>
      <CardTypeOn 
        :title="$t('near.toVisitDescTitle')"
        :content="$tm('near.toVisitDescText')"
        :imgs="[ Imgs[31], Imgs[28] ]"
      />
      <div class="grid gap-2">
        <PageCardGroup
          :propElementsList="aProximiter.aVisiter"
          targetPage="near"
          :showFilter="true"
        />
      </div>
      <div class="grid md:grid-cols-2 rounded overflow-hidden">
        <img 
          :src="Imgs[2].srcs[0]" 
          :alt="Imgs[2].alt" 
          :srcset="
            Imgs[2].srcs[0] + ' 309w, ' +
              Imgs[2].srcs[1] + ' 462w'"
          sizes="462px"
          class="aspect-video w-full md:h-full object-cover bg-northern_light_grey font-bold"
          loading="lazy"
        >
        <div class="bg-almond dark:bg-dark-almond flex flex-col gap-2 p-6 md:p-8">
          <h2 class="text-4xl">
            {{ $t('near.restoreDescTitle') }}
          </h2>
          <p class="grow">
            {{ $t('near.restoreDescText') }}
          </p>
        </div>
      </div>
      <div class="grid md:grid-cols-2 rounded overflow-hidden">
        <img
          src="/images/table_d_hote.png"
          alt="Description de l'image"
          loading="lazy"
          class="aspect-video md:h-full md:order-1 object-cover bg-northern_light_grey font-bold"
        >
        <div class="bg-almond dark:bg-dark-almond flex flex-col gap-2 p-6 md:p-8">
          <h2 class="text-4xl">
            {{ $t('near.guestTableTitle') }}
          </h2>
          <p class="grow">
            {{ $t('near.guestTableText') }}
          </p>
        </div>
      </div>
      <PageCardGroup
        :propElementsList="aProximiter.seRestaurer"
        targetPage="near"
      />
    </section>
  </div>
</template>

<script>
import { aProximiter } from '@/data';
import { Imgs } from '@/data';

export default {
  data() {
    return {
      aProximiter: aProximiter, 
      Imgs: Imgs,
    };
  },
  mounted() {
    window.scrollTo(0,0);
  },
  created() {
    const desc = this.$t('near.meta.desc')
    const title = this.$t('near.meta.title')
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
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + '/images/palais_idéal_du_facteur_cheval.jpg' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: desc },
        { property: 'twitter:image', content: 'https://domaine-de-pipangaille.fr' + '/images/palais_idéal_du_facteur_cheval.jpg' },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://domaine-de-pipangaille.fr${this.$route.path}`,
        },
      ],
    })
  },
  methods: {
    
  },
};
</script>