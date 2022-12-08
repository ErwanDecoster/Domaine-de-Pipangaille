
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
        <form @submit.prevent="SendMessage()" class="flex flex-col sm:grid sm:grid-cols-2 gap-y-2 gap-x-8 lg:col-span-2 grow relative">
          <!-- <div class="absolute -inset-2 bg-eerie-black bg-opacity-50 z-10 rounded-lg">
            <p class="m-auto w-max h-max absolute inset-0 bg-white bg-opacity-70 p-2 rounded">En cours de construction</p>
          </div> -->
          <div v-if="(errors || success)" class="sm:col-span-2">
            <div v-if="success" @click="(success = false)" class="bg-ufo-green px-2 py-1 rounded-lg">Message envoyé avec succès</div>
            <div class="grid gap-1">
              <div v-for="error in errors" :key="error" @click="errors.splice(errors.indexOf(error), 1)" class="bg-copper-penny px-2 py-1 rounded-lg">{{ error }}</div>
            </div>
          </div>
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
            <input v-model="form.object" required type="text" name="objet" id="objet" autocomplete="off" class="rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black">
          </div>
          <div class="grid sm:col-span-2">
            <label for="message" class="font-semibold">Message :</label>
            <textarea v-model="form.message" required name="message" id="message" autocomplete="off" class="rounded-lg px-2 py-1 border h-32 min-h-[8em] outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black"></textarea>
          </div>
          <button type="submit" class="col-span-2 ml-auto cursor-pointer md:w-max p-2 px-4 rounded-lg bg-almond dark:bg-dark-almond text-md w-full text-center duration-100 border border-almond dark:border-dark-almond hover:bg-white dark:hover:bg-eerie-black hover:border-eerie-black dark:hover:border-white hover:rounded-md">
            <template v-if="(!waiting && !success)">Envoyer</template>
            <template v-if="(waiting && !success)">Envoye en cours</template>
            <template v-if="success">Message envoyé 🚀</template>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      success: false,
      waiting: false,
      form: {
        name: 'nom',
        email: 'email@email.email',
        phone: '',
        object: 'test data',
        message: 'message for test data',
      }
    }
  },
  methods: {
    VerifSendState(data) {
      this.waiting = false;
      if (data == 'send') {
        this.waiting = false;
        this.success = true;
        this.form = {
          name: '',
          email: '',
          phone: '',
          object: '',
          message: '',
        }
      }
      else {
        this.errors.push('Une erreur est suvenu durant l\'envoi');
      }
    },
    ValidEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    CheckForm() {
      if (this.form.name && this.form.email && this.ValidEmail(this.form.email) && this.form.object && this.form.message && !(this.form.message.length <= 10) && !this.messageSend) {
        this.errors = [];
        return true;
      }
      this.errors = [];
      if (this.success) {
        this.errors.push('Le message a déjà été envoyé attendais quelques secondes.');
      }
      if (!this.form.name) {
        this.errors.push('Le champ Nom est requis.');
      }
      if (!this.form.email) {
        this.errors.push('Le champ Email est requis.');
      } else if (!this.ValidEmail(this.form.email)) {
        this.errors.push('Une adresse email valide est requise.');
      }
      if (!this.form.object) {
        this.errors.push('Le champ Objet est requis.');
      }
      if (!this.form.message) {
        this.errors.push('Le champ Message est requis.');
      } else if (this.form.message.length <= 10) {
        this.errors.push('Le champ Message doit contenir aux moins 10 caractères.');
      }
      return false;
    },
    ShowError(data) {
      this.waiting = false;
      this.errors = [];
      this.errors.push('Une erreur est survenue vérifier votre connexion ainsi que les champs remplis ou réessayés plus tard.');
    },
    SendMessage() {
      if (this.waiting){
        this.errors.push('Un message est déjà en cours d\'envoi.');
      } else {
        if (this.CheckForm() && this.waiting == false){
          this.errors = [];
          this.waiting = true;
          const url = 'http://domaine-de-pipangaille.fr/api/contact'
          // const url = 'http://localhost:3000/api/contact'
          const response = $fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
            },
            credentials: 'same-origin',
            body: this.form,
          }).then(
            response => this.VerifSendState(response),
          ).catch(
            response => this.ShowError(response),
          )
        }
      }
    }
  },

}
</script>

<!-- <script setup>
const form = ref({
	name: '',
	email: '',
	phone: '',
	object: '',
	message: '',
});
let errors = ref(false);
let success = ref(false);
let waiting = ref(false);

async function postData(url, form) {
	const response = await $fetch(url, {
		method: 'POST',
		body: form,
	}).then((dataReturn) => {
    // const dataReturn = response.json(form);
    if (dataReturn == 'send') {
      console.log('succes');
      waiting = false;
      success = true;
    }
    else {
      console.log('erro');
      waiting = false;
      errors = true;
    }
    console.log(dataReturn);
  })
}

function submit(form){
  waiting = true;
  postData('http://localhost:3000/api/contact', form)
}


function verif(message)
{
  console.log(message);
  Verif(message);
    errors = false;
    success = true;
    waiting = false;
		form = {
			name: '',
			email: '',
			phone: '',
			object: '',
			message: '',
		};
}
</script> -->