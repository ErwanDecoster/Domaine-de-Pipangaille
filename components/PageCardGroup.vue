<template>
  <div class="grid gap-8">
    <div class="flex flex-wrap sm:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-8">
      <PageCard
        v-for="element in elementsList" 
        :key="element" 
        :img="Imgs[element.imgs[0].id]"
        :title="element.title" 
        :shortDesc="element.shortDesc" 
        :target="element.category ? `/${targetPage}/${element.category}/${element.slug}` : `/${targetPage}/${element.slug}`"
      />
    </div>
    <button
      v-if="propElementsList.length > 6 && elementsCategory === 'a_visiter'"
      class="mx-auto p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md w-max duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md"
      @click="updateElementList"
    >
      {{ elementsMinimized === true ? 'Voir moins d\'activité' : 'Voir plus d\'activité' }}
    </button>
    <button
      v-else-if="propElementsList.length > 6 && elementsCategory === 'se_restaurer'"
      class="mx-auto p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md w-max duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md"
      @click="updateElementList"
    >
      {{ elementsMinimized === true ? 'Voir moins de lieu de restauration' : 'Voir plus de lieu de restauration' }}
    </button>
  </div>
</template>

<script>
import { Imgs } from '@/data';

export default {
  props: { 
    propElementsList: {
      type: Array,
      default() {
        return []
      },
    },
    targetPage: { 
      type: String,
      default: '',
    },
  },
  data() {
    return {
      Imgs: Imgs,
      elementsList: this.propElementsList.slice(0, 6),
      elementsMinimized: false,
      elementsCategory: this.propElementsList[0].category,
    };
  },
  methods: {
    updateElementList() {
      if (this.elementsMinimized) {
        this.elementsList = this.propElementsList.slice(0, 6);
      } else {
        this.elementsList = this.propElementsList
      }
      this.elementsMinimized = !this.elementsMinimized
    }
  },
};
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>