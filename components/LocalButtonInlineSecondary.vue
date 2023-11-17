<template>
  <NuxtLink 
    :to="localePath(link)"
    :target="newWindow"
    class="md:ml-auto md:w-max p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md text-center duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md"
    :style="{ 'font-size': fontSize + 'px' }"
  >
    {{ content }}
  </NuxtLink>
</template>

<script>
export default {
  props: { 
    link: {
      type: String,
      default: '',
    },
    content: { 
      type: String,
      default: '',
    },
    fontSize: {
      type: String,
      default: '',
    },
    newWindow: {
      type: String,
      default: '',
    }
  },
};
</script>s