<template>
  <div class="mb-8 md:pt-[5.25rem]">
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">
        À proximité
      </h1>
      <CardTypeOn 
        title="À visiter"
        :content="[{ text: `Au cœur de la Vallée du Rhône, à proximité de la sortie A7, à 1 h de Lyon, 50 min de Valence, et 1 h 15 de Grenoble, le domaine de Pipangaille bénéficie d'un emplacement privilégié. Cet emplacement est particulièrement apprécié par les touristes à vélo, car la ViaRhôna longe le domaine. Pour des activités en famille, telles que des randonnées à pied ou en VTT, des découvertes œnologiques sur la route des vins, la visite du Palais Idéal du Facteur Cheval, du Safari de Peaugres, du chemin de fer du Vivarais, le choix est riche et varié...`}]"
        :imgs="[ Imgs[31], Imgs[28] ]"
      />
      <div class="grid gap-2">
        <PageCardGroup
          :propElementsList="aProximiter.aVisiter"
          targetPage="a_proximite"
          showFilter="true"
        />
      </div>
      <div class="grid md:grid-cols-2 rounded overflow-hidden">
        <img 
          :src="Imgs[2].srcs[0].src" 
          :alt="Imgs[2].alt" 
          :srcset="
            Imgs[2].srcs[0].src + ' 309w, ' +
              Imgs[2].srcs[1].src + ' 462w'"
          sizes="462px"
          class="aspect-video w-full md:h-full object-cover bg-northern_light_grey font-bold"
          loading="lazy"
        >
        <div class="bg-almond dark:bg-dark-almond flex flex-col gap-2 p-6 md:p-8">
          <h2 class="text-4xl">
            Se restaurer
          </h2>
          <p class="grow">
            Plusieurs restaurants se trouvent à proximité, le plus proche se trouvant à deux kilomètres.
          </p>
        </div>
      </div>
      <div class="grid md:grid-cols-2 rounded overflow-hidden">
        <img
          src="https://www.generali.fr/sites/default/files-d8/2019-09/Table_dhote.jpg"
          alt="Description de l'image"
          loading="lazy"
          class="aspect-video md:h-full md:order-1 object-cover bg-northern_light_grey font-bold"
        >
        <div class="bg-almond dark:bg-dark-almond flex flex-col gap-2 p-6 md:p-8">
          <h2 class="text-4xl">
            La table d'hôtes
          </h2>
          <p class="grow">
            Sur réservation, nous vous proposons la table d'hôtes afin de partager un moment convivial et gourmand. Un menu unique composé d'une cuisine locale gourmande et familiale, avec des produits locaux et bio, vous est proposé. Des planches de charcuteries, de fromages, ainsi qu'une salade gourmande peuvent également vous être proposées.
          </p>
        </div>
      </div>
      <PageCardGroup
        :propElementsList="aProximiter.seRestaurer"
        targetPage="a_proximite"
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
    useHead({
      title: `À proximité - Domaine de Pipangaille`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Loin de rien, nos hébergements situés dans la vallée du Rhône sont à une dizaine de minutes du Safari de Peaugres, du Palais Idéal du facteur Cheval ou encore du Musée de l\'Alambic, de nombreux chemins pour des promenade à pied ou à velo sont également possibles à proximité, notamment la ViaRhona juste en face du domaine ou encore la ViaFluvia à une dizaine de minutes. Nous avons sélectionné pour vous, certains de nos endroits préférer.' 
        },
        { property: 'og:url', content: 'https://domaine-de-pipangaille.fr' + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: 'À proximité - Domaine de Pipangaille' },
        { property: 'og:description', content: 'Loin de rien, nos hébergements situés dans la vallée du Rhône sont à une dizaine de minutes du Safari de Peaugres, du Palais Idéal du facteur Cheval ou encore du Musée de l\'Alambic, de nombreux chemins pour des promenade à pied ou à velo sont également possibles à proximité, notamment la ViaRhona juste en face du domaine ou encore la ViaFluvia à une dizaine de minutes. Nous avons sélectionné pour vous, certains de nos endroits préférer.' },
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + '/images/palais_idéal_du_facteur_cheval.jpg' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: 'À proximité - Domaine de Pipangaille' },
        { property: 'twitter:description', content: 'Loin de rien, nos hébergements situés dans la vallée du Rhône sont à une dizaine de minutes du Safari de Peaugres, du Palais Idéal du facteur Cheval ou encore du Musée de l\'Alambic, de nombreux chemins pour des promenade à pied ou à velo sont également possibles à proximité, notamment la ViaRhona juste en face du domaine ou encore la ViaFluvia à une dizaine de minutes. Nous avons sélectionné pour vous, certains de nos endroits préférer.' },
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