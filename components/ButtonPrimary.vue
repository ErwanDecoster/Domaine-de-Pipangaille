<template>
  <NuxtLink
    :to="link"
    class="p-2 px-4 rounded-lg bg-eerie-black text-md w-max text-white duration-100 border border-eerie-black hover:bg-almond dark:hover:bg-dark-almond hover:text-eerie-black hover:rounded-md"
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
  },
};
</script>