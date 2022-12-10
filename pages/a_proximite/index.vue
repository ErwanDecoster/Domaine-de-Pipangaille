<template>
  <div class="mb-8">
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">À proximité</h1>
      <CardTypeOn 
        title="À visiter"
        :content="[{ text: `Au cœur de la Vallée du Rhône à proximité de la sortie A7, à 1 h de Lyon, 50 mn de Valence, 1 h 15 de Grenoble, le domaine de Pipangaille bénéficie d'un emplacement privilégié. D'un emplacement apprécié par les touristes à vélos qui parcourent la ViaRhôna car elle longe le domaine. Pour des activités en famille, randonnées à pieds ou en vtt, découvertes oenologiques sur la route des vins, visite du Palais Idéal du Facteur Cheval, du Safari de Peaugres, chemin de fer du Vivarais, le choix est riche et varié...`}]"
        :imgs="[{ src: Imgs[31].link, alt: Imgs[31].alt }, { src: Imgs[28].link, alt: Imgs[28].alt }]" />
      <PageCardGroup :propElementsList="aProximiter.aVisiter" targetPage="a_proximite"/>
      <div class="grid md:grid-cols-2 rounded overflow-hidden">
        <nuxt-img
          :width="`${496*1.5}`"
          :height="`${280*1.5}`"
          quality="90"
          format="webp"
          placeholder
          class="aspect-video md:h-full object-cover bg-northern_light_grey font-bold" 
          :src="Imgs[2].link"
          :alt="Imgs[2].alt" />
        <div class="bg-almond dark:bg-dark-almond flex flex-col gap-2 p-6 md:p-8">
          <h2 class="text-4xl">Se restaurer</h2>
          <p class="grow">Plusieurs restaurant se trouvent a proximité, le plus proche se trouvant a deux kilometres.</p>
        </div>
      </div>
      <div class="grid md:grid-cols-2 rounded overflow-hidden">
        <img src="https://www.generali.fr/sites/default/files-d8/2019-09/Table_dhote.jpg" alt="Description de l'image" class="aspect-video md:h-full md:order-1 object-cover bg-northern_light_grey font-bold">
        <div class="bg-almond dark:bg-dark-almond flex flex-col gap-2 p-6 md:p-8">
          <h2 class="text-4xl">La table d’hôtes</h2>
          <p class="grow">Sur réservation, nous vous proposons la table d'hôtes afin de partager un moment convivial et gourmand. Un menu unique composé d'une cuisine locale gourmande et familale avec des produits locaux et bio. Planche charcuteries fromages, salade gourmande peuvent aussi vous être proposées.</p>
        </div>
      </div>
      <PageCardGroup :propElementsList="aProximiter.seRestaurer" targetPage="a_proximite"/>
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
  methods: {
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
          content: 'Loin de rien, nos hébergements situés dans la vallée du Rhône sont à une dizaine de minutes du Safari de Peaugres, du Palais Idéal du facteur Cheval ou encore du Musée de l’Alambic, de nombreux chemins pour des promenade à pied ou à velo sont également possibles à proximité, notamment la ViaRhona juste en face du domaine ou encore la ViaFluvia à une dizaine de minutes. Nous avons sélectionné pour vous, certains de nos endroits préférer.' 
        },
        { property: 'og:url', content: 'https://domaine-de-pipangaille.fr' + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: 'À proximité - Domaine de Pipangaille' },
        { property: 'og:description', content: 'Loin de rien, nos hébergements situés dans la vallée du Rhône sont à une dizaine de minutes du Safari de Peaugres, du Palais Idéal du facteur Cheval ou encore du Musée de l’Alambic, de nombreux chemins pour des promenade à pied ou à velo sont également possibles à proximité, notamment la ViaRhona juste en face du domaine ou encore la ViaFluvia à une dizaine de minutes. Nous avons sélectionné pour vous, certains de nos endroits préférer.' },
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + '/images/palais_idéal_du_facteur_cheval.jpg' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: 'À proximité - Domaine de Pipangaille' },
        { property: 'twitter:description', content: 'Loin de rien, nos hébergements situés dans la vallée du Rhône sont à une dizaine de minutes du Safari de Peaugres, du Palais Idéal du facteur Cheval ou encore du Musée de l’Alambic, de nombreux chemins pour des promenade à pied ou à velo sont également possibles à proximité, notamment la ViaRhona juste en face du domaine ou encore la ViaFluvia à une dizaine de minutes. Nous avons sélectionné pour vous, certains de nos endroits préférer.' },
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
  }
};
</script>