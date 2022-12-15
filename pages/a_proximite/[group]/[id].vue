<template>
  <div class="mb-8">
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">{{ aProximiterSelected.title }}</h1>
      <CardTypeOn 
        :title="$route.params.group === 'a_visiter' ? 'Le lieu' : 'Le restaurant'" 
        :content="aProximiterSelected.longDesc"
        :imgs="[{ src: aProximiterSelected.imgs[1].link, alt: aProximiterSelected.imgs[1].alt }, { src: aProximiterSelected.imgs[2].link, alt: aProximiterSelected.imgs[2].alt }]"
        :links="aProximiterSelected.links" />
      <div v-if="aProximiterSelected.mapslink" class="grid h-[328px] rounded overflow-hidden">
        <iframe :title="`Carte Google Maps de la localisation de ${aProximiterSelected.title}`" class="h-full w-full bg-northern_light_grey font-bold dark:hue-rotate-180 dark:invert-[0.8] dark:contrast-125" :src="`${aProximiterSelected.mapslink}`" allowfullscreen="true" loading="lazy"></iframe>
      </div>
      <div>
        <h2 class="text-4xl">{{ $route.params.group === 'a_visiter' ? 'Autre lieu a visiter' : 'Autre endroit ou se restaurer' }}</h2>
        <PageCardGroup v-if="aProximiterNoSelected" :propElementsList="aProximiterNoSelected" targetPage="a_proximite"/>
      </div>
    </section>
  </div>
</template>

<script>
import { aProximiter } from '@/data';

export default {
  data() {
    return {
      aProximiterSelected: [],
      aProximiterNoSelected: [],
      aProximiter: aProximiter,
    };
  },
  methods: {
    SelecteAProximite() {
      const group = this.$route.params.group;
      if (group === 'a_visiter') {
        this.aProximiter.aVisiter.forEach(element => {
          if (element.slug === this.$route.params.id) {
            this.aProximiterSelected = element;
          }
        });
      }
      else if (group === 'se_restaurer') {
        this.aProximiter.seRestaurer.forEach(element => {
          if (element.slug === this.$route.params.id) {
            this.aProximiterSelected = element;
          }
        });
      }
    },
    NoSelecteAProximites() {
      const group = this.$route.params.group;
      if (group === 'a_visiter') {
        this.aProximiterNoSelected = this.aProximiter.aVisiter.filter(item => item !== this.aProximiterSelected );
      }
      else if (group === 'se_restaurer') {
        this.aProximiterNoSelected = this.aProximiter.seRestaurer.filter(item => item !== this.aProximiterSelected );
      }
    },
    FormatTime(min){
      if (min < 60) {
        return `${min}m`;
      }
      else {
        if (min % 60 === 0) {
          const h = Math.floor(min / 60)
          return `${h}h`;
        }
        else {
          const m = min % 60
          const h = Math.floor(min / 60)
          return `${h}h${m}m`;
        }
      }
    }
  },
  mounted() {
    window.scrollTo(0,0)
  },
  created() {
    this.SelecteAProximite();
    this.NoSelecteAProximites()
    useHead({
      title: `${this.aProximiterSelected.title} - Domaine de Pipangaille`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.aProximiterSelected.shortDesc, 
        },
        { property: 'og:url', content: 'https://domaine-de-pipangaille.fr' + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.aProximiterSelected.title + ' - Domaine de Pipangaille'},
        { property: 'og:description', content: this.aProximiterSelected.shortDesc },
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + this.aProximiterSelected.imgs[1].link },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: this.aProximiterSelected.title + ' - Domaine de Pipangaille'},
        { property: 'twitter:description', content: this.aProximiterSelected.shortDesc },
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
  }
};
</script>