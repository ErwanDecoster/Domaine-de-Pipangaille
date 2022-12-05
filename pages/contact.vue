<template>
  <div class="flex flex-col gap-8">
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">Contact</h1>
      <CardTypeOn 
        title="Demande particulière" 
        :content="[{ text: `Vous recherchez un lieu pour organiser votre mariage, une réception ou un concert... Le domaine de Pipangaille c’est une magnifique bâtisse avec de nombreux espaces parfaits pour accueillir de nombreuses personnes. Vous pouvez louer tout le lieu ou juste que qui vous intéresse. Le parc peut être idéal pour une après-midi, le préau lorsque la pluie vous menace, la cour intérieure sera parfaite pour une cinquantaine de personnes et une scène peut y être installée. Si vous souhaitez que l'on instal des éclairages pour illuminer votre soirée c’est aussi une possibilité.Le domaine est grand et les possibilités sont très nombreuses.`}]"
        :imgs="[{ src: Imgs[25].link, alt: Imgs[25].alt }, { src: Imgs[59].link, alt: Imgs[59].alt }]" />
    </section>
    <ContactForm />
  </div>
</template>

<script>
import { Imgs } from '@/data';

export default {
  data() {
    return {
      Imgs: Imgs,
    };
  },
  mounted() {
    window.scrollTo(0,0);
  },
  created() {
    useHead({
      title: `Contact - Domaine de Pipangaille`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Vous recherchez un lieu pour organiser votre mariage, une réception ou un concert... Le domaine de Pipangaille c’est une magnifique bâtisse avec de nombreux espaces parfaits pour accueillir de nombreuses personnes.' 
        },
        { property: 'og:url', content: 'https://domaine-de-pipangaille.fr' + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: 'Contact - Domaine de Pipangaille' },
        { property: 'og:description', content: 'Vous recherchez un lieu pour organiser votre mariage, une réception ou un concert... Le domaine de Pipangaille c’est une magnifique bâtisse avec de nombreux espaces parfaits pour accueillir de nombreuses personnes.' },
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + '/images/le_lieu_concert.jpeg' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: 'Contact - Domaine de Pipangaille' },
        { property: 'twitter:description', content: 'Vous recherchez un lieu pour organiser votre mariage, une réception ou un concert... Le domaine de Pipangaille c’est une magnifique bâtisse avec de nombreux espaces parfaits pour accueillir de nombreuses personnes.' },
        { property: 'twitter:image', content: 'https://domaine-de-pipangaille.fr' + '/images/le_lieu_concert.jpeg' },
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