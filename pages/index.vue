<template>
  <div class="mb-8">
    <section class="relative">
      <div class="relative">
        <img src="https://picsum.photos/1200/800" alt="" class="w-full object-cover h-[75vh] rounded-b-xl">
        <h1 class="mx-auto max-w-screen-lg w-full pl-4 absolute bottom-24 left-1/2 -translate-x-1/2 text-6xl text-white drop-shadow-lg">Votre Séjour au<br> Domaine de Pipangaille</h1>
      </div>
      <div class="mx-auto lg:w-max px-4 -translate-y-1/2">
        <div class="bg-white grid gap-2 shadow-lg p-5 px-6 rounded-lg">
          <h2 class="font-bold text-xl">Reserver</h2>
          <p class="gap-2 items-center flex flex-wrap">
            <span>Pour</span>
            <input type="number" name="" id="" value="2" class="w-16 border rounded-md px-2">
            <span>adultes et</span>
            <input type="number" name="" id="" value="0" class="w-16 border rounded-md px-2">
            <span>enfants de moins de 12 ans, du</span>
            <input type="date" name="" id="" class="w-32 border rounded-md px-2">
            <span>au</span>
            <input type="date" name="" id="" class="w-32 border rounded-md px-2">
            <input type="submit" value="Voir les disponibiliter" class="ml-2 p-2 flex items-center bg-almond rounded-lg text-md cursor-pointer">
          </p>
        </div>
      </div>
    </section>
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8">
      <div class="w-full h-full relative">
        <div class="bg-almond left-0 right-1/3 absolute inset-y-0 rounded"></div>
        <div class="pl-10 py-10 z-10 relative grid grid-cols-2 gap-8">
          <div class="flex flex-col gap-2 h-full">
            <h2 class="text-4xl">Le Domaine de Pipangaille</h2>
            <p class="grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus pulvinar morbi sodales sem senectus feugiat natoque sed enim. Natoque nullam blandit id porttitor. Libero enim nunc tellus tempor. Lorem lectus eu, dui semper lorem sit ultrices id facilisis. Non nisi magna nibh porta eget augue placerat. Lectus tempor elit, justo dictum a ac sed congue egestas. Diam tortor neque parturient mollis nunc tortor luctus justo. </p>
            <NuxtLink to="/hebergements" class="p-2 px-4 rounded-lg bg-eerie-black text-md w-max text-white">En savoir plus</NuxtLink>
          </div>
          <img class="rounded" src="https://picsum.photos/800/500" alt="">
        </div>
      </div>
      <div class="w-full h-full relative">
        <div class="bg-almond right-0 left-1/3 absolute top-8 bottom-0 rounded"></div>
        <div class="z-10 relative grid grid-cols-7 gap-8">
          <div class="relative col-span-4">
            <img class="rounded absolute top-0 left-0 w-2/3" src="https://picsum.photos/800/500" alt="">
            <img class="rounded absolute bottom-0 right-0 w-2/3" src="https://picsum.photos/800/500" alt="">
          </div>
          <div class="flex flex-col gap-2 h-full pt-16 pb-8 pr-8 col-span-3">
            <h2 class="text-4xl">Du calme et beaucoup d’espace</h2>
            <p class="grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus pulvinar morbi sodales sem senectus feugiat natoque sed enim. Natoque nullam blandit id porttitor. Libero enim nunc tellus tempor. Lorem lectus eu, dui semper lorem sit ultrices id facilisis. Non nisi magna nibh porta eget augue placerat. Lectus tempor elit, justo dictum a ac sed congue egestas. Diam tortor neque parturient mollis nunc tortor luctus justo. </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-almond w-full min-h-[16rem] my-8 flex items-center py-8">
      <div class="max-w-3xl w-full mx-auto flex items-center">
        <button @click="PreviousSlide" class="h-52 w-52">
          <svg viewBox="0 0 30 20" fill="none" class="stroke-eerie-black w-full rotate-180" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8571 18.2856L28.5 9.64279M28.5 9.64279L19.8571 0.999929M28.5 9.64279L0.999999 9.64279" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="grow overflow-hidden flex">
          <div class="w-full flex-none px-12 my-auto grid gap-4" v-for="slide in slidesUsable" :key="slide">
            <div class="relative w-max mx-auto">
              <ul class="flex gap-2">
                <li v-for="index in 5" :key="index" class="h-6 w-6">
                  <svg viewBox="0 0 19 17" class="fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.84026 0.463526C8.98994 0.0028702 9.64164 0.0028701 9.79132 0.463525L11.5196 5.78254C11.5865 5.98855 11.7785 6.12803 11.9951 6.12803L17.5878 6.12803C18.0722 6.12804 18.2736 6.74784 17.8817 7.03254L13.3571 10.3199C13.1819 10.4472 13.1085 10.6729 13.1755 10.8789L14.9037 16.1979C15.0534 16.6586 14.5262 17.0416 14.1343 16.7569L9.60968 13.4696C9.43444 13.3423 9.19714 13.3423 9.0219 13.4696L4.49727 16.7569C4.10541 17.0416 3.57817 16.6586 3.72785 16.1979L5.4561 10.8789C5.52304 10.6729 5.44971 10.4472 5.27447 10.3199L0.749839 7.03254C0.357983 6.74784 0.55937 6.12804 1.04373 6.12803L6.63648 6.12803C6.85309 6.12803 7.04507 5.98855 7.11201 5.78254L8.84026 0.463526Z" />
                  </svg>
                </li>
              </ul>
              <ul class="flex gap-2 absolute top-0">
                <li v-for="star in slide.starReview" :key="star" class="h-6 w-6">
                  <svg viewBox="0 0 19 17" class="fill-yellow-red" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.84026 0.463526C8.98994 0.0028702 9.64164 0.0028701 9.79132 0.463525L11.5196 5.78254C11.5865 5.98855 11.7785 6.12803 11.9951 6.12803L17.5878 6.12803C18.0722 6.12804 18.2736 6.74784 17.8817 7.03254L13.3571 10.3199C13.1819 10.4472 13.1085 10.6729 13.1755 10.8789L14.9037 16.1979C15.0534 16.6586 14.5262 17.0416 14.1343 16.7569L9.60968 13.4696C9.43444 13.3423 9.19714 13.3423 9.0219 13.4696L4.49727 16.7569C4.10541 17.0416 3.57817 16.6586 3.72785 16.1979L5.4561 10.8789C5.52304 10.6729 5.44971 10.4472 5.27447 10.3199L0.749839 7.03254C0.357983 6.74784 0.55937 6.12804 1.04373 6.12803L6.63648 6.12803C6.85309 6.12803 7.04507 5.98855 7.11201 5.78254L8.84026 0.463526Z" />
                  </svg>
                </li>
              </ul>
            </div>
            <p class="max-h-36 overflow-y-scroll">{{ slide.comment }}</p>
            <p>{{ slide.autor }} - {{ slide.platformOrigine }}</p>
          </div>
        </div>
        <button @click="NextSlide" class="h-52 w-52">
          <svg viewBox="0 0 30 20" fill="none" class="stroke-eerie-black w-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8571 18.2856L28.5 9.64279M28.5 9.64279L19.8571 0.999929M28.5 9.64279L0.999999 9.64279" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
    <section class="max-w-screen-lg mx-auto px-4 grid gap-8">
      <div class="w-full h-full relative">
        <div class="bg-almond left-0 right-1/4 absolute top-8 bottom-8 rounded"></div>
        <div class="z-10 relative grid grid-cols-2 gap-8">
          <div class="flex flex-col gap-2 h-full py-16 pl-8">
            <h2 class="text-4xl">A visiter a proximiter</h2>
            <p class="grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus pulvinar morbi sodales sem senectus feugiat natoque sed enim. Natoque nullam blandit id porttitor. Libero enim nunc tellus tempor. Lorem lectus eu, dui semper lorem sit ultrices id facilisis. Non nisi magna nibh porta eget augue placerat. Lectus tempor elit, justo dictum a ac sed congue egestas. Diam tortor neque parturient mollis nunc tortor luctus justo. </p>
            <NuxtLink to="/hebergements" class="p-2 px-4 rounded-lg bg-eerie-black text-md w-max text-white">En savoir plus</NuxtLink>
          </div>
          <div class="relative">
            <img class="rounded absolute top-0 left-1/2 -translate-x-1/2 w-3/5" src="https://picsum.photos/800/500" alt="">
            <img class="rounded absolute bottom-0 left-0 w-3/5" src="https://picsum.photos/800/500" alt="">
            <img class="rounded absolute top-1/2 -translate-y-1/2 right-0 w-3/5" src="https://picsum.photos/800/500" alt="">
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
          starReview: 5,
          autor: 'Etienne Villetard',
          comment: 'Un commentaire un peu tardif mais merci à Marie Claire et Bruno pour leur superbe acceuil, magnifique cadre pour se reposer après une journée de vélo sur la Viarhona, d\'autant plus que la voie verte passe juste à côté... Merci aussi pour toutes vos petits attentions, et je vous souhaite une bonne continuation pour vos futurs projets ! 👍',
        },
        {
          platformOrigine: 'Google Maps',
          starReview: 1,
          autor: 'Marie helene Perrin',
          comment: 'Je n`\'ai pas détester le mieux je l\'ai adoré.',
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
    };
  },
  methods: {
    NextSlide() {
      const fisrtSlide = this.slidesUsable[0]; // stock first element
      this.slidesUsable.shift() // remove first element
      this.slidesUsable.push(fisrtSlide) // add first element to end
    },
    PreviousSlide() {
      const lastSlide = this.slidesUsable[this.slidesUsable.length - 1]; // stock last element
      this.slidesUsable.splice(-1) // remove last element
      this.slidesUsable.unshift(lastSlide) // add last element to start
    },
  },
  mounted() {
    this.slidesUsable = this.slides; // stock des avis dans un arrays editable
  }
};
</script>