<template>
  <NuxtLink :to="link" :target="newWindow" class="group relative py-4 px-3 text-md w-max" :style="{ 'font-size': fontSize + 'px' }">
    {{ content }}
    <div class="w-full h-0.5 bg-almond dark:bg-dark-almond overflow-hidden rounded -translate-y-0.5">
      <div id="progres_bg" class="w-0 duration-200 group-hover:w-full h-full bg-eerie-black dark:bg-white rounded"></div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'Button',
  props: ['link', 'content', 'fontSize', 'newWindow'],
};
</script>

<style>
.router-link-active #progres_bg{
  width: 100%;
}
</style>