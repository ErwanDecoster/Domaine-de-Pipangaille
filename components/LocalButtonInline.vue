<script setup>
const props = defineProps({
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
  },
})

const { t } = useI18n()

const linkTarget = computed(() => (props.newWindow ? '_blank' : ''))
const fontSizeStyle = computed(() => ({ fontSize: `${props.fontSize}px` }))
const linkTitle = computed(() => t(props.content))
</script>

<template>
  <NuxtLink
    :to="$localePath({ name: props.link })"
    :target="linkTarget"
    class="group relative py-4 px-3 text-md w-max"
    :style="fontSizeStyle"
    :title="linkTitle"
  >
    {{ linkTitle }}
    <div class="w-full h-0.5 bg-almond dark:bg-dark-almond overflow-hidden rounded -translate-y-0.5">
      <div
        class="progres_bg w-0 duration-200 group-hover:w-full h-full bg-eerie-black dark:bg-white rounded"
      />
    </div>
  </NuxtLink>
</template>

<style>
.router-link-active .progres_bg {
  width: 100%;
}
</style>
