
<template>
  <section class="bg-almond p-2 py-8 sm:p-16 rounedd-t-lg">
    <div class="max-w-screen-lg mx-auto p-8 bg-white rounded grid gap-8">
      <h2 class="text-4xl">Nous contactez</h2>
      <div class="grid lg:flex gap-x-16 gap-y-8">
        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          <div class="grid gap-2">
            <div class="flex">
              <img src="@/assets/images/icon_phone.svg" alt="" class="h-10">
              <div>
                <p class="font-semibold ml-2">Tel :</p>
                <a href="tel:+334 75 68 28 24" class="pl-2 underline decoration-2 underline-offset-2 decoration-almond text-md block">04 75 68 28 24</a>
              </div>
            </div>
            <div class="flex">
              <img src="@/assets/images/icon_email.svg" alt="" class="h-10">
              <div>
                <p class="font-semibold ml-2">Email :</p>
                <a href="mailto:contact@domaine-de-pipangaille.fr" target="_blank" class="pl-2 underline decoration-2 underline-offset-2 decoration-almond text-md block">contact@domaine-de-pipangaille.fr</a>
              </div>
            </div>
            <div class="flex">
              <img src="@/assets/images/icon_address.svg" alt="" class="h-10 p-1">
              <div>
                <p class="font-semibold ml-2">Addresse :</p>
                <a href="https://www.google.fr/maps/dir//domaine+de+pipangaille/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f53e41af912869:0xe0c49553166e1500?sa=X&ved=2ahUKEwj59IKk0474AhUa_4UKHTamDM0Q9Rd6BAhbEAQ" target="_blank" class="pl-2 underline decoration-2 underline-offset-2 decoration-almond text-md block">1 Quartier Les Marettes 26140 Andancette</a>
              </div>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.7609287776054!2d4.8084116158016466!3d45.25262695555646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f53e41af912869%3A0xe0c49553166e1500!2sChambre%20d&#39;h%C3%B4tes%20Pipangaille!5e0!3m2!1sfr!2sfr!4v1654167736071!5m2!1sfr!2sfr" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full rounded "></iframe>
        </div>
        <span class="lg:hidden mx-auto h-1 bg-almond w-full rounded"></span>
        <div class="flex flex-col sm:grid sm:grid-cols-2 gap-y-2 gap-x-8 lg:col-span-2 grow">
          <div class="grid">
            <label for="name" class="font-semibold">Nom :</label>
            <input type="text" name="name" id="name" autocomplete="name" class="rounded-lg px-2 py-1 border">
          </div>
          <div class="grid">
            <label for="email" class="font-semibold">Email :</label>
            <input type="email" name="email" id="email" autocomplete="email" class="rounded-lg px-2 py-1 border">
          </div>
          <div class="grid">
            <label for="tel" class="font-semibold relative">Telephone : <span class="text-xs absolute pl-1 -top-1">optionnel</span> </label>
            <input type="tel" name="tel" id="tel" autocomplete="tel" class="rounded-lg px-2 py-1 border">
          </div>
          <div class="grid">
            <label for="objet" class="font-semibold">Objet :</label>
            <input type="text" name="objet" id="objet" autocomplete="off" class="rounded-lg px-2 py-1 border">
          </div>
          <div class="grid sm:col-span-2">
            <label for="message" class="font-semibold">Message :</label>
            <textarea name="message" id="message" autocomplete="off" class="rounded-lg px-2 py-1 border h-32 min-h-[8em]"></textarea>
          </div>
          <input type="submit" value="Envoyer" class="ml-auto p-2 px-4 flex items-center bg-almond rounded-lg text-md col-span-2" />
        </div>
      </div>
    </div>
  </section>
</template>