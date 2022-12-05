<template>
  <div class="mb-8">
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">Nos hébergements</h1>
      <CardTypeOn 
        title="Les chambres d’hôtes" 
        :content="[{ text: `Dans un cadre arboré où la nature est maitresse, vous profiterez d'un jardin calme où les oiseaux chantent pour nous. De nombreux espaces pour vous poser, vous détendre et profiter du moment, à l'ombre des arbres ou à la chaleur du soleil. Nous disposons d'une cour entourée de murs vous isolant de tout bruit mais également d'un coin piscine avec un pavillon pour vous installer avec votre famille ou vos amis.`}]"
        :imgs="[{ src: Imgs[16].link, alt: Imgs[16].alt }, { src: Imgs[17].link, alt: Imgs[17].alt }]" />
      <div class="grid md:grid-cols-2 rounded overflow-hidden">
        <img src="https://www.alsace.shop/wp-content/uploads/2021/06/formule-petit-dejeuner.jpg" alt="photo d'un petit dejeuner" class="aspect-video md:h-full w-full object-cover bg-northern_light_grey font-bold">
        <div class="bg-almond dark:bg-dark-almond flex flex-col gap-2 p-6 md:p-8">
          <h2 class="text-4xl">Petit déjeuner et Table d'hôtes</h2>
            <p class="grow">Le petit déjeuner se fait de 7h30 à 9h30. Il s'agit d'un buffet où chaque chambre dispose d'un panier avec ses viennoiseries. Thé Bio, Café du torréfacteur, jus de fruits, yaourt ansi que des fruits de saison vous seront proposés.<br />Sur réservation, la table d'hôtes est possible. Il s'agit d'un repas unique cuisiné avec des produits locaux et bio autant que possible, ainsi qu'avec les légumes du potager, le repas est suivi d'un dessert fait maison ou d'une glace Terre Adélice.</p>
        </div>
      </div>
      <PageCardGroup v-if="hebergements" :propElementsList="hebergements" targetPage="hebergements"/>
    </section>
  </div>
</template>

<script>
import { hebergements } from '@/data';
import { Imgs } from '@/data';

export default {
  data() {
    return {
      hebergements: hebergements,      
      Imgs: Imgs,
    };
  },
  mounted() {
    window.scrollTo(0,0);
  },
  created() {
    useHead({
      title: `Hébergements - Domaine de Pipangaille`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Dans un cadre arboré où la nature est maitresse, vous profiterez d\'un jardin calme où les oiseaux chantent pour nous. De nombreux espaces pour vous poser, vous détendre et profiter du moment, à l\'ombre des arbres ou à la chaleur du soleil. Nous disposons d\'une cour entourée de murs vous isolant de tout bruit mais également d\'un coin piscine avec un pavillon pour vous installer avec votre famille ou vos amis.' 
        },
        { property: 'og:url', content: 'https://domaine-de-pipangaille.fr' + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: 'Hébergements - Domaine de Pipangaille' },
        { property: 'og:description', content: 'Dans un cadre arboré où la nature est maitresse, vous profiterez d\'un jardin calme où les oiseaux chantent pour nous. De nombreux espaces pour vous poser, vous détendre et profiter du moment, à l\'ombre des arbres ou à la chaleur du soleil. Nous disposons d\'une cour entourée de murs vous isolant de tout bruit mais également d\'un coin piscine avec un pavillon pour vous installer avec votre famille ou vos amis.' },
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + '/images/chambres_d_hotes_couloir.jpeg' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: 'Hébergements - Domaine de Pipangaille' },
        { property: 'twitter:description', content: 'Dans un cadre arboré où la nature est maitresse, vous profiterez d\'un jardin calme où les oiseaux chantent pour nous. De nombreux espaces pour vous poser, vous détendre et profiter du moment, à l\'ombre des arbres ou à la chaleur du soleil. Nous disposons d\'une cour entourée de murs vous isolant de tout bruit mais également d\'un coin piscine avec un pavillon pour vous installer avec votre famille ou vos amis.' },
        { property: 'twitter:image', content: 'https://domaine-de-pipangaille.fr' + '/images/chambres_d_hotes_couloir.jpeg' },
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