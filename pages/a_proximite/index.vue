<template>
  <div class="mb-8">
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">À proximité</h1>
      <CardTypeOn 
        title="A visiter" 
        :content="[{ text: `Loin de rien, nos hébergements situés dans la vallée du Rhône sont à une dizaine de minutes du Safari de Peaugres, du Palais Idéal du facteur Cheval ou encore du Musée de l’Alambic, de nombreux chemins pour des promenade à pied ou à velo sont également possibles à proximité, notamment la ViaRhona juste en face du domaine ou encore la ViaFluvia à une dizaine de minutes. Nous avons sélectionné pour vous, certains de nos endroits préférer.`}]"
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
          <p class="grow">Aujourd'hui la table d'hôtes est la meilleure option que nous puissions vous proposer. En revanche, si la table d'hôtes est indisponible, vous pouvez tout à fait décider d'aller dans un de nos restaurants partenaires. Nous vous proposerons des établissements en fonction de vos préférences tout en prenant en compte la distance entre nos chambre d'hôtes et l'établissement.</p>
        </div>
      </div>
      <div class="grid md:grid-cols-2 rounded overflow-hidden">
        <img src="https://www.generali.fr/sites/default/files-d8/2019-09/Table_dhote.jpg" alt="Description de l'image" class="aspect-video md:h-full md:order-1 object-cover bg-northern_light_grey font-bold">
        <div class="bg-almond dark:bg-dark-almond flex flex-col gap-2 p-6 md:p-8">
          <h2 class="text-4xl">La table d’hôte</h2>
          <p class="grow">Sur réservation, il s'agit d'un repas unique avec des specialités des régions alentours telles que des caillettes, des ravioles et plus encore. Cuisiné avec des produits locaux et bio autant que possible, ainsi qu'avec les légumes du potager, le repas est suivi d'un dessert fait maison ou d'une glace Terre Adelice.<br />La table d'hôtes est réservable par téléphone ou directement sur le site au même moment que la chambre.</p>
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