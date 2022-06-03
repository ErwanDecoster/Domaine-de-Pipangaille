<template>
  <div class="flex flex-col gap-8">
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-5xl">Contact</h1>
      <div class="w-full h-full relative">
        <div class="bg-almond left-0 right-32 absolute top-8 bottom-8 rounded"></div>
        <div class="z-10 relative grid grid-cols-2 gap-8">
          <div class="flex flex-col gap-2 h-full pt-16 pb-16 pl-8">
            <h2 class="text-4xl">Demande particuliere</h2>
            <p class="grow">Vous recherchez un lieu pour organiser votre mariage, une réception ou un concert... Le domaine de Pipangaille c’est une magnifique bâtisse avec de nombreux espaces parfaits pour accueil de nombreuses personnes.
Vous pouvez louer tout le lieu ou juste que qui vos intéresse, le parc peut être idéal pour une après-midi, le préau sera idéal si la pluie vous faire peur, la cour intérieure sera parfaite pour une cinquantaine de personnes et une scène peut y être installée. Si vous souhaitez que l’aient instal des éclairages pour illuminer votre soirée c’est aussi une possibilité.
Le domaine est grand et les possibilités sont très nombreuses.</p>
          </div>
          <div class="relative">
            <img class="rounded absolute top-0 left-0 w-2/3" src="https://picsum.photos/600/400" alt="">
            <img class="rounded absolute bottom-0 right-0 w-2/3" src="https://picsum.photos/600/400" alt="">
          </div>
        </div>
      </div>
    </section>
    <ContactForm />
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>