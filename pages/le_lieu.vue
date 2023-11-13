<template>
  <div class="mb-8 md:pt-[5.25rem]">
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">
        Le lieu
      </h1>
      <CardTypeOn 
        title="Le Domaine de Pipangaille" 
        :content="[{ text: `Ancienne magnanerie de plus de 150 ans, la demeure authentique, de caractère et pleine de charme est bercée par le doux tourbillon du Rhône. Outre le charme de la bâtisse vous pourrez profiter du parc, de la piscine et du pavillon d'été pour vous détendre. En accès direct sur la ViaRhôna et au cœur d'un bois, le lieu vous offre une parenthèse mêlant détente, nature et zenitude. La propriété s'étend sur trois hectares, principalement un bois, et dispose d'un parking intérieur et extérieur.`}]"
        :imgs="[ Imgs[38], Imgs[42] ]" 
      />
      <div class="grid md:grid-cols-7 rounded overflow-hidden">
        <div class="bg-almond dark:bg-dark-almond flex flex-col gap-2 p-6 md:p-8 md:col-span-4">
          <h2 class="text-4xl">
            Organisation d'événements
          </h2>
          <p class="grow">
            Réunions familiales, événements artistiques, anniversaires, mariages, séminaires, dégustations de vins, les propositions sont nombreuses....
          </p>
          <ButtonPrimary 
            link="/contact"
            content="Nous contacter"
          />
        </div>
        <img 
          :src="Imgs[25].srcs[0].src" 
          :alt="Imgs[25].alt" 
          class="md:h-full md:col-span-3 aspect-video object-cover bg-northern_light_grey font-bold" 
          loading="lazy"
        >
      </div>
      <h2 class="text-4xl sm:text-5xl">
        Nos photos
      </h2>
      <div class="flex flex-wrap sm:grid grid-cols-2 md:grid-cols-6 gap-4">
        <div 
          v-for="photo in photos" 
          :key="photo" 
          class="h-80 group w-full relative rounded overflow-hidden bg-almond shadow cursor-pointer"
          :class="[ {'md:col-span-2': photo.size === 2}, {'md:col-span-3': photo.size === 3}, {'md:col-span-4': photo.size === 4} ]"
          tabindex="0"
          @click="OpenPicture($event, photo)"
          @keyup.enter="OpenPicture($event, photo)"
        >
          <div class="bg-gradient-to-b z-10 from-eerie-black absolute inset-x-0 p-2 pb-10 -translate-y-full duration-300 group-hover:-translate-y-0 group-focus-within:-translate-y-0">
            <h3 class="text-3xl text-white font-semibold">
              {{ photo.title }}
            </h3>
            <p class="text-white">
              {{ photo.espace }}
            </p>
          </div>
          <img 
            v-if="photo.img" 
            :src="photo.img.srcs[0].src" 
            :alt="photo.img.alt" 
            :srcset="
              photo.img.srcs[0].src + ' 320w, ' +
                photo.img.srcs[1].src + ' 488w, ' +
                photo.img.srcs[2].src + ' 656w, ' +
                photo.img.srcs[3].src + ' 1980w'"
            class="w-full h-full object-cover bg-northern_light_grey font-bold duration-500 group-hover:scale-110 group-focus-within:scale-110" 
            :sizes="160*photo.size + 'px'"
            loading="lazy"
          >
        </div>
      </div>
    </section>
    <PictureFull 
      v-if="PictureFull"
      :imgs="photosPrepared"
      :enterPictIndex="index"
      @close="PictureFull = false"
    />
  </div>
</template>

<script>
import { Imgs } from '@/data';

export default {
  data() {
    return {
      Imgs: Imgs,
      route: this.$route.path,
      PictureFull: false,
      index: 0,
      photosPrepared: [],
      photos:  [
        {
          id: 32,
          title: 'Petite terrasse',
          espace: 'La cour intérieure',
          img: Imgs[32],
          size: 2,
        },
        {
          id: 33,
          title: 'La piscine',
          espace: 'Coin piscine',
          img: Imgs[33],
          size: 4,
        },
        {
          id: 34,
          title: 'Shiva',
          espace: 'Le jardin',
          img: Imgs[34],
          size: 2,
        },
        {
          id: 35,
          title: 'La terrasse jour de fête',
          espace: 'La terrasse façade avant',
          img: Imgs[35],
          size: 2,
        },
        {
          id: 36,
          title: 'La terrasse jour de fête',
          espace: 'La terrasse façade avant',
          img: Imgs[36],
          size: 2,
        },
        {
          id: 37,
          title: 'Magnifique saule pleureur',
          espace: 'L\'entrée du domaine',
          img: Imgs[37],
          size: 3,
        },
        {
          id: 38,
          title: 'Le pavillon',
          espace: 'Coin piscine',
          img: Imgs[38],
          size: 3,
        },
        {
          id: 39,
          title: 'Passage en pavés',
          espace: 'Accés a la cour',
          img: Imgs[39],
          size: 2,
        },
        {
          id: 40,
          title: 'Coin tranquille',
          espace: 'Le jardin',
          img: Imgs[40],
          size: 2,
        },
        {
          id: 41,
          title: 'Le pavillon',
          espace: 'Coin piscine',
          img: Imgs[41],
          size: 2,
        },
        {
          id: 42,
          title: 'La cour ensoleillée',
          espace: 'La cour intérieure',
          img: Imgs[42],
          size: 4,
        },
        {
          id: 43,
          title: 'En pleine nuit',
          espace: 'L\'entrée du domaine',
          img: Imgs[43],
          size: 2,
        },
        {
          id: 44,
          title: 'Le hamac',
          espace: 'Le bois',
          img: Imgs[44],
          size: 3,
        },
        {
          id: 45,
          title: 'En pleine nature',
          espace: 'Le bois',
          img: Imgs[45],
          size: 3,
        },
        {
          id: 46,
          title: 'Jour de fête',
          espace: 'La cour intérieure',
          img: Imgs[46],
          size: 2,
        },
        {
          id: 47,
          title: 'Passage pavé',
          espace: 'Accés a la cour intérieure',
          img: Imgs[47],
          size: 2,
        },
        {
          id: 48,
          title: 'La piscine',
          espace: 'Coin piscine',
          img: Imgs[48],
          size: 2,
        },
        {
          id: 49,
          title: 'La terrasse',
          espace: 'La terrasse façade avant',
          img: Imgs[49],
          size: 4,
        },
        {
          id: 50,
          title: 'Vue sur le jardin et les montagnes',
          espace: 'Chambre Africaine',
          img: Imgs[50],
          size: 2,
        },
        {
          id: 51,
          title: 'Les extérieurs illuminés',
          espace: 'L\'entrée',
          img: Imgs[51],
          size: 2,
        },
        {
          id: 52,
          title: 'Espace à l\'ombre',
          espace: 'La cour intérieure',
          img: Imgs[52],
          size: 2,
        },
        {
          id: 17,
          title: 'Chaleur du soleil',
          espace: 'Couloir des chambres',
          img: Imgs[17],
          size: 2,
        },
        {
          id: 53,
          title: 'L\'escalier d\'accés au chambres',
          espace: 'Salle d\'activités',
          img: Imgs[53],
          size: 2,
        },
        {
          id: 54,
          title: 'Fête des pompiers',
          espace: 'Le jardin',
          img: Imgs[54],
          size: 4,
        },
        {
          id: 55,
          title: 'Mr Papillon',
          espace: 'Coin piscine',
          img: Imgs[55],
          size: 2,
        },
        {
          id: 56,
          title: 'Le paon',
          espace: 'La jardin',
          img: Imgs[56],
          size: 2,
        },
        {
          id: 57,
          title: 'Tapis de fleurs',
          espace: 'Le jardin',
          img: Imgs[57],
          size: 2,
        },
        {
          id: 58,
          title: 'Le pavillon',
          espace: 'Coin piscine',
          img: Imgs[58],
          size: 3,
        },
        {
          id: 59,
          title: 'Concert ce soir',
          espace: 'La cour intérieure',
          img: Imgs[59],
          size: 3,
        },
        {
          id: 20,
          title: 'La cuisine en accès libre',
          espace: 'Cuisine d\'été',
          img: Imgs[20],
          size: 2,
        },
        {
          id: 65,
          title: 'Un endroit où s\'abriter',
          espace: 'Salle commune',
          img: Imgs[65],
          size: 2,
        },
        {
          id: 66,
          title: 'Un endroit où s\'abriter',
          espace: 'Salle commune',
          img: Imgs[66],
          size: 2,
        },
        {
          id: 67,
          title: 'Jour de mariage',
          espace: 'Le préau',
          img: Imgs[67],
          size: 4,
        },
        {
          id: 68,
          title: 'Jour de mariage',
          espace: 'Le préau',
          img: Imgs[68],
          size: 2,
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0,0);
  },
  created() {
    this.PreparePhoto()
    useHead({
      title: `Le lieu - Domaine de Pipangaille`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Envie d\'un séjour magique dans un cadre idyllique en pleine nature dans une ancienne magnanerie récemment rénovée. Vous recherchez un endroit privilégié pour un break, un court séjour, un déplacement professionnel ou encore un événemment a fêter, le Domaine de Pipangaille est le lieu idéal.' 
        },
        { property: 'og:url', content: 'https://domaine-de-pipangaille.fr' + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: 'Le lieu - Domaine de Pipangaille' },
        { property: 'og:description', content: 'Envie d\'un séjour magique dans un cadre idyllique en pleine nature dans une ancienne magnanerie récemment rénovée. Vous recherchez un endroit privilégié pour un break, un court séjour, un déplacement professionnel ou encore un événemment a fêter, le Domaine de Pipangaille est le lieu idéal, situé à une heure de Lyon et de Saint-Étienne, à 45 minutes de Valence et en accès direct sur la Via Rhona.' },
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + '/images/photo_11.jpeg' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: 'Le lieu - Domaine de Pipangaille' },
        { property: 'twitter:description', content: 'Envie d\'un séjour magique dans un cadre idyllique en pleine nature dans une ancienne magnanerie récemment rénovée. Vous recherchez un endroit privilégié pour un break, un court séjour, un déplacement professionnel ou encore un événemment a fêter, le Domaine de Pipangaille est le lieu idéal, situé à une heure de Lyon et de Saint-Étienne, à 45 minutes de Valence et en accès direct sur la Via Rhona.' },
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
  },
  methods: {
    PreparePhoto() {
      this.photos.forEach(photo => {
        this.photosPrepared.push(photo.img);
      });
    },
    OpenPicture(div, pict) {
      this.PictureFull = true;
      this.index = this.photos.indexOf(pict, 0);
    },
  },
};
</script>