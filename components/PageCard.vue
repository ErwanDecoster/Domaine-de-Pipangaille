<template>
  <div class="bg-white dark:bg-eerie-black shadow-lg dark:shadow-lg-dark rounded flex flex-col overflow-hidden">
    <img 
      v-if="img" 
      :src="img.srcs[0].src" 
      :alt="img.alt" 
      :srcset="
        img.srcs[0].src + ' 309w, ' +
          img.srcs[1].src + ' 462w'"
      class="rounded-b w-full h-full aspect-[4/3] object-cover bg-northern_light_grey font-bold" 
      sizes="(max-width: 600px) 462px, 309px"
      loading="lazy"
    >
    <div class="p-3 sm:p-4 flex flex-col gap-2 h-full">
      <h3 class="text-xl">
        {{ title }}
      </h3>
      <p 
        v-if="shortDesc"
        class="grow "
      >
        {{ shortDesc }}
      </p>
      <ButtonSecondary
        :link="target"
        content="En savoir plus"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageCard',
  props: { 
    img: {
      type: Object,
      default: () => ({}),
    },
    title: {
      type: String,
      default: '',
    },
    shortDesc: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
  },
  mounted() {
    console.log(this.img);
  }
};
</script>