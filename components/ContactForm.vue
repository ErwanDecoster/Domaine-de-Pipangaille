
<template>
  <section class="bg-almond dark:bg-dark-almond p-2 py-8 sm:p-16 rounedd-t-lg">
    <div class="max-w-screen-lg mx-auto p-8 bg-white dark:bg-eerie-black rounded grid gap-8">
      <h2 class="text-4xl">Nous contacter</h2>
      <div class="grid lg:flex gap-x-16 gap-y-8">
        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          <div class="grid gap-2">
            <div class="flex gap-2">
              <img width="28" height="28" src="/images/icon_telephone.svg" alt="Icone Telephone" class="w-7 sm:10 dark:invert">
              <div>
                <p class="font-semibold ml-2">Tel :</p>
                <a href="tel:+334 75 68 28 24" class="pl-2 underline decoration-2 underline-offset-2 decoration-almond dark:decoration-dark-almond text-md block">04 75 68 28 24</a>
              </div>
            </div>
            <div class="flex gap-2">
              <img width="28" height="28" src="/images/icon_email.svg" alt="Icone Email" class="w-7 sm:10 dark:invert">
              <div>
                <p class="font-semibold ml-2">Email :</p>
                <a href="mailto:contact@domaine-de-pipangaille.fr" target="_blank" class="pl-2 underline decoration-2 underline-offset-2 decoration-almond dark:decoration-dark-almond text-md block">contact@domaine-de-pipangaille.fr</a>
              </div>
            </div>
            <div class="flex gap-2">
              <img width="28" height="28" src="/images/icon_localisation.svg" alt="Icone localisation" class="w-7 sm:10 dark:invert">
              <div>
                <p class="font-semibold ml-2">Adresse :</p>
                <a href="https://www.google.fr/maps/dir//domaine+de+pipangaille/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f53e41af912869:0xe0c49553166e1500?sa=X&ved=2ahUKEwj59IKk0474AhUa_4UKHTamDM0Q9Rd6BAhbEAQ" target="_blank" class="pl-2 underline decoration-2 underline-offset-2 decoration-almond dark:decoration-dark-almond text-md block">1 Quartier Les Marettes 26140 Andancette</a>
              </div>
            </div>
          </div>
          <iframe title="Carte Google maps du Domaine de Pipangaille" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.7609287776054!2d4.8084116158016466!3d45.25262695555646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f53e41af912869%3A0xe0c49553166e1500!2sChambre%20d&#39;h%C3%B4tes%20Pipangaille!5e0!3m2!1sfr!2sfr!4v1654167736071!5m2!1sfr!2sfr" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full rounded dark:hue-rotate-180 dark:invert-[0.8] dark:contrast-125"></iframe>
        </div>
        <span class="lg:hidden mx-auto h-1 bg-almond dark:bg-dark-almond w-full rounded"></span>
        <div v-if="(errors || success)">
          <div v-for="error in errors" :key="error" class="bg-copper-penny">{{ error.message }}</div>
          <div v-if="success" class="bg-ufo-green ">Message envoyé avec succès</div>
        </div>
        <form @submit.prevent="submit(form)" class="flex flex-col sm:grid sm:grid-cols-2 gap-y-2 gap-x-8 lg:col-span-2 grow">
          <div class="grid">
            <label for="name" class="font-semibold">Nom :</label>
            <input v-model="form.name" required type="text" name="name" id="name" autocomplete="name" class="rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black">
          </div>
          <div class="grid">
            <label for="email" class="font-semibold">Email :</label>
            <input v-model="form.email" required type="email" name="email" id="email" autocomplete="email" class="rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black">
          </div>
          <div class="grid">
            <label for="tel" class="font-semibold relative">Telephone : <span class="text-xs absolute pl-1 -top-1">optionnel</span> </label>
            <input v-model="form.phone" type="tel" name="tel" id="tel" autocomplete="tel" class="rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black">
          </div>
          <div class="grid">
            <label for="objet" class="font-semibold">Objet :</label>
            <input v-model="form.subject" required type="text" name="objet" id="objet" autocomplete="off" class="rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black">
          </div>
          <div class="grid sm:col-span-2">
            <label for="message" class="font-semibold">Message :</label>
            <textarea v-model="form.message" required name="message" id="message" autocomplete="off" class="rounded-lg px-2 py-1 border h-32 min-h-[8em] outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black"></textarea>
          </div>
          <button type="submit" class="col-span-2 ml-auto cursor-pointer md:w-max p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md w-full text-center duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md">
            <template v-if="!waiting">Envoyer</template>
            <template v-if="waiting">Envoye en cours</template>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
	name: '',
	email: '',
	subject: '',
	message: '',
});
const errors = ref(false);
const success = ref(false);
const waiting = ref(false);
async function submit(form) {
	this.waiting = true;
	await $fetch('http://localhost:3000/api/contact', {
		method: 'POST',
		body: form,
	})
		.then(() => {
			this.errors = false;
			this.success = true;
			this.waiting = false;
			this.form = {
				name: '',
				email: '',
				subject: '',
				message: '',
			};
		})
		.catch(() => {
			this.errors = true;
			this.success = false;
			this.waiting = false;
		});
}
</script>