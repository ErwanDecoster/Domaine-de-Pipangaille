<script>
export default {
  data() {
    return {
      nbAdulte: 2,
      nbEnfant: 0,
      startDate: this.DateNow(new Date(), 0),
      endDate: this.DateNow(new Date(), 1),
      tel: '+33475682824',
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    if (localStorage.nbAdulte) {
      this.nbAdulte = localStorage.nbAdulte
    }
    if (localStorage.nbEnfant) {
      this.nbEnfant = localStorage.nbEnfant
    }
    if (localStorage.startDate) {
      this.startDate = localStorage.startDate
    }
    if (localStorage.endDate) {
      this.endDate = localStorage.endDate
    }
  },
  created() {
    const desc = this.$t('book.meta.desc')
    const title = this.$t('book.meta.title')
    useHead({
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: desc,
        },
        { property: 'og:url', content: `https://domaine-de-pipangaille.fr${this.$route.path}` },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + '/images/photo_11_488x320.webp' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: desc },
        { property: 'twitter:image', content: 'https://domaine-de-pipangaille.fr' + '/images/photo_11_488x320.webp' },
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
    DateNow(date, addDay) {
      date.setDate(date.getDate() + addDay)
      const day = this.Pad(date.getDate())
      const month = this.Pad(date.getMonth() + 1)
      const year = date.getFullYear()
      return (`${year}-${month}-${day}`)
    },
    Pad(d) {
      return (d < 10) ? `0${d.toString()}` : d.toString()
    },
    createURL() {
      const newUrl = `https://domaine-de-pipangaille.amenitiz.io/fr/booking/room?start_date=${this.startDate}&end_date=${this.endDate}&adults=${this.nbAdulte}&children=${this.nbEnfant}`
      return (newUrl)
    },
  },
}
</script>

<template>
  <div class="md:pt-14 relative h-[100vh]">
    <div class="p-8 absolute inset-8 md:inset-16 rounded-xl">
      <h1 class="text-4xl sm:text-5xl my-4">
        {{ $t('book.title') }}
      </h1>
      <p
        v-for="row in $tm('book.loadingText')"
        :key="row"
        class="mx-auto center text-lg"
      >
        {{ $rt(row, { tel }) }}
      </p>
    </div>
    <iframe
      id="iframe"
      class="relative w-full h-full font-bold dark:brightness-90"
      title="Inline Frame Example"
      :src="createURL()"
    />
  </div>
</template>
