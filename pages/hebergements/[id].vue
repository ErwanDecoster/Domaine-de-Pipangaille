<template>
  <div class="mb-8">
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">
        {{ hebergementSelected.title }}
      </h1>
      <CardTypeOn 
        title="La chambre" 
        :content="hebergementSelected.longDesc"
        :imgs="[{ src: hebergementSelected.imgs[1].link, alt: hebergementSelected.imgs[1].alt }, { src: hebergementSelected.imgs[2].link, alt: hebergementSelected.imgs[1].alt }]" 
        :button="[{ target: '/book', content: 'Reserver maintenent' }]"
      />
      <div class="grid gap-2">
        <h2 class="text-4xl">
          Photos
        </h2>
        <div class="flex flex-wrap sm:grid grid-cols-2 md:grid-cols-3 gap-4">
          <nuxt-img
            v-for="img in hebergementSelected.imgs"
            id="1"
            :key="img"
            :src="img.link" 
            :width="`${320*1.5}`"
            :height="`${288*1.5}`"
            quality="90"
            format="webp"
            placeholder
            preload
            class="object-cover bg-northern_light_grey font-bold duration-500 group-hover:scale-110 h-72 group w-full relative rounded overflow-hidden shadow cursor-pointer" 
            :alt="img.alt"
            @click="OpenPicture($event, img)"
          />
        </div>
      </div>
      <div class="grid gap-2">
        <h2 class="text-4xl">
          Equipements
        </h2>
        <div class="w-full lg:w-4/5 grid sm:grid-cols-2 md:grid-cols-3 gap-1">
          <div 
            v-for="row in hebergementSelected.equipements"
            :key="row"
            class="p-1 flex gap-4"
          >
            <img 
              v-if="row.path"
              width="24"
              height="24"
              class="w-6 h-6 bg dark:invert font-bold aspect-square"
              :src="`/images/${row.path}.svg`"
              :alt="row.imgAlt"
            >
            <p class="">
              {{ row.label }}
            </p>
          </div>
        </div>
      </div>
      <h1 class="text-4xl sm:text-5xl">
        Nos propositions
      </h1>
      <div class="grid md:grid-cols-2 rounded overflow-hidden">
        <img
          src="https://www.generali.fr/sites/default/files-d8/2019-09/Table_dhote.jpg"
          alt="Description de l'image"
          class="aspect-video md:h-full w-full bg-northern_light_grey font-bold"
        >
        <div class="bg-almond dark:bg-dark-almond flex flex-col gap-2 p-6 md:p-8">
          <h2 class="text-4xl">
            La table d'hôtes
          </h2>
          <p class="grow">
            Sur réservation, nous vous proposons la table d'hôtes afin de partager un moment convivial et gourmand. Un menu unique composé d'une cuisine locale gourmande et familale avec des produits locaux et bio. Planche charcuteries fromages, salade gourmande peuvent aussi vous être proposées.
          </p>
        </div>
      </div>
      <CardTypeOn 
        title="La cuisine d'été" 
        :content="[{ text: `Nous mettons à votre disposition une petite cuisine commune toute équipée. Vous disposez des équipements suivants : Four, Frigo, Plaque de cuisson, Lave vaisselle, Lave linge.` }, { text: `Un emplacement est prévu pour recharger vos batteries de vélos électriques.`}]"
        :imgs="[{ src: Imgs[20].link, alt: Imgs[20].alt }, { src: Imgs[21].link, alt: Imgs[21].alt }]"
      />
      <CardTypeOn 
        title="Détente" 
        :content="[{ text: `Une piscine est à votre disposition en pleine saison avec transats. Vous y trouverez le pavillon d\'été, endroit de convivialité pour y prendre un verre, manger une glace, ou tous simplement vous y détendre.` }, { text: `Une salle commune est aussi à votre disposition (canapés, livres, jeux de sociétés)`}]"
        :imgs="[{ src: Imgs[33].link, alt: Imgs[33].alt }, { src: Imgs[58].link, alt: Imgs[58].alt }]"
      />
      <div>
        <h2 class="text-4xl">
          Nos autre hebergements
        </h2>
        <PageCardGroup 
          v-if="hebergementsNoSelected"
          :propElementsList="hebergementsNoSelected"
          targetPage="hebergements"
        />
      </div>
    </section>
    <PictureFull
      v-if="PictureFull"
      :imgs="hebergementSelected.imgs"
      :actualPict="actualPict" 
      @close="PictureFull = false"
    />
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
      PictureFull: false,
      actualPict: 0,
    };
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
    },
    OpenPicture(div, pict) {
      this.PictureFull = true;
      this.actualPict = pict;
    },
  },
};
</script>
