<script>
export default {
  data() {
    return {
      local: useI18n().locale,
      errors: [],
      success: false,
      waiting: false,
      sendDate: '',
      form: {
        name: '',
        email: '',
        phone: '',
        object: '',
        message: '',
      },
    }
  },
  watch: {
    'form.name': function (newName) {
      localStorage.name = newName
    },
    'form.email': function (newEmail) {
      localStorage.email = newEmail
    },
    'form.phone': function (newPhone) {
      localStorage.phone = newPhone
    },
    'form.object': function (newObject) {
      localStorage.object = newObject
    },
    'form.message': function (newMessage) {
      localStorage.message = newMessage
    },
  },
  mounted() {
    if (localStorage.name) {
      this.form.name = localStorage.name
    }
    if (localStorage.email) {
      this.form.email = localStorage.email
    }
    if (localStorage.phone) {
      this.form.phone = localStorage.phone
    }
    if (localStorage.object) {
      this.form.object = localStorage.object
    }
    if (localStorage.message) {
      this.form.message = localStorage.message
    }
    if (localStorage.sendDate) {
      this.sendDate = localStorage.sendDate
    }
  },
  methods: {
    VerifSendState(data) {
      this.waiting = false
      if (data === 'send') {
        this.waiting = false
        this.success = true
        this.form = {
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
        this.sendDate = Date.parse(new Date())
        localStorage.sendDate = this.sendDate
        document.getElementById('contact-form').scrollIntoView()
      }
      else {
        this.errors.push(this.$t('contact.contactForm.errors.errorOcured'))
        document.getElementById('contact-form').scrollIntoView()
      }
    },
    ValidEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i
      return re.test(email)
    },
    CheckForm() {
      if (this.form.name && this.form.email && this.ValidEmail(this.form.email) && this.form.object && this.form.message && !(this.form.message.length <= 10) && !this.messageSend) {
        this.errors = []
        return true
      }
      this.errors = []
      if (this.success) {
        this.errors.push(this.$t('contact.contactForm.errors.alreadySend'))
      }
      if (!this.form.name) {
        this.errors.push(this.$t('contact.contactForm.errors.nameFieldRequired'))
      }
      if (!this.form.email) {
        this.errors.push(this.$t('contact.contactForm.errors.emailFieldRequired'))
      }
      else if (!this.ValidEmail(this.form.email)) {
        this.errors.push(this.$t('contact.contactForm.errors.emailInvalid'))
      }
      if (!this.form.object) {
        this.errors.push(this.$t('contact.contactForm.errors.objectFieldRequired'))
      }
      if (!this.form.message) {
        this.errors.push(this.$t('contact.contactForm.errors.messageFieldRequired'))
      }
      else if (this.form.message.length <= 10) {
        this.errors.push(this.$t('contact.contactForm.errors.messageFieldTtooShort'))
      }
      document.getElementById('contact-form').scrollIntoView()
      return false
    },
    CheckSendDate() {
      if (Date.parse(new Date()) - this.sendDate < 200000) {
        this.errors.push(this.$t('contact.contactForm.errors.alreadySend'))
        document.getElementById('contact-form').scrollIntoView()
        return false
      }
      else {
        return true
      }
    },
    ShowError() {
      this.waiting = false
      this.errors = []
      this.errors.push(this.$t('contact.contactForm.errors.badConnection'))
      document.getElementById('contact-form').scrollIntoView()
    },
    SendMessage() {
      if (this.waiting) {
        this.errors.push(this.$t('contact.contactForm.errors.messageSending'))
      }
      else {
        if (this.CheckForm() && this.CheckSendDate() && this.waiting === false) {
          this.errors = []
          this.waiting = true
          const url = 'https://domaine-de-pipangaille.fr/api/contact'
          // const url = 'http://localhost:3000/api/contact'
          $fetch(url, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
            },
            credentials: 'same-origin',
            body: this.form,
          }).then(
            response => this.VerifSendState(response),
          ).catch(
            response => new this.ShowError(response),
          )
        }
      }
    },
  },
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
          <!-- :src="`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.7609287776054!2d4.8084116158016466!3d45.25262695555646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f53e41af912869%3A0xe0c49553166e1500!2sChambre%20d&#39;h%C3%B4tes%20Pipangaille!5e0!3m2!1sfr!2sfr!4v1654167736071!5m2!1s${local}!2s${local}`" -->
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
          class="flex flex-col sm:grid sm:grid-cols-2 gap-y-2 gap-x-8 lg:col-span-2 grow relative scroll-m-4"
          @submit.prevent="SendMessage()"
        >
          <div
            v-if="(errors || success)"
            class="sm:col-span-2"
          >
            <div
              v-if="success"
              class="bg-ufo-green px-2 py-1 rounded-lg"
              @click="(success = false)"
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
