<template>
  <div class="w-full h-full relative">
    <!-- <div class="bg-almond dark:bg-dark-almond left-0 right-0 md:right-32 absolute top-8 bottom-8 rounded"></div> -->
    <div class="bg-almond dark:bg-dark-almond right-0 left-0 md:left-1/3 absolute top-8 bottom-8 md:bottom-4 rounded" />
    <div class="z-10 relative grid grid-cols-1 md:grid-cols-7">
      <div class="flex flex-col gap-2 h-full p-6 md:p-8 pt-12 md:pt-16 md:pb-12 md:col-span-3 md:order-1">
        <h2 class="text-4xl">
          {{ title }}
        </h2>
        <div class="grow grid gap-1">
          <p
            v-for="row in content"
            :key="row"
          >
            {{ row.text }}
          </p>
        </div>
        <div 
          v-if="button"
          class="flex gap-4 flex-wrap"
        >
          <ButtonPrimary 
            v-for="row in button"
            :key="row"
            :link="row.target"
            :content="row.content"
          />
        </div>
        <div 
          v-if="links.length"
          class="grid gap-2"
        >
          <p class="text-lg">
            Les liens
          </p>
          <div class="flex gap-4 flex-wrap md:w-[130%]">
            <ButtonPrimary 
              v-for="link in links" 
              :key="link" 
              :link="link.link"
              :content="link.label"
              newWindow="_blank" 
            />
          </div>
        </div>
      </div>
      <div class="relative md:col-span-4">
        <nuxt-img 
          v-if="imgs[0]" 
          :id="id1"
          :src="imgs[0].src" 
          style="z-index: 0;"
          :width="`${Math.round(378*1.1)}`"
          :height="`${Math.round(213*1.1)}`"
          quality="90"
          format="webp"
          loading="lazy"
          placeholder
          preload
          class="rounded duration-150 shadow-lg dark:shadow-lg-dark md:absolute md:top-0 md:left-0 w-3/5 md:w-2/3 aspect-video object-cover bg-northern_light_grey font-bold" 
          :alt="imgs[0].alt" 
          @mouseover="InvertPicture($event)"
        />
        <nuxt-img
          v-if="imgs[1]" 
          :id="id2"
          :src="imgs[1].src" 
          style="z-index: 10;"
          :width="`${Math.round(378*1.1)}`"
          :height="`${Math.round(213*1.1)}`"
          quality="90"
          format="webp"
          loading="lazy"
          placeholder
          class="rounded duration-150 shadow-lg dark:shadow-lg-dark ml-auto -mt-4 sm:-mt-20 md:absolute md:bottom-0 md:right-0 w-3/5 md:w-2/3 aspect-video object-cover bg-northern_light_grey font-bold" 
          :alt="imgs[1].alt" 
          @mouseover="InvertPicture($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardTypeOn",
  props: { 
    title: {
      type: String,
      default: '',
    },
    content: { 
      type: Array,
      default() {
        return []
      },
    },
    imgs: {
      type: Array,
      default() {
        return []
      },
    },
    button: {
      type: Array,
      default() {
        return []
      },
    },
    links: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {
      id1: Math.floor(Math.random() * 100),
      id2: Math.floor(Math.random() * 100),
      isAnime: false,
    }
  },
  methods: {
    InvertPicture(elementInput){
      if (this.isAnime == false)
      {
        const parent = elementInput.target.parentElement;
        const asArray = [...parent.children];
        const filtered = asArray.filter(element => element.id != elementInput.target.id);
        this.MoveElements(elementInput.target, filtered[0], ((elementInput.target.parentElement.offsetHeight - elementInput.target.offsetHeight * 2) / 2))
      }
    },
    MoveElements(elem1, elem2, sizeBetwen) {
      if (sizeBetwen < 0 && elem1.style.zIndex == 0 && document.body.scrollWidth >= 768)
      {
        this.isAnime = true;
        sizeBetwen -= 2 * sizeBetwen - 4;
        const elem1Data = elem1.getBoundingClientRect();
        const elem2Data = elem2.getBoundingClientRect();
        if (elem2Data.y > elem1Data.y)
        {
          elem1.style.transform = `translateY(-${sizeBetwen}px)`;
          elem2.style.transform = `translateY(${sizeBetwen}px)`;
          elem1.style.zIndex = 10;
          elem2.style.zIndex = 0;
          setTimeout(() => {
            elem1.style.transform = `translateY(0px)`;
            elem2.style.transform = `translateY(0px)`;
            this.isAnime = false;
          }, 150)
        }
        else
        {
          elem2.style.transform = `translateY(-${sizeBetwen}px)`;
          elem1.style.transform = `translateY(${sizeBetwen}px)`;
          elem1.style.zIndex = 10;
          elem2.style.zIndex = 0;
          setTimeout(() => {
            elem1.style.transform = `translateY(0px)`;
            elem2.style.transform = `translateY(0px)`;
            this.isAnime = false;
          }, 150)
        }
      }
    },
  }
};
</script>