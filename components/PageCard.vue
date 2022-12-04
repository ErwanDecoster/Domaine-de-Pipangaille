<template>
  <div class="bg-white dark:bg-eerie-black shadow-lg dark:shadow-lg-dark rounded flex flex-col overflow-hidden">
    <nuxt-img 
      v-if="img" :src="img" 
      :alt="imgAlt" 
      width="309"
      height="232"
      quality="90"
      class="rounded-b w-full h-full aspect-[4/3] object-cover bg-northern_light_grey font-bold" />
    <div class="p-3 sm:p-4 flex flex-col gap-2 h-full">
      <h3 class="text-xl">{{ title }}</h3>
      <p class="grow ">{{ shortDesc }}</p>
      <ButtonSecondary :link="target" content="En savoir plus" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageCard',
  props: ['img', 'imgAlt', 'title', 'shortDesc', 'target'],
};
</script>