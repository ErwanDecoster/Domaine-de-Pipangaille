<script>
import { aProximiter, Imgs } from '@/data'

export default {
  data() {
    return {
      aProximiter,
      Imgs,
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  created() {
    const desc = this.$t('near.meta.desc')
    const title = this.$t('near.meta.title')
    const img = 'https://domaine-de-pipangaille.fr' + '/images/palais_idéal_du_facteur_cheval_378x213.webp'
    useHead({
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: desc,
        },
        { property: 'og:url', content: `https://domaine-de-pipangaille.fr${this.$route.path}` },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:image', content: img },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: desc },
        { property: 'twitter:image', content: img },
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
}
</script>

<template>
  <div class="mb-8 md:pt-[5.25rem]">
    <section class="max-w-screen-xl mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">
        {{ $t('near.title') }}
      </h1>
      <CardTypeOn
        :title="$t('near.toVisitDescTitle')"
        :content="$tm('near.toVisitDescText')"
        :imgs="[Imgs[31], Imgs[28]]"
        :links="[{
          label: 'findModePlace',
          url: 'https://www.autour-du-palais-ideal.fr/ ',
        }]"
      />
      <div class="grid gap-2">
        <PageCardGroup
          :prop-elements-list="aProximiter.aVisiter"
          target-page="near"
          :show-filter="true"
        />
      </div>
      <div class="grid md:grid-cols-2 rounded overflow-hidden">
        <img
          :src="Imgs[2].srcs[0]"
          :alt="Imgs[2].alt"
          :srcset="
            `${Imgs[2].srcs[0]} 309w, ${
              Imgs[2].srcs[1]} 462w`"
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
        :prop-elements-list="aProximiter.seRestaurer"
        target-page="near"
      />
    </section>
  </div>
</template>
