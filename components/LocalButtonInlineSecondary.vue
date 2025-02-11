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
    :to="$localePath(props.link)"
    :target="linkTarget"
    class="md:ml-auto md:w-max p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md text-center duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md"
    :style="fontSizeStyle"
    :title="linkTitle"
  >
    {{ linkTitle }}
  </NuxtLink>
</template>
