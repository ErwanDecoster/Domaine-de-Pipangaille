<template>
  <div class="mb-8">
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">{{ hebergementSelected.title }}</h1>
      <CardTypeOn 
        title="La chambre" 
        :content="hebergementSelected.longDesc"
        :imgs="[{ src: hebergementSelected.imgs[1].link, alt: hebergementSelected.imgs[1].alt }, { src: hebergementSelected.imgs[2].link, alt: hebergementSelected.imgs[1].alt }]" 
        :button="[{ target: '/book', content: 'Reserver maintenent' }]"/>
      <div class="grid gap-2">
        <h2 class="text-4xl">Equipements</h2>
        <div class="w-full lg:w-4/5 grid sm:grid-cols-2 md:grid-cols-3 gap-1">
          <div v-for="row in hebergementSelected.equipements" :key="row" class="p-1 flex gap-4">
            <img v-if="row.path" width="24" height="24" class="w-6 h-6 bg dark:invert font-bold aspect-square" :src="`/images/${row.path}.svg`" :alt="row.imgAlt">
            <p class="">{{ row.label }}</p>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 rounded overflow-hidden">
        <img src="https://www.generali.fr/sites/default/files-d8/2019-09/Table_dhote.jpg" alt="Description de l'image" class="aspect-video md:h-full w-full bg-northern_light_grey font-bold">
        <div class="bg-almond dark:bg-dark-almond flex flex-col gap-2 p-6 md:p-8">
          <h2 class="text-4xl">La table d’hote</h2>
          <p class="grow">Sur reservation, il s'agit d'un repas unique specialité des regions allentour caillette, raviole... Cuisiné avec des produit locaux et bio autant que possible, ainsi qu'avec les legume du potager, le repas est suivis d'un dessert fait maison ou glace Adelise.</p>
        </div>
      </div>
      <CardTypeOn 
        title="La cuisine d'été" 
        :content="[{ text: `Nous mettons à votre disposition une petite cuisine commune toute équipées. Vous disposeriez à l'intérieur de celle-ci des équipements suivants : Four, Frigo, Plaque de cuisson, Bouilloir, Lave vaisselle, Lave linge` }, { text: `Vous disposerez à l'intérieur de celle-ci d'un emplacement pour recharger vos batteries de velo électrique.`}]"
        :imgs="[{ src: Imgs[20].link, alt: Imgs[20].alt }, { src: Imgs[21].link, alt: Imgs[21].alt }]" />
      <div class="w-full h-full relative">
        <div class="bg-almond dark:bg-dark-almond left-0 right-0 md:right-1/3 absolute h-2/3 md:h-full rounded"></div>
        <div class="p-6 md:pl-10 md:py-10 z-10 relative grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex flex-col gap-2 h-full">
            <h2 class="text-4xl">Le Domaine de Pipangaille</h2>
            <p class="grow">Ancienne magnanerie récemment rénovée situer au coeur de la vallée du Rhône le domaine se trouve dans la partie centrale d'une propriété de trois hectares principalement entourés de bois le domaine est à moins d'un kilometre du centre du petit village d'Andancette. Cette manique batisse a pour point fort son grand jardin disposant de nombreux espaces isolés les uns des autres et pouvant accueillir de grands événements anniversaires, soirée, mariage et bien d'autre encore.</p>
            <NuxtLink to="/le_lieu" class="p-2 px-4 rounded-lg bg-eerie-black text-md w-max text-white duration-100 border border-eerie-black hover:bg-almond hover:text-eerie-black hover:rounded-md">En savoir plus</NuxtLink>
          </div>
          <nuxt-img
            :width="`${448*1.5}`"
            :height="`${252*1.5}`"
            quality="100"
            format="webp"
            placeholder
            class="rounded shadow-lg dark:shadow-lg-dark aspect-video object-cover bg-northern_light_grey font-bold" 
            :src="Imgs[18].link"
            :alt="Imgs[18].alt" />
        </div>
      </div>
      <div>
        <h2 class="text-4xl">Nos autre hebergements</h2>
        <PageCardGroup v-if="hebergementsNoSelected" :propElementsList="hebergementsNoSelected" targetPage="hebergements"/>
      </div>
    </section>
  </div>
</template>

<script>
import { hebergements } from '@/data';
import { Imgs } from '@/data';

export default {
  data() {
    return {
      Imgs: Imgs,
      hebergementSelected: [],
      hebergementsNoSelected: [],
      hebergements: hebergements,
    };
  },
  methods: {
    SelecteHebergement() {
      this.hebergements.forEach(hebergement => {
        if (hebergement.slug === this.$route.params.id) {
          this.hebergementSelected = hebergement;
        }
      });
    },
    NoSelecteHebergements() {
      this.hebergementsNoSelected = this.hebergements.filter(item => item !== this.hebergementSelected );
    }
  },
  mounted() {
    window.scrollTo(0,0);
  },
  created() {
    this.SelecteHebergement()
    this.NoSelecteHebergements()
    useHead({
      title: `${this.hebergementSelected.title} - Domaine de Pipangaille`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.hebergementSelected.shortDesc, 
        },
        { property: 'og:url', content: 'https://domaine-de-pipangaille.fr' + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.hebergementSelected.title + ' - Domaine de Pipangaille'},
        { property: 'og:description', content: this.hebergementSelected.shortDesc },
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + this.hebergementSelected.imgs[1].link },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@erwan0711' },
        { property: 'twitter:creator', content: '@erwan0711' },
        { property: 'twitter:title', content: this.hebergementSelected.title + ' - Domaine de Pipangaille'},
        { property: 'twitter:description', content: this.hebergementSelected.shortDesc },
        { property: 'twitter:image', content: 'https://domaine-de-pipangaille.fr' + this.hebergementSelected.imgs[1].link },
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
