<script setup lang="ts">
defineProps<{ place: string }>()

const { locale, locales } = useI18n()
const supportedLocales = locales.value
const router = useRouter()
const switchLocalePath = useSwitchLocalePath()

function onLocaleChanged(event: Event) {
  const target = event.target as HTMLSelectElement
  router.push({ path: switchLocalePath(target.value) })
}
</script>

<template>
  <div>
    <select
      :id="`local-lang-change-${place}`"
      name="local-lang-change"
      :value="locale"
      class="dark:bg-eerie-black p-2 px-4 rounded-lg text-md duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md"
      aria-label="Langue du site"
      @change="onLocaleChanged"
    >
      <option
        v-for="loc in supportedLocales"
        :key="loc.code"
        :value="loc.code"
      >
        {{ loc.name }}
      </option>
    </select>
  </div>
</template>
