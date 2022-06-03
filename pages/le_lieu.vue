<template>
  <div>
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-5xl">Le lieu</h1>
      <div class="w-full h-full relative">
        <div class="bg-almond left-0 right-32 absolute top-8 bottom-8 rounded"></div>
        <div class="z-10 relative grid grid-cols-2 gap-8">
          <div class="flex flex-col gap-2 h-full pt-16 pb-16 pl-8">
            <h2 class="text-4xl">Le Domaine de Pipangaille</h2>
            <p class="grow">Ancienne Magnianerie contruite autour des années 1500 le batiment server a l’epoque a l’ellevage de vers a soie.
Volutpat malesuada vitae amet eu dignissim faucibus viverra morbi pellentesque. Dui a commodo enim, ullamcorper quisque consectetur. Lectus at cursus augue sem dignissim netus proin pretium, ornare. Risus tortor adipiscing adipiscing leo suspendisse amet ac. In ultricies dictumst sagittis a. A sed diam diam </p>
          </div>
          <div class="relative">
            <img class="rounded absolute top-0 left-0 w-2/3" src="https://picsum.photos/600/400" alt="">
            <img class="rounded absolute bottom-0 right-0 w-2/3" src="https://picsum.photos/600/400" alt="">
          </div>
        </div>
      </div>
      <div class="grid grid-cols-7">
        <div class="bg-almond rounded flex flex-col gap-2 p-8 col-span-4">
          <h2 class="text-4xl">Organisation d'événements</h2>
          <p class="grow">
            Consert, Mariage, Anniversaire, Resseption... <br>
            Les posibiliter sont nonbreuse et le lieu et grand ! parfait pour equillire un grand nombre de personnes.
          </p>
          <NuxtLink to="/hebergements" class="p-2 px-4 rounded-lg bg-eerie-black text-md w-max text-white">Nous contacter</NuxtLink>
        </div>
        <img src="https://picsum.photos/800/500" alt="" class="h-full col-span-3">
      </div>
      <h1 class="text-5xl">Nos espaces</h1>
      <div class="flex flex-col gap-8">
        <div v-for="espace in espaces" :key="espace" class="relative h-96 pt-8 pl-8">
          <h3 class="text-3xl z-10 relative">{{ espace.title }}</h3>
          <div v-if="espace.imgFormat === 1" class="bg-almond rounded absolute top-0 right-0 bottom-8 w-3/5"></div>
          <div v-if="espace.imgFormat === 2" class="bg-almond rounded absolute top-0 left-0 bottom-8 w-3/5"></div>
          <div v-if="espace.imgFormat === 3" class="bg-almond rounded absolute top-0 right-32 bottom-8 w-3/5"></div>
          <img v-if="espace.imgFormat === 1 || espace.imgFormat === 2" class="rounded absolute bottom-0 left-0 w-2/5" :src="espace.img[0]" alt="">
          <img v-if="espace.imgFormat === 1 || espace.imgFormat === 2" class="rounded absolute top-8 left-1/2 -translate-x-1/3 w-2/5" :src="espace.img[1]" alt="">
          <img v-if="espace.imgFormat === 1 || espace.imgFormat === 2" class="rounded absolute bottom-0 right-0 w-1/3" :src="espace.img[2]" alt="">
          <img v-if="espace.imgFormat === 3" class="rounded absolute bottom-16 left-0 w-2/5" :src="espace.img[0]" alt="">
          <img v-if="espace.imgFormat === 3" class="rounded absolute top-8 right-0 w-2/5" :src="espace.img[2]" alt="">
          <img v-if="espace.imgFormat === 3" class="rounded absolute bottom-8 left-1/2 -translate-x-1/3 w-1/3" :src="espace.img[1]" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      espaces:  [
        {
          title: 'L\'entrée',
          imgFormat: 1,
          img: [
            'https://picsum.photos/500/300',
            'https://picsum.photos/500/301',
            'https://picsum.photos/500/302',
          ]
        },
        {
          title: 'Le parking exterieur',
          imgFormat: 2,
          img: [
            'https://picsum.photos/500/300',
            'https://picsum.photos/500/301',
            'https://picsum.photos/500/302',
          ]
        },
        {
          title: 'Le préau',
          imgFormat: 3,
          img: [
            'https://picsum.photos/500/300',
            'https://picsum.photos/500/301',
            'https://picsum.photos/500/302',
          ]
        },
        {
          title: 'Le jardin',
          imgFormat: 2,
          img: [
            'https://picsum.photos/500/300',
            'https://picsum.photos/500/301',
            'https://picsum.photos/500/302',
          ]
        },
        {
          title: 'La cours interieure',
          imgFormat: 3,
          img: [
            'https://picsum.photos/500/300',
            'https://picsum.photos/500/301',
            'https://picsum.photos/500/302',
          ]
        },
        {
          title: 'La piscine et le Pavillon d’été',
          imgFormat: 3,
          img: [
            'https://picsum.photos/500/300',
            'https://picsum.photos/500/301',
            'https://picsum.photos/500/302',
          ]
        },
        {
          title: 'La cuisine d’été',
          imgFormat: 1,
          img: [
            'https://picsum.photos/500/300',
            'https://picsum.photos/500/301',
            'https://picsum.photos/500/302',
          ]
        },
        {
          title: 'Le parc',
          imgFormat: 3,
          img: [
            'https://picsum.photos/500/300',
            'https://picsum.photos/500/301',
            'https://picsum.photos/500/302',
          ]
        },
      ],
    };
  },
};
</script>