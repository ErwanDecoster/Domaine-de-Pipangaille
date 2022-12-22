<template>
  <div class="relative h-[215vh]">
    <div class="p-8 absolute inset-8 md:inset-20 rounded-xl">
      <p class="mx-auto center text-lg">Chargement de la page de réservation. Cela peut prendre un petit moment.</p>
      <p class="mx-auto center text-lg">Si rien ne charge, réserver directement aux 04 75 68 28 24.</p>
    </div>
    <iframe id="iframe" class="relative w-full h-full font-bold dark:brightness-75"
      title="Inline Frame Example"
      :src="createURL()">
    </iframe>
  </div>
</template>

<script>

export default {
  data() {
    return {
      nbAdulte: 2,
      nbEnfant: 0,
      startDate: this.DateNow(new Date(), 0),
      endDate: this.DateNow(new Date(), 1),
    };
  },
  methods: {
    DateNow(date, addDay) {
      date.setDate(date.getDate() + addDay);
      const day = this.Pad(date.getDate());
      const month = this.Pad(date.getMonth() + 1);
      const year = date.getFullYear();
      return (`${year}-${month}-${day}`);
    },
    Pad(d) {
      return (d < 10) ? '0' + d.toString() : d.toString();
    },
    createURL() {
      const  newUrl = `https://domaine-de-pipangaille.amenitiz.io/fr/booking/room?info%5Barrival_date%5D=${this.startDate.split('-').reverse().join('%2F')}&info%5Bdeparture_date%5D=${this.endDate.split('-').reverse().join('%2F')}&info%5Btotal_adult%5D=${this.nbAdulte}&info%5Btotal_children%5D=${this.nbEnfant}&info%5Broom_id%5D=&button=&cart_id=42349657`
      return (newUrl)
    },
  },
  mounted() {
    window.scrollTo(0,0);
    if (localStorage.nbAdulte)
    {
      this.nbAdulte = localStorage.nbAdulte;
    }
    if (localStorage.nbEnfant)
    {
      this.nbEnfant = localStorage.nbEnfant;
    }
    if (localStorage.startDate)
    {
      this.startDate = localStorage.startDate;
    }
    if (localStorage.endDate)
    {
      this.endDate = localStorage.endDate;
    }
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