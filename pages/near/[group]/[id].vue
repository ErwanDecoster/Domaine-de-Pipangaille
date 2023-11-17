<template>
  <div class="mb-8 md:pt-[5.25rem]">
    <section class="max-w-screen-xl mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">
        {{ aProximiterSelected.title }}
      </h1>
      <CardTypeOn 
        :title="group === 'toVisit' ? 'Le lieu' : 'Le restaurant'" 
        :content="$tm(`near.${group}.${aProximiterSelected.i18n}.longDesc`)"
        :imgs="[Imgs[aProximiterSelected.imgs[1].id], Imgs[aProximiterSelected.imgs[2].id]]"
        :links="aProximiterSelected.links" 
      />
      <div 
        v-if="aProximiterSelected.mapslink"
        class="grid h-[328px] rounded overflow-hidden"
      >
        <iframe 
          :title="`Carte Google Maps de la localisation de ${aProximiterSelected.title}`" 
          class="h-full w-full bg-northern_light_grey font-bold dark:hue-rotate-180 dark:invert-[0.8] dark:contrast-125"
          :src="`${aProximiterSelected.mapslink}`"
          allowfullscreen="true"
          loading="lazy"
        />
      </div>
      <div class="grid gap-4">
        <h2 class="text-4xl">
          {{ group === 'toVisit' ? 'Autre lieu a visiter' : 'Autre endroit ou se restaurer' }}
        </h2>
        <PageCardGroup
          v-if="aProximiterNoSelected"
          :propElementsList="aProximiterNoSelected"
          targetPage="near"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { aProximiter } from '@/data';
import { Imgs } from '@/data';

export default {
  data() {
    return {
      group: this.$route.params.group === 'to-visit' || this.$route.params.group === 'à-visiter' ? 'toVisit' : 'restore',
      Imgs: Imgs,
      aProximiterSelected: [],
      aProximiterNoSelected: [],
      aProximiter: aProximiter,
    };
  },
  mounted() {
    window.scrollTo(0,0)
  },
  created() {
    this.SelecteAProximite();
    this.NoSelecteAProximites()
    const title = this.aProximiterSelected.title + " - " + this.$t(`near.title`) + " - Domaine de Pipangaille"
    const desc = this.$t(`near.${this.group}.${this.aProximiterSelected.i18n}.shortDesc`)
    useHead({
      title: title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: desc, 
        },
        { property: 'og:url', content: 'https://domaine-de-pipangaille.fr' + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + this.aProximiterSelected.imgs[1].link },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: desc },
        { property: 'twitter:image', content: 'https://domaine-de-pipangaille.fr' + this.aProximiterSelected.imgs[1].link },
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
    SelecteAProximite() {
      if (this.group === 'toVisit') {
        this.aProximiter.aVisiter.forEach(element => {
          if (element.slug === this.$route.params.id) {
            this.aProximiterSelected = element;
          }
        });
      }
      else if (this.group === 'restore' ) {
        this.aProximiter.seRestaurer.forEach(element => {
          if (element.slug === this.$route.params.id) {
            this.aProximiterSelected = element;
          }
        });
      }
    },
    NoSelecteAProximites() {
      if (this.group === 'toVisit') {
        this.aProximiterNoSelected = this.aProximiter.aVisiter.filter(item => item !== this.aProximiterSelected );
      }
      else if (this.group === 'restore') {
        this.aProximiterNoSelected = this.aProximiter.seRestaurer.filter(item => item !== this.aProximiterSelected );
      }
    },
    // FormatTime(min){
    //   if (min < 60) {
    //     return `${min}m`;
    //   }
    //   else {
    //     if (min % 60 === 0) {
    //       const h = Math.floor(min / 60)
    //       return `${h}h`;
    //     }
    //     else {
    //       const m = min % 60
    //       const h = Math.floor(min / 60)
    //       return `${h}h${m}m`;
    //     }
    //   }
    // }
  },
};
</script>