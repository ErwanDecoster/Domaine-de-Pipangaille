<template>
  <NuxtLink
    :to="localePath({ name: link })"
    :target="newWindow"
    class="group relative py-4 px-3 text-md w-max"
    :style="{ 'font-size': fontSize + 'px' }"
    :title="$t(content)"
  >
    {{ $t(content) }}
    <div class="w-full h-0.5 bg-almond dark:bg-dark-almond overflow-hidden rounded -translate-y-0.5">
      <div
        class="progres_bg w-0 duration-200 group-hover:w-full h-full bg-eerie-black dark:bg-white rounded"
      />
    </div>
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
</script>

<style>
.router-link-active .progres_bg{
  width: 100%;
}
</style>