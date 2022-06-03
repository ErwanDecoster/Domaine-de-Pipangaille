<template>
  <div class="mb-8">
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-5xl">Nos hebergements</h1>
      <div class="w-full h-full relative">
        <div class="bg-almond left-0 right-32 absolute top-8 bottom-8 rounded"></div>
        <div class="z-10 relative grid grid-cols-2 gap-8">
          <div class="flex flex-col gap-2 h-full pt-16 pb-16 pl-8">
            <h2 class="text-4xl">Les chambres d’hotes</h2>
            <p class="grow">Des chambres au couleurs chaleureuse et toute equipé.
 consectetur adipiscing elit. Tellus id ultricies vitae, non magna. Volutpat malesuada vitae amet eu dignissim faucibus viverra morbi pellentesque. Dui a commodo enim, ullamcorper quisque consectetur. Lectus at cursus augue sem dignissim netus proin pretium, ornare. Risus tortor adipiscing adipiscing leo suspendisse amet ac. In ultricies dictumst sagittis a. A sed diam diam pretium amet venenatis aliquam adipiscing. Nisl ultricies egestas viverra nulla. </p>
          </div>
          <div class="relative">
            <img class="rounded absolute top-0 left-0 w-2/3" src="https://picsum.photos/600/400" alt="">
            <img class="rounded absolute bottom-0 right-0 w-2/3" src="https://picsum.photos/600/400" alt="">
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <img src="https://picsum.photos/800/500" alt="" class="h-full">
        <div class="bg-almond rounded flex flex-col gap-2 p-8">
          <h2 class="text-4xl">La table d’hote et le petit dejeuner</h2>
            <p class="grow">Des chambres au couleurs chaleureuse et toute equipé.
 consectetur adipiscing elit. Tellus id ultricies vitae, non magna. Volutpat malesuada vitae amet eu dignissim faucibus viverra morbi pellentesque. Dui a commodo enim, ullamcorper quisque consectetur. Lectus at cursus augue sem dignissim netus proin pretium, ornare. Risus tortor adipiscing adipiscing leo suspendisse amet ac. In ultricies dictumst sagittis a. </p>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-8 mt-8">
        <div v-for="hebergement in hebergements" :key="hebergement" class="bg-white shadow-lg rounded flex flex-col overflow-hidden">
          <img :src="hebergement.img" alt="" class="rounded-b">
          <div class="p-4 flex flex-col gap-2 h-full">
            <h3 class="text-xl">{{ hebergement.name }}</h3>
            <p class="grow ">{{ hebergement.shortDesc }}</p>
            <NuxtLink :to="`/hebergements/${hebergement.slug}`" class="ml-auto p-2 px-4 rounded-lg bg-almond text-md w-max">En savoir plus</NuxtLink>
          </div>
        </div>
      </div>
      <NuxtPage :foobar="123" />
      <div class="w-full h-full relative">
        <div class="bg-almond left-0 right-32 absolute top-8 bottom-8 rounded"></div>
        <div class="z-10 relative grid grid-cols-2 gap-8">
          <div class="flex flex-col gap-2 h-full pt-16 pb-16 pl-8">
            <h2 class="text-4xl">Les emplacement tente</h2>
            <p class="grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus pulvinar morbi sodales sem senectus feugiat natoque sed enim. Natoque nullam blandit id porttitor. Libero enim nunc tellus tempor. Lorem lectus eu, dui semper lorem sit ultrices id facilisis. Non nisi magna nibh porta eget augue placerat. Lectus tempor elit, justo dictum a ac sed congue egestas.
Diam tortor neque parturient mollis nunc tortor luctus justo. </p>
            <NuxtLink to="/revirs" class="p-2 px-4 rounded-lg bg-eerie-black text-md w-max text-white">En savoir plus</NuxtLink>
          </div>
          <div class="relative">
            <img class="rounded absolute top-0 left-0 w-2/3" src="https://picsum.photos/600/400" alt="">
            <img class="rounded absolute bottom-0 right-0 w-2/3" src="https://picsum.photos/600/400" alt="">
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
      hebergements: [
        {
          id: 1,
          name: 'Chambre Marocaine',
          img: 'https://picsum.photos/400/300',
          shortDesc: 'Chambre thematique marocaise avec salle d’eau privé et lit separable.',
          slug: 'chambre_marocaine'
        },
        {
          id: 2,
          name: 'Chambre Africaine',
          img: 'https://picsum.photos/400/300',
          shortDesc: 'Chambre thematique africaine avec salle d’eau privé et lit separable.',
          slug: 'chambre_africaine'
        },
        {
          id: 3,
          name: 'Chambre Toscane',
          img: 'https://picsum.photos/400/300',
          shortDesc: 'Chambre thematique sur la region Toscane de l’italie avec salle d’eau privé.',
          slug: 'chambre_toscane'
        },
        {
          id: 4,
          name: 'Studio Creole',
          img: 'https://picsum.photos/400/300',
          shortDesc: 'Chambre thematique sur Creole avec cuisine equipeé et salle d’eau privé',
          slug: 'studio_creole'
        },
      ],
    };
  },
};
</script>