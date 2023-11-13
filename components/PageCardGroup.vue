<template>
  <div class="grid gap-8">
    <div class="grid gap-6">
      <div 
        v-if="showFilter" 
        class="grid gap-2"
      >
        <h2 class="text-2xl">
          Filtres :
        </h2>
        <div class="flex gap-2 justify-starts flex-wrap">
          <button 
            class="p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md w-max text-center duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md capitalize"
            @click="FilterBy(false)"
          >
            Aucun
          </button>
          <button 
            v-for="filter in filters"
            :key="filter"
            class="p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md w-max text-center duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md capitalize"
            @click="FilterBy(filter)"
          >
            {{ filter }}
          </button>
        </div>
      </div>
      <TransitionGroup 
        name="list" 
        tag="div"
        class="flex relative flex-wrap sm:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
      >
        <PageCard
          v-for="element in elementsList" 
          :id="element.id"
          :key="element" 
          :img="Imgs[element.imgs[0].id]"
          :title="element.title" 
          :shortDesc="element.shortDesc" 
          :target="element.category ? `/${targetPage}/${element.category}/${element.slug}` : `/${targetPage}/${element.slug}`"
        />
      </TransitionGroup>
    </div>
    
    <button
      v-if="filteredElementsList.length > 6 && elementsCategory === 'a_visiter'"
      class="mx-auto p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md w-max duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md"
      @click="updateElementList(true)"
    >
      {{ elementsMinimized === true ? 'Voir plus d\'activité' : 'Voir moins d\'activité' }}
    </button>
    <button
      v-else-if="filteredElementsList.length > 6 && elementsCategory === 'se_restaurer'"
      class="mx-auto p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md w-max duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md"
      @click="updateElementList(true)"
    >
      {{ elementsMinimized === true ? 'Voir plus de lieu de restauration' : 'Voir moins de lieu de restauration' }}
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
    showFilter: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      filters: [],
      Imgs: Imgs,
      elementsList: this.propElementsList.slice(0, 6),
      filteredElementsList: [],
      elementsMinimized: true,
      elementsCategory: this.propElementsList[0].category,
      activeFilter: '',
    };
  },
  watch: {
    elementsMinimized(newVal) {
      if (this.elementsCategory == 'a_visiter')
        localStorage.elementsMinimizedAVisiter = newVal;
      if (this.elementsCategory == 'se_restaurer')
        localStorage.elementsMinimizedSeRestaurer = newVal;
    },
    activeFilter(newVal) {
      localStorage.activeFilter = newVal;
    }
  },
  mounted() {
    this.filteredElementsList = this.propElementsList
    if (this.showFilter)
    {
      this.GetFilter();
      if (localStorage.activeFilter)
        this.FilterBy(localStorage.activeFilter == 'false' ? false : localStorage.activeFilter)
    }
    if (this.elementsCategory == 'a_visiter' && localStorage.elementsMinimizedAVisiter)
      this.elementsMinimized = localStorage.elementsMinimizedAVisiter == 'true' ? true : false;
    if (this.elementsCategory == 'se_restaurer' && localStorage.elementsMinimizedSeRestaurer)
      this.elementsMinimized = localStorage.elementsMinimizedSeRestaurer == 'true' ? true : false;
    this.updateElementList();
  },
  methods: {
    updateElementList(changeState) {
      if (changeState)
        this.elementsMinimized = !this.elementsMinimized
      if (this.elementsMinimized)
        this.elementsList = this.filteredElementsList.slice(0, 6);
      else
        this.elementsList = this.filteredElementsList
      document.querySelectorAll('.card').forEach(card => {
        card.style.width = card.getBoundingClientRect().width + 'px';
      })
    },
    GetFilter() {
      const filters = []
      this.propElementsList.forEach(element => {
        element.sous_category.forEach(sous_category_elem => {
          filters.indexOf(sous_category_elem) === -1 && filters.push(sous_category_elem);
        })
      });
      this.filters = filters;
    },
    FilterBy(newVisibleCategory) {
      this.activeFilter = newVisibleCategory;
      if (newVisibleCategory == false)
      {
        this.filteredElementsList = this.propElementsList;
        this.updateElementList()
        return ;
      }
      this.filteredElementsList = []
      this.propElementsList.forEach(element => {
        element.sous_category.forEach(sous_category_elem => {
          if (sous_category_elem == newVisibleCategory)
            this.filteredElementsList.indexOf(sous_category_elem) === -1 && this.filteredElementsList.push(element);
        })
      })
      this.updateElementList()
    },
  },
};
</script>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all .5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.list-leave-active {
  position: absolute;
}
</style>