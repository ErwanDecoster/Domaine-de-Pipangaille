<script>
import { Imgs, accommodations } from '@/data'

export default {
  data() {
    return {
      accommodations,
      Imgs,
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  created() {
    const desc = this.$t('accommodation.meta.desc')
    const title = this.$t('accommodation.meta.title')
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
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + '/images/chambres_d_hotes_couloir_462x347.webp' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: desc },
        { property: 'twitter:image', content: 'https://domaine-de-pipangaille.fr' + '/images/chambres_d_hotes_couloir_462x347.webp' },
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
}
</script>

<template>
  <div class="mb-8 md:pt-[5.25rem]">
    <section class="max-w-screen-xl mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">
        {{ $t('accommodation.title') }}
      </h1>
      <CardTypeOn
        :title="$t('accommodation.guestroomDescTitle')"
        :content="$tm('accommodation.guestroomDescText')"
        :imgs="[Imgs[17], Imgs[16]]"
      />
      <div class="grid md:grid-cols-2 rounded overflow-hidden">
        <img
          src="/images/petit_dejeuner.png"
          alt="photo d'un petit déjeuner"
          class="aspect-video md:h-full w-full object-cover bg-northern_light_grey font-bold"
        >
        <div class="bg-almond dark:bg-dark-almond flex flex-col gap-2 p-6 md:p-8">
          <h2 class="text-4xl">
            {{ $t('accommodation.breakfastTitle') }}
          </h2>
          <p
            v-for="row in $tm('accommodation.breakfastText')"
            :key="row"
            class="grow"
          >
            {{ $rt(row) }}
          </p>
        </div>
      </div>
      <PageCardGroup
        v-if="accommodations"
        :prop-elements-list="accommodations"
        target-page="accommodation"
      />
    </section>
  </div>
</template>
