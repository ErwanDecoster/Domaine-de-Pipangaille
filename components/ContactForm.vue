<script setup>
import { onMounted, ref, watch } from 'vue'

const errors = ref([])
const success = ref(false)
const waiting = ref(false)
const sendDate = ref('')
const form = ref({
  name: '',
  email: '',
  phone: '',
  object: '',
  message: '',
})

watch(() => form.value.name, (newName) => {
  localStorage.name = newName
})

watch(() => form.value.email, (newEmail) => {
  localStorage.email = newEmail
})

watch(() => form.value.phone, (newPhone) => {
  localStorage.phone = newPhone
})

watch(() => form.value.object, (newObject) => {
  localStorage.object = newObject
})

watch(() => form.value.message, (newMessage) => {
  localStorage.message = newMessage
})

onMounted(() => {
  if (localStorage.name) {
    form.value.name = localStorage.name
  }
  if (localStorage.email) {
    form.value.email = localStorage.email
  }
  if (localStorage.phone) {
    form.value.phone = localStorage.phone
  }
  if (localStorage.object) {
    form.value.object = localStorage.object
  }
  if (localStorage.message) {
    form.value.message = localStorage.message
  }
  if (localStorage.sendDate) {
    sendDate.value = localStorage.sendDate
  }
})

function VerifySendState(data) {
  waiting.value = false
  if (data === 'send') {
    success.value = true
    form.value = {
      name: '',
      email: '',
      phone: '',
      object: '',
      message: '',
    }
    localStorage.name = ''
    localStorage.email = ''
    localStorage.phone = ''
    localStorage.object = ''
    localStorage.message = ''
    sendDate.value = Date.parse(new Date())
    localStorage.sendDate = sendDate.value
    document.getElementById('contact-form').scrollIntoView()
  }
  else {
    errors.value.push('Une erreur est survenue.')
    document.getElementById('contact-form').scrollIntoView()
  }
}

function ValidEmail(email) {
  const re = /^[\w.%+-]+@[\w.-]+\.[A-Z]{2,}$/i
  return re.test(email)
}

function CheckForm() {
  if (form.value.name && form.value.email && ValidEmail(form.value.email) && form.value.object && form.value.message && form.value.message.length > 10 && !success.value) {
    errors.value = []
    return true
  }
  errors.value = []
  if (success.value) {
    errors.value.push('Message déjà envoyé.')
  }
  if (!form.value.name) {
    errors.value.push('Le champ nom est requis.')
  }
  if (!form.value.email) {
    errors.value.push('Le champ email est requis.')
  }
  else if (!ValidEmail(form.value.email)) {
    errors.value.push('Email invalide.')
  }
  if (!form.value.object) {
    errors.value.push('Le champ objet est requis.')
  }
  if (!form.value.message) {
    errors.value.push('Le champ message est requis.')
  }
  else if (form.value.message.length <= 10) {
    errors.value.push('Le message est trop court.')
  }
  document.getElementById('contact-form').scrollIntoView()
  return false
}

function CheckSendDate() {
  if (Date.parse(new Date()) - sendDate.value < 200000) {
    errors.value.push('Message déjà envoyé.')
    document.getElementById('contact-form').scrollIntoView()
    return false
  }
  return true
}

function DisplayError() {
  waiting.value = false
  errors.value = []
  errors.value.push('Problème de connexion.')
  document.getElementById('contact-form').scrollIntoView()
}

async function SendMessage() {
  const config = useRuntimeConfig()
  if (waiting.value) {
    errors.value.push('Envoi en cours...')
  }
  else {
    if (CheckForm() && CheckSendDate() && !waiting.value) {
      errors.value = []
      waiting.value = true
      const url = `${config.public.API_URL}/contact`
      try {
        const response = await $fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          credentials: 'same-origin',
          body: form.value,
        })
        VerifySendState(response)
      }
      catch (error) {
        console.error(error)
        DisplayError()
      }
    }
  }
}
</script>

<template>
  <section class="bg-almond dark:bg-dark-almond p-2 py-8 sm:p-16 rounedd-t-lg grid gap-4">
    <div class="flex gap-4 p-4 max-w-screen-xl mx-auto rounded bg-white dark:bg-eerie-black text-eerie-black dark:text-white items-center">
      <Icon class="min-w-6" name="fe:info" />
      <p>{{ $t('contact.contactForm.usageInfo') }}</p>
    </div>
    <div class="max-w-screen-xl w-full mx-auto p-8 bg-white dark:bg-eerie-black rounded grid gap-8">
      <h2 class="text-4xl">
        {{ $t('contact.contactUs') }}
      </h2>
      <div class="grid lg:flex gap-x-16 gap-y-8">
        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          <div class="grid gap-2">
            <div class="flex gap-2 items-center">
              <img
                width="28"
                height="28"
                src="/images/icon_telephone.svg"
                alt="Icone Téléphone"
                class="size-7 dark:invert"
              >
              <div>
                <p class="font-semibold ml-2">
                  {{ $t('contact.contactForm.phone') }} :
                </p>
                <a
                  href="tel:+33475682824"
                  class="pl-2 underline decoration-2 underline-offset-2 decoration-almond dark:decoration-dark-almond text-md block"
                >
                  +33 4 75 68 28 24
                </a>
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <img
                width="28"
                height="28"
                src="/images/icon_telephone.svg"
                alt="Icone Téléphone"
                class="size-7 dark:invert"
              >
              <div>
                <p class="font-semibold ml-2">
                  {{ $t('contact.contactForm.whatsapp') }} :
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=33475682824"
                  target="_blank"
                  class="pl-2 underline decoration-2 underline-offset-2 decoration-almond dark:decoration-dark-almond text-md block"
                >
                  +33 4 75 68 28 24
                </a>
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <img
                width="28"
                height="28"
                src="/images/icon_email.svg"
                alt="Icone Email"
                class="size-7 dark:invert"
              >
              <div>
                <p class="font-semibold ml-2">
                  {{ $t('contact.contactForm.email') }} :
                </p>
                <a
                  :href="`mailto:contact@domaine-de-pipangaille.fr?&body=${$t('contact.contactForm.emailBody')}`"
                  target="_blank"
                  class="pl-2 underline decoration-2 underline-offset-2 decoration-almond dark:decoration-dark-almond text-md block"
                >
                  contact@domaine-de-pipangaille.fr
                </a>
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <img
                width="28"
                height="28"
                src="/images/icon_localisation.svg"
                alt="Icone localisation"
                class="size-7 dark:invert"
              >
              <div>
                <p class="font-semibold ml-2">
                  {{ $t('contact.contactForm.address') }} :
                </p>
                <a
                  href="https://www.google.fr/maps/dir//domaine+de+pipangaille/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f53e41af912869:0xe0c49553166e1500?sa=X&ved=2ahUKEwj59IKk0474AhUa_4UKHTamDM0Q9Rd6BAhbEAQ"
                  target="_blank"
                  class="pl-2 underline decoration-2 underline-offset-2 decoration-almond dark:decoration-dark-almond text-md block"
                >
                  1 Quartier Les Marettes, 26140, Andancette
                </a>
              </div>
            </div>
          </div>
          <iframe
            :title="$t('contact.contactForm.mapsTitle')"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.7609287776054!2d4.8084116158016466!3d45.25262695555646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f53e41af912869%3A0xe0c49553166e1500!2sChambre%20d'h%C3%B4tes%20Pipangaille!5e0!3m2!1sfr!2sfr!4v1654167736071"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full rounded dark:hue-rotate-180 dark:invert-[0.8] dark:contrast-125"
          />
        </div>
        <span class="lg:hidden mx-auto h-1 bg-almond dark:bg-dark-almond w-full rounded" />
        <form
          id="contact-form"
          class="flex flex-col sm:grid sm:grid-cols-2 gap-y-2 gap-x-8 lg:col-span-2 grow relative scroll-m-20"
          @submit.prevent="SendMessage"
        >
          <div
            v-if="(errors.length || success)"
            class="sm:col-span-2"
          >
            <div
              v-if="success"
              class="bg-ufo-green px-2 py-1 rounded-lg"
              @click="success = false"
            >
              {{ $t('contact.contactForm.succes') }}
            </div>
            <div class="grid gap-1">
              <div
                v-for="error in errors"
                :key="error"
                class="bg-copper-penny px-2 py-1 rounded-lg"
                @click="errors.splice(errors.indexOf(error), 1)"
              >
                {{ error }}
              </div>
            </div>
          </div>
          <div class="grid">
            <label
              for="name"
              class="font-semibold"
            >
              {{ $t('contact.contactForm.name') }} :
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              name="name"
              autocomplete="name"
              class="rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black"
            >
          </div>
          <div class="grid">
            <label
              for="email"
              class="font-semibold"
            >
              {{ $t('contact.contactForm.email') }} :
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              name="email"
              autocomplete="email"
              class="rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black"
            >
          </div>
          <div class="grid">
            <label
              for="tel"
              class="font-semibold relative"
            >
              {{ $t('contact.contactForm.phone') }} :
              <span class="text-xs absolute pl-1 -top-1">
                {{ $t('contact.contactForm.optional') }}
              </span>
            </label>
            <input
              id="tel"
              v-model="form.phone"
              type="tel"
              name="tel"
              autocomplete="tel"
              class="rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black"
            >
          </div>
          <div class="grid">
            <label
              for="object"
              class="font-semibold"
            >
              {{ $t('contact.contactForm.object') }} :
            </label>
            <input
              id="object"
              v-model="form.object"
              type="text"
              name="object"
              autocomplete="off"
              class="rounded-lg px-2 py-1 border outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black"
            >
          </div>
          <div class="grid sm:col-span-2">
            <label
              for="message"
              class="font-semibold"
            >
              {{ $t('contact.contactForm.message') }} :
            </label>
            <textarea
              id="message"
              v-model="form.message"
              name="message"
              autocomplete="off"
              class="rounded-lg px-2 py-1 border h-32 min-h-[8em] outline-eerie-black dark:outline-white focus:outline-4 outline-offset-4 dark:bg-eerie-black"
            />
          </div>
          <button
            id="submit"
            type="submit"
            class="col-span-2 ml-auto cursor-pointer md:w-max btn-secondary"
          >
            <template v-if="(!waiting && !success)">
              {{ $t('contact.contactForm.send') }}
            </template>
            <template v-if="(waiting && !success)">
              {{ $t('contact.contactForm.sendingInProgress') }}
            </template>
            <template v-if="success">
              {{ $t('contact.contactForm.sent') }}
            </template>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
