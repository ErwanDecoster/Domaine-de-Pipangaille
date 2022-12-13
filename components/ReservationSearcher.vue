<template>
  <div class="mx-auto lg:w-max px-4 -translate-y-1/2">
    <div class="bg-white dark:bg-eerie-black grid gap-2 shadow-lg dark:shadow-lg-dark p-5 px-6 rounded-lg">
      <h2 class="font-bold text-xl">Réserver</h2>
      <p class="items-center flex flex-wrap gap-y-2">
        <span>Pour</span>
        <input type="number" v-model="form.nbAdulte" name="nbAdulte" id="nbAdulte" autocomplete="no" class="w-16 mx-2 rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black">
        <label for="nbAdulte">adultes</label>
        <span class="ml-1">et</span>
        <input type="number" v-model="form.nbEnfant" name="nbEnfant" id="nbEnfant" autocomplete="no" class="w-16 mx-2 rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black">
        <label for="nbEnfant">enfants</label>
        <label for="startDate">, du</label>
        <input type="date" v-model="form.startDate" @change="UpdateEndDate()" name="startDate" id="startDate" autocomplete="no" class="w-32 mx-2 rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black">
        <label for="endDate">au</label>
        <input type="date" v-model="form.endDate" name="endDate" id="endDate" autocomplete="no" class="w-32 mx-2 rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black">
        <NuxtLink :to="`/book?nbAdulte=${form.nbAdulte}&nbEnfant=${form.nbEnfant}&startDate=${form.startDate}&endDate=${form.endDate}`" :form="22" class="md:ml-auto md:w-max p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md w-full text-center cursor-pointer duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md">Voir les disponibilités</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nbAdulte: 2,
        nbEnfant: 0,
        startDate: this.DateNow(new Date(), 0),
        endDate: this.DateNow(new Date(), 1),
      }
    };
  },
  methods: {
    Pad(d) {
      return (d < 10) ? '0' + d.toString() : d.toString();
    },
    DateNow(date, addDay) {
      date.setDate(date.getDate() + addDay);
      const day = this.Pad(date.getDate());
      const month = this.Pad(date.getMonth() + 1);
      const year = date.getFullYear();
      return (`${year}-${month}-${day}`);
    },
    UpdateEndDate() {
      endDate.value = this.DateNow(new Date(startDate.value), 1);
      if (Date.parse(endDate.value) > Date.parse(this.DateNow(new Date(), 1))) {
        localStorage.endDate = endDate.value;
      }
    },
  },
  mounted() {
    if (localStorage.nbAdulte) {
      this.form.nbAdulte = localStorage.nbAdulte;
    }
    if (localStorage.nbEnfant) {
      this.form.nbEnfant = localStorage.nbEnfant;
    }
    if (localStorage.startDate) {
      if (Date.parse(localStorage.startDate) > Date.parse(this.DateNow(new Date(), 0))) {
        this.form.startDate = localStorage.startDate;
      }
    }
    if (localStorage.endDate) {
      if (Date.parse(localStorage.endDate) > Date.parse(this.DateNow(new Date(), 1))) {
        this.form.endDate = localStorage.endDate;
      }
    }
  },
  watch: {
    'form.nbAdulte'(newNbAdulte) {
      localStorage.nbAdulte = newNbAdulte;
    },
    'form.nbEnfant'(newNbEnfant) {
      localStorage.nbEnfant = newNbEnfant;
    },
    'form.startDate'(newStartDate) {
      if (Date.parse(newStartDate) > Date.parse(this.DateNow(new Date(), 0))) {
        localStorage.startDate = newStartDate;
      }
    },
    'form.endDate'(newEndDate) {
      if (Date.parse(newEndDate) > Date.parse(this.DateNow(new Date(), 1))) {
        localStorage.endDate = newEndDate;
      }
    },
  },
};
</script>