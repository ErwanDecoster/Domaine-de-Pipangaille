<script>
export default {
  data() {
    return {
      form: {
        nbAdulte: 2,
        nbEnfant: 0,
        startDate: this.DateNow(new Date(), 0),
        endDate: this.DateNow(new Date(), 1),
      },
    }
  },
  watch: {
    'form.nbAdulte': function (newNbAdulte) {
      localStorage.nbAdulte = newNbAdulte
    },
    'form.nbEnfant': function (newNbEnfant) {
      localStorage.nbEnfant = newNbEnfant
    },
    'form.startDate': function (newStartDate) {
      if (Date.parse(newStartDate) > Date.parse(this.DateNow(new Date(), 0))) {
        localStorage.startDate = newStartDate
      }
    },
    'form.endDate': function (newEndDate) {
      if (Date.parse(newEndDate) > Date.parse(this.DateNow(new Date(), 1))) {
        localStorage.endDate = newEndDate
      }
    },
  },
  mounted() {
    if (localStorage.nbAdulte) {
      this.form.nbAdulte = localStorage.nbAdulte
    }
    if (localStorage.nbEnfant) {
      this.form.nbEnfant = localStorage.nbEnfant
    }
    if (localStorage.startDate) {
      if (Date.parse(localStorage.startDate) > Date.parse(this.DateNow(new Date(), 0))) {
        this.form.startDate = localStorage.startDate
      }
    }
    if (localStorage.endDate) {
      if (Date.parse(localStorage.endDate) > Date.parse(this.DateNow(new Date(), 1))) {
        this.form.endDate = localStorage.endDate
      }
    }
  },
  methods: {
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
      if (Date.parse(endDate.value) > Date.parse(this.DateNow(new Date(), 1))) {
        localStorage.endDate = endDate.value
      }
    },
  },
}
</script>

<template>
  <div class="mx-auto lg:w-max px-4 -translate-y-1/2">
    <div class="bg-white dark:bg-eerie-black grid gap-2 shadow-lg dark:shadow-lg-dark p-5 px-6 rounded-lg">
      <h2 class="font-bold text-xl">
        {{ $t('searchEngine.book') }}
      </h2>
      <p class="items-center flex flex-wrap gap-y-2">
        <span>{{ $t('searchEngine.part1') }}</span>
        <input
          id="nbAdulte"
          v-model="form.nbAdulte"
          type="number"
          name="nbAdulte"
          autocomplete="no"
          class="w-16 mx-2 rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black"
        >
        <label for="nbAdulte">{{ $t('searchEngine.part2') }}</label>
        <span class="ml-1">{{ $t('searchEngine.part3') }}</span>
        <input
          id="nbEnfant"
          v-model="form.nbEnfant"
          type="number"
          name="nbEnfant"
          autocomplete="no"
          class="w-16 mx-2 rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black"
        >
        <label for="nbEnfant">{{ $t('searchEngine.part4') }}</label>
        <label
          for="startDate"
          class="ml-1"
        >
          {{ $t('searchEngine.part5') }}
        </label>
        <input
          id="startDate"
          v-model="form.startDate"
          type="date"
          name="startDate"
          autocomplete="no"
          class="w-32 mx-2 rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black"
          @change="UpdateEndDate()"
        >
        <label for="endDate">{{ $t('searchEngine.part6') }}</label>
        <input
          id="endDate"
          v-model="form.endDate"
          type="date"
          name="endDate"
          autocomplete="no"
          class="w-32 mx-2 rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black"
        >
        <NuxtLink
          :to="$localePath(`book`)"
          :form="22"
          class="md:ml-auto md:w-max p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md w-full text-center cursor-pointer duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md"
          :title="$t('searchEngine.showAvailability')"
        >
          {{ $t('searchEngine.showAvailability') }}
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
