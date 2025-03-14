<script>
import { aProximiter, Imgs } from '@/data'

export default {
  data() {
    return {
      group: this.$route.params.group === 'to-visit' || this.$route.params.group === 'a-visiter' ? 'toVisit' : 'restore',
      Imgs,
      aProximiterSelected: null,
      aProximiterNoSelected: [],
      aProximiter,
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  created() {
    this.SelectAProximite()
    this.NoSelectAProximites()
    if (this.aProximiterSelected) {
      const title = `${this.aProximiterSelected.title} - ${this.$t(`near.title`)} - Domaine de Pipangaille`
      if (title.length >= 70)
        title = `${this.aProximiterSelected.title} - ${this.$t(`near.title`)}`
      const desc = this.$t(`near.${this.group}.${this.aProximiterSelected.i18n}.shortDesc`)
      const img = this.Imgs[this.aProximiterSelected.imgs[1].id].srcs[0]
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
          { property: 'og:image', content: `https://domaine-de-pipangaille.fr${img}` },
          { property: 'twitter:card', content: 'summary_large_image' },
          { property: 'twitter:site', content: '@D_Pipangaille' },
          { property: 'twitter:creator', content: '@D_Pipangaille' },
          { property: 'twitter:title', content: title },
          { property: 'twitter:description', content: desc },
          { property: 'twitter:image', content: `https://domaine-de-pipangaille.fr${img}` },
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
    else {
      throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found',
      })
    }
  },
  methods: {
    SelectAProximite() {
      if (this.group === 'toVisit') {
        this.aProximiter.aVisiter.forEach((element) => {
          if (element.slug === this.$route.params.id) {
            this.aProximiterSelected = element
          }
        })
      }
      else if (this.group === 'restore') {
        this.aProximiter.seRestaurer.forEach((element) => {
          if (element.slug === this.$route.params.id) {
            this.aProximiterSelected = element
          }
        })
      }
      else {
        route.push('/')
      }
    },
    NoSelectAProximites() {
      if (this.group === 'toVisit') {
        this.aProximiterNoSelected = this.aProximiter.aVisiter.filter(item => item !== this.aProximiterSelected)
      }
      else if (this.group === 'restore') {
        this.aProximiterNoSelected = this.aProximiter.seRestaurer.filter(item => item !== this.aProximiterSelected)
      }
    },
  },
}
</script>

<template>
  <div class="mb-8 md:pt-[5.25rem]">
    <section class="max-w-screen-xl mx-auto px-4 grid gap-8 pt-16">
      <div v-if="aProximiterSelected" class="mx-auto grid gap-8 w-full">
        <h1 class="text-4xl sm:text-5xl">
          {{ aProximiterSelected.title }}
        </h1>
        <CardTypeOn
          :title="group === 'toVisit' ? $t('near.toVisit.thePlace') : $t('near.restore.restaurant')"
          :content="$tm(`near.${group}.${aProximiterSelected.i18n}.longDesc`)"
          :imgs="[Imgs[aProximiterSelected.imgs[1].id], Imgs[aProximiterSelected.imgs[2].id]]"
          :links="aProximiterSelected.links"
        />
        <div
          v-if="aProximiterSelected.mapsUrl"
          class="grid h-[328px] rounded overflow-hidden"
        >
          <iframe
            :title="`Carte Google Maps de l'emplacement de ${aProximiterSelected.title}`"
            class="h-full w-full bg-northern_light_grey font-bold dark:hue-rotate-180 dark:invert-[0.8] dark:contrast-125"
            :src="`${aProximiterSelected.mapsUrl}`"
            allowfullscreen="true"
            loading="lazy"
          />
        </div>
      </div>
      <div
        v-if="aProximiterNoSelected"
        class="grid gap-4"
      >
        <h2 class="text-4xl">
          {{ group === 'toVisit' ? $t('near.toVisit.otherPlaceToVisit') : $t('near.restore.anotherPlaceToEat') }}
        </h2>
        <PageCardGroup
          :prop-elements-list="aProximiterNoSelected"
          target-page="near"
        />
      </div>
    </section>
  </div>
</template>
