<template>
  <div class="mb-8">
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">{{ aProximiterSelected.title }}</h1>
      <div class="w-full h-full relative">
        <div class="bg-almond dark:bg-dark-almond left-0 right-0 md:right-32 absolute top-8 bottom-8 rounded"></div>
        <div class="z-10 relative grid grid-cols-1 md:grid-cols-2">
          <div class="flex flex-col gap-2 h-full p-6 md:p-8 pt-12 md:py-16">
            <h2 class="text-4xl">{{ $route.params.group === 'a_visiter' ? 'Le lieu' : 'Le restaurant' }}</h2>
            <p class="grow">{{ aProximiterSelected.longDesc }}</p>
            <div v-if="aProximiterSelected.links" class="flex gap-4 flex-wrap md:w-[130%]">
              <a v-for="link in aProximiterSelected.links" :key="link" :href="link.link" target="_blank" class="p-2 px-4 rounded-lg bg-eerie-black text-md w-max text-white duration-100 border border-eerie-black hover:bg-almond hover:text-eerie-black hover:rounded-md">{{ link.label }}</a>
            </div>
          </div>
          <div class="relative">
            <nuxt-img
              :width="`${330*1.5}`"
              :height="`${186*1.5}`"
              quality="90"
              format="webp"
              placeholder
              preload
              class="rounded hover:z-10 shadow-lg dark:shadow-lg-dark md:absolute md:top-0 md:left-0 w-3/5 md:w-2/3 aspect-video object-cover bg-northern_light_grey font-bold" 
              v-if="aProximiterSelected.imgs[1].link" :src="aProximiterSelected.imgs[1].link" 
              :alt="aProximiterSelected.imgs[1].alt" />
            <nuxt-img
              :width="`${330*1.5}`"
              :height="`${186*1.5}`"
              quality="90"
              format="webp"
              placeholder
              preload
              class="rounded hover:z-10 shadow-lg ml-auto -mt-20 md:absolute md:bottom-0 md:right-0 w-2/3 aspect-video object-cover bg-northern_light_grey font-bold" 
              v-if="aProximiterSelected.imgs[2].link" :src="aProximiterSelected.imgs[2].link" 
              :alt="aProximiterSelected.imgs[2].alt" />
          </div>
        </div>
      </div>
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
        { property: 'og:url', content: 'http://localhost:3000' + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.aProximiterSelected.title },
        { property: 'og:description', content: this.aProximiterSelected.shortDesc },
        { property: 'og:image', content: 'http://localhost:3000' + this.aProximiterSelected.imgs[1].link },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: this.aProximiterSelected.title },
        { property: 'twitter:description', content: this.aProximiterSelected.shortDesc },
        { property: 'twitter:image', content: 'http://localhost:3000' + this.aProximiterSelected.imgs[1].link },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `http://localhost:3000${this.$route.path}`,
        },
      ],
    })
  }
};
</script>