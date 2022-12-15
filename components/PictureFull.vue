<template>
  <div @click.self="$emit('close')" class="fixed inset-0 bg-davys-grey bg-opacity-60 z-50">
    <div class="fixed inset-2 sm:inset-6 bg-white dark:bg-eerie-black p-6 sm:py-16 px-6 rounded-2xl overflow-hidden">
      <button @click="$emit('close')" class="w-10 h-10 absolute duration-200 hover:rotate-90 top-6 right-6 z-10">
        <span class="w-full bg-eerie-black dark:bg-white h-1 block absolute top-1/2 -translate-y-1/2 rotate-45 rounded"></span>
        <span class="w-full bg-eerie-black dark:bg-white h-1 block absolute top-1/2 -translate-y-1/2 -rotate-45 rounded"></span>
      </button>
      <div class="flex flex-col gap-8 sm:gap-2 sm:flex-row h-full">
        <button @click="GoPrevious()" aria-label="Boutton voir photo precedente" class="hidden sm:block h-40 w-10 duration-150 hover:-translate-x-2 self-center">
          <img src="/images/icon_fleche_gauche.svg" height="40" width="40" alt="flèche en direction de la gauche" class="w-8 max-w-none object-cover font-bold dark:invert">
        </button>
        <div class="flex overflow-hidden" id="container">
          <div v-for="img in imgs" class="img-element min-w-full snap-center">
            <nuxt-img
              quality="90"
              format="webp"
              class="rounded-lg object-contain font-bold m-auto h-full"
              width="1920"
              height="1080"
              :src="img.link"
              :alt="img.alt" />
          </div>
        </div>
        <button @click="GoNext()" aria-label="Boutton voir photo suivante" class="hidden sm:block h-40 w-10 duration-150 hover:translate-x-2 self-center">
          <img src="/images/icon_fleche_droite.svg" height="40" width="40" alt="flèche en direction de la droite" class="w-8 max-w-none object-cover font-bold dark:invert">
        </button>
        <div class="flex justify-center gap-8 sm:hidden">
          <button @click="GoPrevious()" aria-label="Boutton voir photo precedente" class=":hidden h-10 w-10 duration-150 hover:translate-x-2 self-center">
            <img src="/images/icon_fleche_gauche.svg" height="40" width="40" alt="flèche en direction de la gauche" class="w-8 max-w-none object-cover font-bold dark:invert">
          </button>
          <button @click="GoNext()" aria-label="Boutton voir photo suivante" class=" sm:hidden h-10 w-10 duration-150 hover:translate-x-2 self-center">
            <img src="/images/icon_fleche_droite.svg" height="40" width="40" alt="flèche en direction de la droite" class="w-8 max-w-none object-cover font-bold dark:invert">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['imgs', 'actualPict'],
  data() {
    return {
      index: this.imgs.indexOf(this.actualPict, 0),
      imgWidth: 0,
    }
  },
  methods: {
    GoNext() {
      if (this.index == this.imgs.length - 1)
        this.index = 0;
      else
        this.index++;
      this.Animate();
    },
    GoPrevious() {
      if (this.index == 0)
        this.index = this.imgs.length - 1;
      else
        this.index--;
      this.Animate();
    },
    Animate() {
      const imgs = document.querySelectorAll('.img-element');
      imgs.forEach(img => {
        img.style.transitionDuration = ".5s";
      });
      this.UpdateGlobalTranslate();
      setTimeout(() => { 
        imgs.forEach(img => {
          img.style.transitionDuration = "0s";
        });
      }, 550)
    },
    UpdateGlobalTranslate() {
      const imgWidth = document.querySelector('.img-element').getBoundingClientRect().width;
      const globalTranslate = imgWidth*this.index;
      const imgs = document.querySelectorAll('.img-element');
      imgs.forEach(img => {
        img.style.transform = `translateX(-${globalTranslate}px)` 
      });
    },
  },
  mounted() {
    this.UpdateGlobalTranslate();
    window.addEventListener('resize', () => {
      this.UpdateGlobalTranslate();
    })
  }
};
</script>