<template>
  <div class="w-full h-full relative">
    <div class="bg-almond dark:bg-dark-almond left-0 right-0 md:right-32 absolute top-8 bottom-8 rounded"></div>
    <div class="z-10 relative grid grid-cols-1 md:grid-cols-2">
      <div class="flex flex-col gap-2 h-full p-6 md:p-8 pt-12 md:py-16">
        <h2 class="text-4xl">{{ title }}</h2>
        <div class="grow grid gap-1">
          <p v-for="row in content" :key="row">{{ row.text }}</p>
        </div>
        <div v-if="button" class="flex gap-4 flex-wrap">
          <ButtonPrimary v-for="row in button" :key="row" :link="row.target" :content="row.content" />
        </div>
      </div>
      <div class="relative">
        <nuxt-img
          :width="`${330*1.5}`"
          :height="`${186*1.5}`"
          quality="90"
          format="webp"
          placeholder
          preload
          class="rounded hover:z-10 shadow-lg dark:shadow-lg-dark md:absolute md:top-0 md:left-0 w-3/5 md:w-2/3 aspect-video object-cover bg-northern_light_grey font-bold" 
          v-if="imgs[0].src" :src="imgs[0].src" 
          :alt="imgs[0].alt" />
        <nuxt-img
          :width="`${330*1.5}`"
          :height="`${186*1.5}`"
          quality="90"
          format="webp"
          placeholder
          class="rounded hover:z-10 shadow-lg dark:shadow-lg-dark ml-auto -mt-4 sm:-mt-20 md:absolute md:bottom-0 md:right-0 w-3/5 md:w-2/3 aspect-video object-cover bg-northern_light_grey font-bold" 
          v-if="imgs[1].src" :src="imgs[1].src" 
          :alt="imgs[1].alt" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "CardTypeOn",
    props: ["title", "content", "imgs", "button"],
};
</script>