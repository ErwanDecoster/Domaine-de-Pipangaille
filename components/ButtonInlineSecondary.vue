<template>
  <NuxtLink :to="link" :target="newWindow" class="md:ml-auto md:w-max p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md text-center duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md" :style="{ 'font-size': fontSize + 'px' }">{{ content }}</NuxtLink>
</template>

<script>
export default {
  name: 'Button',
  props: ['link', 'content', 'fontSize', 'newWindow'],
};
</script>