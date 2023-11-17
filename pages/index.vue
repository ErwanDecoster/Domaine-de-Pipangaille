<template>
  <div class="mb-8 md:pt-[5.25rem]">
    <section class="relative">
      <div class="relative">
        <img 
          :src="Imgs[71].srcs[0].src" 
          :alt="Imgs[71].alt" 
          :srcset="
            Imgs[71].srcs[0].src + ' 375w, ' +
              Imgs[71].srcs[1].src + ' 768w, ' +
              Imgs[71].srcs[2].src + ' 1920w, ' +
              Imgs[71].srcs[3].src + ' 2048w'"
          sizes="100vw"
          class="w-full max-w-screen-4xl m-auto object-cover h-[75vh] 4xl:h-[65vh] 5xl:h-[50vh] rounded-b-xl bg-[#61845a] font-bold bg"
        >
        <h1 class="mx-auto max-w-screen-xl w-full text-eerie-blacks dark:text-white flex flex-col pl-4 absolute bottom-36 sm:bottom-28 left-1/2 -translate-x-1/2 text-4xl sm:text-6xl">
          <span class="relative w-max">
            {{ $t('index.welcome') }}
            <span class="bg-almond dark:bg-dark-almond absolute -top-1 bottom-0 -inset-x-3 dark:opacity-90 -z-10 rounded-t-lg" />
          </span>
          <span class="relative w-max">
            Domaine de Pipangaille
            <span class="bg-almond dark:bg-dark-almond absolute -bottom-1 top-0 -inset-x-3 dark:opacity-90 -z-10 rounded-b-lg" />
          </span>
        </h1>
      </div>
      <SearchEngine />
    </section>
    <section class="max-w-screen-xl mx-auto px-4 grid gap-8">
      <div class="w-full h-full relative">
        <div class="bg-almond dark:bg-dark-almond left-0 right-0 md:right-1/3 top-0 bottom-32 sm:bottom-1/3 md:bottom-0 absolute rounded" />
        <div class="p-6 md:pl-10 md:py-10 z-10 relative grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex flex-col gap-2 h-full">
            <h2 class="text-4xl">
              {{ $t('index.placeDescTitle') }}
            </h2>
            <p class="grow">
              {{ $t('index.placeDescText') }} 
            </p>
            <NuxtLink
              :to="localePath({ name: 'the_place'})"
              class="btn-primary"
              :title="$t('thePlace.title')"
            >
              {{ $t('learnMore') }}
            </NuxtLink>
          </div>
          <img 
            :src="Imgs[42].srcs[1].src" 
            :alt="Imgs[42].alt" 
            :srcset="
              Imgs[42].srcs[1].src + ' 488w, ' +
                Imgs[42].srcs[2].src + ' 656w'"
            sizes="488px"
            class="rounded w-full shadow-lg dark:shadow-lg-dark aspect-video object-cover bg-northern_light_grey font-bold"
            loading="lazy"
          >
        </div>
      </div>
      <CardTypeOnReverse 
        :title="$t('index.guestroomDescTitle')" 
        :content="[{ text: $t('index.guestroomDescText') }]"
        :imgs="[ Imgs[63], Imgs[62] ]" 
        :button="[{ target: 'accommodation', content: $t('index.guestroomDescActionButton') }, { target: 'book', content: $t('book.title') }]"
      />
    </section>
    <section class="bg-almond dark:bg-dark-almond w-full min-h-[16rem] my-8 flex items-center py-8">
      <div class="max-w-3xl w-full px-2 sm:px-6 gap-2 md:gap-8 mx-auto flex items-center">
        <button 
          aria-label="Boutton voir avis precedent"
          class="h-40 w-8 duration-150 hover:-translate-x-2"
          @click="PreviousSlide"
        >
          <img 
            src="/images/icon_fleche_gauche.svg"
            loading="lazy"
            height="32"
            width="32"
            alt="flèche en direction de la gauche"
            class="w-8 max-w-none object-cover font-bold dark:invert"
          >
        </button>
        <div class="overflow-hidden flex">
          <div 
            v-for="slide in slidesUsable" 
            :key="slide"
            tabindex="0"
            class="w-full flex-none my-auto grid gap-4" 
          >
            <div class="relative w-max mx-auto">
              <ul class="flex gap-2">
                <li 
                  v-for="index in 5"
                  :key="index" 
                  class="h-6 w-6"
                >
                  <svg 
                    viewBox="0 0 19 17" 
                    class="fill-white" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.84026 0.463526C8.98994 0.0028702 9.64164 0.0028701 9.79132 0.463525L11.5196 5.78254C11.5865 5.98855 11.7785 6.12803 11.9951 6.12803L17.5878 6.12803C18.0722 6.12804 18.2736 6.74784 17.8817 7.03254L13.3571 10.3199C13.1819 10.4472 13.1085 10.6729 13.1755 10.8789L14.9037 16.1979C15.0534 16.6586 14.5262 17.0416 14.1343 16.7569L9.60968 13.4696C9.43444 13.3423 9.19714 13.3423 9.0219 13.4696L4.49727 16.7569C4.10541 17.0416 3.57817 16.6586 3.72785 16.1979L5.4561 10.8789C5.52304 10.6729 5.44971 10.4472 5.27447 10.3199L0.749839 7.03254C0.357983 6.74784 0.55937 6.12804 1.04373 6.12803L6.63648 6.12803C6.85309 6.12803 7.04507 5.98855 7.11201 5.78254L8.84026 0.463526Z" />
                  </svg>
                </li>
              </ul>
              <ul class="flex gap-2 absolute top-0">
                <li 
                  v-for="star in slide.starReview"
                  :key="star"
                  class="h-6 w-6"
                >
                  <svg 
                    viewBox="0 0 19 17"
                    class="fill-yellow-red"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.84026 0.463526C8.98994 0.0028702 9.64164 0.0028701 9.79132 0.463525L11.5196 5.78254C11.5865 5.98855 11.7785 6.12803 11.9951 6.12803L17.5878 6.12803C18.0722 6.12804 18.2736 6.74784 17.8817 7.03254L13.3571 10.3199C13.1819 10.4472 13.1085 10.6729 13.1755 10.8789L14.9037 16.1979C15.0534 16.6586 14.5262 17.0416 14.1343 16.7569L9.60968 13.4696C9.43444 13.3423 9.19714 13.3423 9.0219 13.4696L4.49727 16.7569C4.10541 17.0416 3.57817 16.6586 3.72785 16.1979L5.4561 10.8789C5.52304 10.6729 5.44971 10.4472 5.27447 10.3199L0.749839 7.03254C0.357983 6.74784 0.55937 6.12804 1.04373 6.12803L6.63648 6.12803C6.85309 6.12803 7.04507 5.98855 7.11201 5.78254L8.84026 0.463526Z" />
                  </svg>
                </li>
              </ul>
            </div>
            <p class="max-h-36 overflow-y-scroll">
              {{ slide.comment }}
            </p>
            <p>{{ slide.autor }} - {{ slide.platformOrigine }}</p>
          </div>
        </div>
        <button 
          aria-label="Boutton voir avis suivant"
          class="h-40 w-8 duration-150 hover:translate-x-2"
          @click="NextSlide"
        >
          <img 
            src="/images/icon_fleche_droite.svg" 
            loading="lazy"
            height="32" 
            width="32"
            alt="flèche en direction de la droite"
            class="w-8 max-w-none object-cover font-bold dark:invert"
          >
        </button>
      </div>
    </section>
    <section class="max-w-screen-xl mx-auto px-4 grid gap-8">
      <div class="w-full h-full relative">
        <div class="bg-almond dark:bg-dark-almond left-0 right-0 md:right-1/4 top-0 bottom-32 sm:bottom-1/3 md:bottom-8 md:top-8 absolute rounded" />
        <div class="z-10 relative grid md:grid-cols-2">
          <div class="flex flex-col gap-2 h-full md:py-16 p-8">
            <h2 class="text-4xl">
              {{ $t('index.nearDescTitle') }}
            </h2>
            <p class="grow">
              {{ $t('index.nearDescTextPart1') }}
            </p>
            <p class="grow">
              {{ $t('index.nearDescTextPart2') }}
            </p>
            <NuxtLink 
              :to="localePath({ name: 'near'})"
              class="btn-primary"
              :title="$t('near.title')"
            >
              {{ $t('learnMore') }}
            </NuxtLink>
          </div>
          <div class="relative">
            <img 
              :src="Imgs[31].srcs[0].src" 
              :alt="Imgs[31].alt" 
              :srcset="
                Imgs[31].srcs[0].src + ' 309w, ' +
                  Imgs[31].srcs[2].src + ' 378w, ' +
                  Imgs[31].srcs[1].src + ' 462w'"
              sizes="298px"
              class="rounded hover:z-10 shadow-lg w-2/3 md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:w-3/5 aspect-video object-cover bg-northern_light_grey font-bold"
              loading="lazy"
            >
            <img 
              :src="Imgs[60].srcs[0].src" 
              :alt="Imgs[60].alt" 
              :srcset="
                Imgs[60].srcs[0].src + ' 309w, ' +
                  Imgs[60].srcs[1].src + ' 462w'"
              sizes="298px"
              class="rounded hover:z-10 shadow-lg w-2/3 ml-auto -mt-4 sm:-mt-20 md:absolute md:bottom-0 md:left-0 md:w-3/5 aspect-video object-cover bg-northern_light_grey font-bold"
              loading="lazy"
            >
            <img 
              :src="Imgs[28].srcs[0].src" 
              :alt="Imgs[28].alt" 
              :srcset="
                Imgs[28].srcs[0].src + ' 309w, ' +
                  Imgs[28].srcs[1].src + ' 378w, ' +
                  Imgs[28].srcs[2].src + ' 462w'"
              sizes="298px"
              class="rounded hover:z-10 shadow-lg hidden md:block md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 w-3/5 aspect-video object-cover bg-northern_light_grey font-bold"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { Imgs } from '@/data';

export default {
  data() {
    return {
      Imgs: Imgs,
      slidesUsable: [],
      slides: [
        {
          platformOrigine: 'Google Maps',
          starReview: 5,
          autor: 'Rémi Spérone',
          comment: 'Accueil et séjour enchanteur. Hôtes chaleureux et prévenants Magnifique demeure au  calme  en bordure du fleuve. Nous reviendrons forcement. Parfait !',
        },
        {
          platformOrigine: 'Google Maps',
          starReview: 1,
          autor: 'Marie helene Perrin',
          comment: 'Je n\'ai pas détester le mieux je l\'ai adoré.',
        },
        {
          platformOrigine: 'Google Maps',
          starReview: 5,
          autor: 'Florence Torresan',
          comment: 'Un super endroit des hôtes charmants',
        },
        {
          platformOrigine: 'Google Maps',
          starReview: 5,
          autor: 'Christine FRESNET',
          comment: 'Juste Magnifique',
        },
        {
          platformOrigine: 'Google Maps',
          starReview: 5,
          autor: 'Kristina Il',
          comment: '(Traduit par Google) Bel endroit pour passer une nuit au milieu d\'une route Paris-Nice. Très calme, grande salle, nourriture savoureuse. Il y avait une piscine pour se détendre après un long voyage. Les propriétaires offrent le dîner à 15-25 euros, vous n\'avez donc pas besoin de chercher un restaurant pour manger. (Avis d\'origine) Nice place to spend a night in the middle of a road Paris-Nice. Very calm, big room, tasty food. There was swimming pool to relax after long trip. The owners offer the dinner for 15-25 euro, so you don\'t need to search a restaurant to eat.',
        },
        {
          platformOrigine: 'Google Maps',
          starReview: 5,
          autor: 'Ionut Moldovan',
          comment: '(Traduit par Google) Cet endroit est tout simplement génial. Grand et beaux jardins, une piscine et de très belles chambres. L\'endroit est entouré de forêt et se trouve à 3 minutes à pied du Rhône. Thé est juste spécial, très prudent avec ses invités, très prudent avec la maison et très bon cuisinier. Nous avons passé un super week-end! (Avis d\'origine) This place is just great. Big an nice gardens, a pool and very nice rooms. The place is souronded by forest and is 3 mins walk from Rhône river. Thé just is just special, very careful with her guests, very careful with the house and very good cook. We spent a great weekend!',
        },
        {
          platformOrigine: 'Google Maps',
          starReview: 5,
          autor: 'Sjaak van Dijk',
          comment: '(Traduit par Google) Super B & B avec de gentils propriétaires. Nous avons eu la chambre familiale avec 4 personnes inc. 2 enfants. Les enfants étaient bien sûr très satisfaits de la piscine qui est présente ici. (Avis d\'origine) Super B&B met leuke eigenaren. We hadden de familiekamer met 4 personen inc. 2 kinderen. Kinderen waren natuurlijk erg blij met het zwembad wat hier aanwezig is.',
        },
        {
          platformOrigine: 'Google Maps',
          starReview: 5,
          autor: 'Richard Blau',
          comment: '(Traduit par Google) Très sympa! Super nourriture! Très bien situé! Très bons hôtes! (Avis d\'origine) Sehr schön! Super Essen! Tolle Lage! Sehr nette Gastgeber!',
        },
        {
          platformOrigine: 'Google Maps',
          starReview: 5,
          autor: 'Mercy Gros',
          comment: '(Traduit par Google) Excucite (Avis d\'origine) Excucite',
        },
      ],
      form: {
        nbAdulte: 2,
        nbEnfant: 0,
        startDate: this.DateNow(new Date(), 0),
        endDate: this.DateNow(new Date(), 1),
      }
    };
  },
  mounted() {
    this.slidesUsable = this.slides;
  },
  created() {
    const desc = this.$t('index.meta.desc')
    const title = this.$t('index.meta.title')
    useHead({
      title: title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          // content: 'Envie d\'un séjour magique dans un cadre idyllique en pleine nature dans une ancienne magnanerie récemment rénovée. Vous recherchez un endroit privilégié pour un break, un court séjour, un déplacement professionnel ou encore un événemment a fêter, le Domaine de Pipangaille est le lieu idéal.' 
          content: desc 
        },
        { property: 'og:url', content: 'https://domaine-de-pipangaille.fr' + this.$route.path },
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
    NextSlide() {
      const fisrtSlide = this.slidesUsable[0];
      this.slidesUsable.shift();
      this.slidesUsable.push(fisrtSlide);
    },
    PreviousSlide() {
      const lastSlide = this.slidesUsable[this.slidesUsable.length - 1];
      this.slidesUsable.splice(-1);
      this.slidesUsable.unshift(lastSlide);
    },
    Pad(d) {
      return (d < 10) ? '0' + d.toString() : d.toString();
    },
    DateNow(date, addDay) {
      date.setDate(date.getDate() + addDay);
      const day = this.Pad(date.getDate());
      const month = this.Pad(date.getMonth() + 1);
      const year = date.getFullYear();
      return (`${year}-${month}-${day}`);
    },
    UpdateEndDate() {
      endDate.value = this.DateNow(new Date(startDate.value), 1);
    },
  },
};
</script>