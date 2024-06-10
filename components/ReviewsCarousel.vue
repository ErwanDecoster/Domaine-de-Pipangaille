<script>
export default {
  props: {
    reviews: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      slidesUsable: [],
    }
  },
  mounted() {
    this.slidesUsable = this.reviews
    const carousel = document.getElementById('carousel')
    carousel.addEventListener('scroll', () => {
      const width = carousel.getBoundingClientRect().width
      if (Number.parseInt(width) * 1.5 >= carousel.scrollWidth - Number.parseInt(carousel.scrollLeft)) {
        document.getElementById('nextButton').disabled = true
      }
      else {
        document.getElementById('nextButton').disabled = false
      }
      if (carousel.scrollLeft === 0) {
        document.getElementById('prevButton').disabled = true
      }
      else {
        document.getElementById('prevButton').disabled = false
      }
    })
  },
  methods: {
    ChangeSlide(dir) {
      const carousel = document.getElementById('carousel')
      const width = carousel.getBoundingClientRect().width
      carousel.scrollBy({
        left: dir * Number.parseInt(width),
        behavior: 'smooth',
      })
    },
    Pad(d) {
      return (d < 10) ? `0${d.toString()}` : d.toString()
    },
    DateNow(date, addDay) {
      date.setDate(date.getDate() + addDay)
      const day = this.Pad(date.getDate())
      const month = this.Pad(date.getMonth() + 1)
      const year = date.getFullYear()
      return (`${year}-${month}-${day}`)
    },
    UpdateEndDate() {
      endDate.value = this.DateNow(new Date(startDate.value), 1)
    },
  },
}
</script>

<template>
  <section class="bg-almond dark:bg-dark-almond w-full min-h-[16rem] my-8 flex items-center py-8">
    <div class="max-w-screen-xl w-full px-4 mx-auto grid gap-4">
      <h2 class="text-4xl w-full">
        {{ $t('index.reviewsTittle') }}
      </h2>
      <div class="max-w-[18rem] sm:max-w-lg md:max-w-3xl lg:max-w-4xl sm:px-2 md:px-6 gap-1 md:gap-4 grid grid-cols-2 justify-items-center sm:flex items-center mx-auto ">
        <button
          id="prevButton"
          disabled
          aria-label="Boutton voir avis precedent"
          class="sm:h-40 w-8 duration-150 hover:-translate-x-2 disabled:opacity-25 order-1 sm:order-none"
          @click="ChangeSlide(-1)"
        >
          <img
            src="/images/icon_fleche_gauche.svg"
            loading="lazy"
            height="32"
            width="32"
            alt="flèche en direction de la gauche"
            class="w-8 max-w-none object-cover font-bold dark:invert"
          >
        </button>
        <div
          id="carousel"
          class="no-scrollbar col-span-2 grid grid-cols-[repeat(23,100%)] overflow-auto w-full sm:px-8 gap-4 snap-x"
        >
          <div
            v-for="review in slidesUsable.sort((a, b) => b.review_timestamp - a.review_timestamp)"
            :key="review"
            tabindex="0"
            class="py-4 px-4 sm:px-8 my-auto flex flex-col gap-4 h-full snap-center relative"
          >
            <span class="absolute top-1 left-1">
              <span class="bg-eerie-black h-0.5 w-8 block" />
              <span class="bg-eerie-black h-8 w-0.5 block" />
            </span>
            <span class="absolute bottom-1 right-1 rotate-180">
              <span class="bg-eerie-black h-0.5 w-8 block" />
              <span class="bg-eerie-black h-8 w-0.5 block" />
            </span>
            <div class="relative mx-auto">
              <ul class="flex gap-2">
                <li
                  v-for="index in 5"
                  :key="index"
                  class="h-6 w-6"
                >
                  <svg
                    viewBox="0 0 19 17"
                    class="fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.84026 0.463526C8.98994 0.0028702 9.64164 0.0028701 9.79132 0.463525L11.5196 5.78254C11.5865 5.98855 11.7785 6.12803 11.9951 6.12803L17.5878 6.12803C18.0722 6.12804 18.2736 6.74784 17.8817 7.03254L13.3571 10.3199C13.1819 10.4472 13.1085 10.6729 13.1755 10.8789L14.9037 16.1979C15.0534 16.6586 14.5262 17.0416 14.1343 16.7569L9.60968 13.4696C9.43444 13.3423 9.19714 13.3423 9.0219 13.4696L4.49727 16.7569C4.10541 17.0416 3.57817 16.6586 3.72785 16.1979L5.4561 10.8789C5.52304 10.6729 5.44971 10.4472 5.27447 10.3199L0.749839 7.03254C0.357983 6.74784 0.55937 6.12804 1.04373 6.12803L6.63648 6.12803C6.85309 6.12803 7.04507 5.98855 7.11201 5.78254L8.84026 0.463526Z" />
                  </svg>
                </li>
              </ul>
              <ul class="flex gap-2 absolute top-0">
                <li
                  v-for="star in review.review_rating"
                  :key="star"
                  class="h-6 w-6"
                >
                  <svg
                    viewBox="0 0 19 17"
                    class="fill-yellow-red"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.84026 0.463526C8.98994 0.0028702 9.64164 0.0028701 9.79132 0.463525L11.5196 5.78254C11.5865 5.98855 11.7785 6.12803 11.9951 6.12803L17.5878 6.12803C18.0722 6.12804 18.2736 6.74784 17.8817 7.03254L13.3571 10.3199C13.1819 10.4472 13.1085 10.6729 13.1755 10.8789L14.9037 16.1979C15.0534 16.6586 14.5262 17.0416 14.1343 16.7569L9.60968 13.4696C9.43444 13.3423 9.19714 13.3423 9.0219 13.4696L4.49727 16.7569C4.10541 17.0416 3.57817 16.6586 3.72785 16.1979L5.4561 10.8789C5.52304 10.6729 5.44971 10.4472 5.27447 10.3199L0.749839 7.03254C0.357983 6.74784 0.55937 6.12804 1.04373 6.12803L6.63648 6.12803C6.85309 6.12803 7.04507 5.98855 7.11201 5.78254L8.84026 0.463526Z" />
                  </svg>
                </li>
              </ul>
            </div>
            <p class="max-h-36 overflow-y-scroll">
              {{ review.review_text }}
            </p>
            <p>
              {{ review.author_title }}
              - {{ review.platform_origin }}
              - {{ $d(new Date(review.review_timestamp * 1000)) }}
            </p>
          </div>
        </div>
        <button
          id="nextButton"
          aria-label="Boutton voir avis suivant"
          class="sm:h-40 w-8 duration-150 hover:translate-x-2 disabled:opacity-25 order-2 sm:order-none"
          @click="ChangeSlide(1)"
        >
          <img
            src="/images/icon_fleche_droite.svg"
            loading="lazy"
            height="32"
            width="32"
            alt="flèche en direction de la droite"
            class="w-8 max-w-none object-cover font-bold dark:invert"
          >
        </button>
      </div>
    </div>
  </section>
</template>
