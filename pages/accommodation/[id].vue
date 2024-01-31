<template>
  <div class="mb-8 md:pt-[5.25rem]">
    <section class="max-w-screen-xl mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">
        {{ $t(`accommodation.${accommodationSelected.i18n}.title`) }}
      </h1>
      <CardTypeOn 
        :title="$t('accommodation.theRoom')" 
        :content="$tm(`accommodation.${accommodationSelected.i18n}.longDesc`)"
        :imgs="[ Imgs[accommodationSelected.imgs[1].id], Imgs[accommodationSelected.imgs[2].id] ]" 
        :button="[{ target: 'book', content: 'bookNow' }]"
      />
      <div class="grid gap-2">
        <h2 class="text-4xl first-letter:capitalize">
          {{ $t('photos') }}
        </h2>
        <div class="flex flex-wrap sm:grid grid-cols-2 md:grid-cols-3 gap-4">
          <img 
            v-for="img in accommodationSelected.imgs"
            :key="img"
            :src="Imgs[img.id].srcs[2]" 
            :alt="Imgs[img.id].alt" 
            :srcset="
              Imgs[img.id].srcs[2] + ' 320w, ' +
                Imgs[img.id].srcs[1] + ' 462w, ' +
                Imgs[img.id].srcs[3] + ' 1980w'"
            class="object-cover bg-northern_light_grey font-bold duration-500 group-hover:scale-110 h-72 group w-full relative rounded overflow-hidden shadow cursor-pointer" 
            sizes="320px"
            loading="lazy"
            @click="OpenPicture($event, img)"
            @keyup.enter="OpenPicture($event, photo)"
          >
        </div>
      </div>
      <div class="grid gap-2">
        <h2 class="text-4xl first-letter:capitalize">
          {{ $t('accommodation.equipment') }}
        </h2>
        <div class="w-full lg:w-4/5 grid sm:grid-cols-2 md:grid-cols-3 gap-1">
          <div 
            v-for="row in accommodationSelected.equipements"
            :key="row"
            class="p-1 flex gap-4"
          >
            <img 
              v-if="row.url"
              width="24"
              height="24"
              class="w-6 h-6 bg dark:invert font-bold aspect-square"
              :src="`/images/${row.url}.svg`"
              :alt="'icone ' + $t(`accommodation.facilities.${row.label}`)"
            >
            <p class="">
              {{ $t(`accommodation.facilities.${row.label}`) }}
            </p>
          </div>
        </div>
      </div>
      <h2 class="text-4xl sm:text-5xl first-letter:capitalize">
        {{ $t('accommodation.ourProposals') }}
      </h2>
      <div class="grid md:grid-cols-2 rounded overflow-hidden">
        <img
          src="/images/table_d_hote.png"
          alt="Description de l'image"
          class="aspect-video md:h-full w-full bg-northern_light_grey font-bold"
        >
        <div class="bg-almond dark:bg-dark-almond flex flex-col gap-2 p-6 md:p-8">
          <h2 class="text-4xl">
            {{ $t('accommodation.guestTableTitle') }}
          </h2>
          <p class="grow">
            {{ $t('accommodation.guestTableText') }}
          </p>
        </div>
      </div>
      <CardTypeOn 
        :title="$t('accommodation.summerKitchenTitle')" 
        :content="$tm('accommodation.summerKitchenText')"
        :imgs="[Imgs[20], Imgs[21]]"
      />
      <CardTypeOn 
        :title="$t('accommodation.relaxation')" 
        :content="$tm('accommodation.relaxationText')"
        :imgs="[Imgs[33], Imgs[58]]"
      />
      <div class="grid gap-4">
        <h2 class="text-4xl">
          {{ $t('accommodation.otherAccommodations') }}
        </h2>
        <PageCardGroup 
          v-if="accommodationsNoSelected"
          :propElementsList="accommodationsNoSelected"
          targetPage="accommodation"
        />
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
import { accommodations } from '@/data';
import { Imgs } from '@/data';

export default {
  data() {
    return {
      Imgs: Imgs,
      photosPrepared: [],
      accommodationSelected: [],
      accommodationsNoSelected: [],
      accommodations: accommodations,
      PictureFull: false,
      index: 0,
    };
  },
  mounted() {
    window.scrollTo(0,0);
  },
  created() {
    this.SelecteAccommodation()
    this.NoSelecteAccommodations()
    this.PreparePhoto()
    const title = this.$t(`accommodation.${this.accommodationSelected.i18n}.title`) + " - " + this.$t(`accommodation.title`) + " - Domaine de Pipangaille"
    const desc = this.$t(`accommodation.${this.accommodationSelected.i18n}.shortDesc`)
    const img = this.accommodationSelected.imgs[1].link
    const path = this.$route.path
    useHead({
      title: title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: desc, 
        },
        { property: 'og:url', content: 'https://domaine-de-pipangaille.fr' + path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + img },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@erwan0711' },
        { property: 'twitter:creator', content: '@erwan0711' },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: desc },
        { property: 'twitter:image', content: 'https://domaine-de-pipangaille.fr' + img },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://domaine-de-pipangaille.fr${path}`,
        },
      ],
    })
  },
  methods: {
    PreparePhoto() {
      this.accommodationSelected.imgs.forEach(photo => {
        this.photosPrepared.push(this.Imgs[photo.id]);
      });
    },
    SelecteAccommodation() {
      this.accommodations.forEach(accommodation => {
        if (accommodation.slug === this.$route.params.id) {
          this.accommodationSelected = accommodation;
        }
      });
    },
    NoSelecteAccommodations() {
      this.accommodationsNoSelected = this.accommodations.filter(item => item !== this.accommodationSelected );
    },
    OpenPicture(div, pict) {
      this.PictureFull = true;
      this.index = this.accommodationSelected.imgs.indexOf(pict, 0);
    },
  },
};
</script>
