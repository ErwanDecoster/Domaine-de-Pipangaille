<template>
  <div class="mb-8">
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-5xl">A proximiter</h1>
      <div class="w-full h-full relative">
        <div class="bg-almond left-0 right-32 absolute top-8 bottom-8 rounded"></div>
        <div class="z-10 relative grid grid-cols-2 gap-8">
          <div class="flex flex-col gap-2 h-full pt-16 pb-16 pl-8">
            <h2 class="text-4xl">A visiter</h2>
            <p class="grow">Ancienne Magnianerie contruite autour des années 1500 le batiment server a l’epoque a l’ellevage de vers a soie.
Volutpat malesuada vitae amet eu dignissim faucibus viverra morbi pellentesque. Dui a commodo enim, ullamcorper quisque consectetur. Lectus at cursus augue sem dignissim netus proin pretium, ornare. Risus tortor adipiscing adipiscing leo suspendisse amet ac. In ultricies dictumst sagittis a. A sed diam diam </p>
          </div>
          <div class="relative">
            <img class="rounded absolute top-0 left-0 w-2/3" src="https://picsum.photos/600/400" alt="">
            <img class="rounded absolute bottom-0 right-0 w-2/3" src="https://picsum.photos/600/400" alt="">
          </div>
        </div>
      </div>
      <div class="mt-8 grid gap-8">
        <div class="grid grid-cols-3 gap-8">
          {{ returnAVisiter }}
          <div v-for="row in AVisiterFiltered" :key="row" class="bg-white shadow-lg rounded flex flex-col overflow-hidden">
            <img src="https://picsum.photos/400/300" alt="" class="rounded-b">
            <div class="p-4 flex flex-col gap-2 h-full">
              <h3 class="text-xl">{{ row.title }}</h3>
              <p class="grow ">{{ row.shortDesc }}</p>
              <NuxtLink to="/hebergements" class="ml-auto p-2 px-4 rounded-lg bg-almond text-md w-max">En savoir plus</NuxtLink>
            </div>
          </div>
        </div>
        <button @click="updateAVisiter" class="mx-auto p-2 px-4 rounded-lg bg-almond text-md w-max">{{ aVisiterExtended === false ? 'Voir plus d\'activiter' : 'Voir moin d\'activiter' }}</button>
      </div>
      <div class="grid grid-cols-7">
        <div class="bg-almond rounded flex flex-col gap-2 p-8 col-span-4">
          <h2 class="text-4xl">Se restaurer</h2>
          <p class="grow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque aliquam purus velit pellentesque vulputate enim. Odio fames eu lectus velit vel. Mauris eu fermentum arcu quisque. Velit faucibus mauris enim netus pellentesque. Turpis velit amet purus pulvinar sit rhoncus imperdiet. Eu.
          </p>
          <NuxtLink to="/hebergements" class="p-2 px-4 rounded-lg bg-eerie-black text-md w-max text-white">Nous contacter</NuxtLink>
        </div>
        <img src="https://picsum.photos/800/500" alt="" class="h-full col-span-3">
      </div>
      <div class="grid grid-cols-2">
        <img src="https://picsum.photos/800/500" alt="" class="h-full">
        <div class="bg-almond rounded flex flex-col gap-2 p-8">
          <h2 class="text-4xl">La table d’hote</h2>
          <p class="grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque aliquam purus velit pellentesque vulputate enim. Odio fames eu lectus velit vel. Mauris eu fermentum arcu quisque. Velit faucibus mauris enim netus pellentesque. Turpis velit amet purus pulvinar sit rhoncus imperdiet. Eu.</p>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-8 mt-8">
        <div v-for="row in seRestaurer" :key="row" class="bg-white shadow-lg rounded flex flex-col overflow-hidden">
          <img src="https://picsum.photos/400/300" alt="" class="rounded-b">
          <div class="p-4 flex flex-col gap-2 h-full">
            <h3 class="text-xl">{{ row.title }}</h3>
            <p class="grow ">{{ row.shortDesc }}</p>
            <NuxtLink to="/hebergements" class="ml-auto p-2 px-4 rounded-lg bg-almond text-md w-max">En savoir plus</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aVisiterExtended: false,
      AVisiterFiltered: [],
      aVisiter: [
        {
          title: 'Safari de Peaugres',
          img: '',
          shortDesc: 'Parfait pour une famille ou en couple, vous en verez pleins les yeux',
        },
        {
          title: 'Palais Idéal du Facteur Cheval',
          img: '',
          shortDesc: 'Une magnifique visite d’un lieu exeptionnel en France',
        },
        {
          title: 'Acrobois Pilat',
          img: '',
          shortDesc: 'Une activiter parfaite a faire en famille, en couple ou entre amis',
        },
        {
          title: 'Musée de l’Alambic',
          img: '',
          shortDesc: 'Une activiter parfaite a faire en famille, en couple ou entre amis',
        },
        {
          title: 'Golf de Saint-Clair',
          img: '',
          shortDesc: 'Une activiter parfaite a faire en famille, en couple ou entre amis',
        },
        {
          title: 'ViaRhôna',
          img: '',
          shortDesc: 'Une activiter parfaite a faire en famille, en couple ou entre amis',
        },
        {
          title: 'Via Fluvia',
          img: '',
          shortDesc: 'Une activiter parfaite a faire en famille, en couple ou entre amis',
        },
        {
          title: 'Montgolfières & Cie',
          img: '',
          shortDesc: 'Une activiter parfaite a faire en famille, en couple ou entre amis',
        },
      ],
      seRestaurer: [
        {
          title: 'La Villa Champagnère',
          img: '',
          shortDesc: 'Parfait pour une famille ou en couple, vous en verez pleins les yeux',
        },
        {
          title: 'Le Relais Des Mailles',
          img: '',
          shortDesc: 'Une magnifique visite d’un lieu exeptionnel en France',
        },
      ],
    };
  },
  methods: {
    updateAVisiter() {
      if (this.aVisiterExtended === false) {
        this.aVisiterExtended = true;
        this.AVisiterFiltered = this.aVisiter;
      }
      else {
        this.aVisiterExtended = false;
        this.AVisiterFiltered = this.aVisiter.slice(0, 6);
      }
    }
  },
  computed: {
    returnAVisiter() {
      this.AVisiterFiltered = this.aVisiter.slice(0, 6);
    }
  }
};
</script>