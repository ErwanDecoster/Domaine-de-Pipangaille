<template>
  <div class="flex flex-col gap-8 md:pt-[5.25rem]">
    <section class="max-w-screen-xl mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl first-letter:capitalize">
        {{ $t('contact.title') }}
      </h1>
      <CardTypeOn 
        :title="$t('contact.specialRequestTitle')" 
        :content="$tm('contact.specialRequestText')"
        :imgs="[Imgs[25], Imgs[59]]" 
      />
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
    const desc = this.$t('contact.meta.desc')
    const title = this.$t('contact.meta.title')
    useHead({
      title: title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: desc 
        },
        { property: 'og:url', content: 'https://domaine-de-pipangaille.fr' + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + '/images/le_lieu_concert.jpeg' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: desc },
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