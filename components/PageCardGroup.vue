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
            {{ $t(`near.toVisit.filter.none`) }}
          </button>
          <button 
            v-for="filter in filters"
            :key="filter"
            class="p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md w-max text-center duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md capitalize"
            @click="FilterBy(filter)"
          >
            {{ $t(`near.toVisit.filter.${filter}`) }}
          </button>
        </div>
      </div>
      <TransitionGroup 
        name="list" 
        tag="div"
        class="flex relative flex-wrap sm:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8"
      >
        <PageCard
          v-for="element in elementsList" 
          :id="element.id"
          :key="element" 
          :img="Imgs[element.imgs[0].id]"
          :title="element.category ? element.title : $t(`${targetPage}.${element.i18n}.title`)" 
          :shortDesc="element.category ? $t(`${targetPage}.${element.category}.${element.i18n}.shortDesc`) : $t(`${targetPage}.${element.i18n}.shortDesc`)" 
          :target="element.category ? { name: targetPage + '-group-id' , params: { group: $t(`near.${element.category}.slug`), id: element.slug }} : { name: targetPage + '-id', params: { id: element.slug }}"
        />
      </TransitionGroup>
    </div>
    
    <button
      v-if="filteredElementsList.length > defaultVisibleCard && elementsCategory === 'toVisit'"
      class="mx-auto p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md w-max duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md"
      @click="updateElementList(true)"
    >
      {{ elementsMinimized === true ? $t('near.toVisit.showMore') : $t('near.toVisit.showLess') }}
    </button>
    <button
      v-else-if="filteredElementsList.length > defaultVisibleCard && elementsCategory === 'restore'"
      class="mx-auto p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md w-max duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md"
      @click="updateElementList(true)"
    >
      {{ elementsMinimized === true ? $t('near.restore.showMore') : $t('near.restore.showLess') }}
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
      defaultVisibleCard: 3,
      filters: [],
      Imgs: Imgs,
      elementsList: this.propElementsList.slice(0, this.defaultVisibleCard),
      filteredElementsList: [],
      elementsMinimized: true,
      elementsCategory: this.propElementsList[0].category,
      activeFilter: '',
    };
  },
  watch: {
    elementsMinimized(newVal) {
      if (this.elementsCategory == 'toVisit')
        localStorage.elementsMinimizedAVisiter = newVal;
      if (this.elementsCategory == 'restore')
        localStorage.elementsMinimizedSeRestaurer = newVal;
    },
    activeFilter(newVal) {
      localStorage.activeFilter = newVal;
    }
  },
  mounted() {
    this.CalcVisibleCard()
    window.addEventListener('resize', () => {
      this.CalcVisibleCard()
      this.updateElementList()
    })
    this.filteredElementsList = this.propElementsList
    if (this.showFilter)
    {
      this.GetFilter();
      if (localStorage.activeFilter)
        this.FilterBy(localStorage.activeFilter == 'false' ? false : localStorage.activeFilter)
    }
    if (this.elementsCategory == 'toVisit' && localStorage.elementsMinimizedAVisiter)
      this.elementsMinimized = localStorage.elementsMinimizedAVisiter == 'true' ? true : false;
    if (this.elementsCategory == 'restore' && localStorage.elementsMinimizedSeRestaurer)
      this.elementsMinimized = localStorage.elementsMinimizedSeRestaurer == 'true' ? true : false;
    this.updateElementList();
  },
  methods: {
    updateElementList(changeState) {
      if (changeState)
        this.elementsMinimized = !this.elementsMinimized
      if (this.elementsMinimized)
        this.elementsList = this.filteredElementsList.slice(0, this.defaultVisibleCard);
      else
        this.elementsList = this.filteredElementsList
      setTimeout(() => {
        document.querySelectorAll('.card').forEach(card => {
          card.style.width = card.getBoundingClientRect().width + 'px';
        })
      }, 200)
    },
    GetFilter() {
      const filters = []
      this.propElementsList.forEach(element => {
        element.subCategory.forEach(sous_category_elem => {
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
        element.subCategory.forEach(sous_category_elem => {
          if (sous_category_elem == newVisibleCategory)
            this.filteredElementsList.indexOf(sous_category_elem) === -1 && this.filteredElementsList.push(element);
        })
      })
      this.updateElementList()
    },
    CalcVisibleCard() {
      const width = window.innerWidth;
      let newVisibleCard = 3
      if (width > 640)
        newVisibleCard = 4;
      if (width > 768)
        newVisibleCard = 6;
      if (width > 1280)
        newVisibleCard = 8;
      this.defaultVisibleCard = newVisibleCard;
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