<template>
  <div class="relative h-[215vh]">
    <div class="p-8 absolute inset-8 md:inset-20 rounded-xl">
      <p class="mx-auto center text-lg">Chargement de la page de réservation. Cela peut prendre un petit moment.</p>
      <p class="mx-auto center text-lg">Si rien ne charge, réserver directement aux 04 75 68 28 24.</p>
    </div>
    <iframe id="iframe" class="absolute inset-0 w-full h-full font-bold"
      title="Inline Frame Example"
      :src="createURL()">
    </iframe>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
    createURL() {
      const params = this.$route.query;
      console.log(this.$route.query);
      let newUrl = 'https://domaine-de-pipangaille.amenitiz.io/fr/booking/room';
      if (params.nbAdulte)
      {
        newUrl = `https://domaine-de-pipangaille.amenitiz.io/fr/booking/room?info%5Barrival_date%5D=${params.startDate.split('-').reverse().join('%2F')}&info%5Bdeparture_date%5D=${params.endDate.split('-').reverse().join('%2F')}&info%5Btotal_adult%5D=${params.nbAdulte}&info%5Btotal_children%5D=${params.nbEnfant}&info%5Broom_id%5D=&button=&cart_id=42349657`
      }
      console.log(newUrl);
      return (newUrl)
    },
  },
  mounted() {
    window.scrollTo(0,0);
  },
  created() {
    useHead({
      title: `Reserver - Domaine de Pipangaille`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Dès aujourd\'hui réservez votre chambre au domaine de Pipangaille, dans un magnifique cadré arboré où la nature est maîtresse, vous profiterez d\'un grand jardin calme où les oiseaux chantent pour vous.' 
        },
        { property: 'og:url', content: 'https://domaine-de-pipangaille.fr' + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: 'Reserver - Domaine de Pipangaille' },
        { property: 'og:description', content: 'Dès aujourd\'hui réservez votre chambre au domaine de Pipangaille, dans un magnifique cadré arboré où la nature est maîtresse, vous profiterez d\'un grand jardin calme où les oiseaux chantent pour vous.' },
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + '/images/photo_11.jpeg' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: 'Reserver - Domaine de Pipangaille' },
        { property: 'twitter:description', content: 'Dès aujourd\'hui réservez votre chambre au domaine de Pipangaille, dans un magnifique cadré arboré où la nature est maîtresse, vous profiterez d\'un grand jardin calme où les oiseaux chantent pour vous.' },
        { property: 'twitter:image', content: 'https://domaine-de-pipangaille.fr' + '/images/photo_11.jpeg' },
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