<template>
  <div
    class="fixed inset-0 bg-davys-grey bg-opacity-60 z-50"
    @click.self="$emit('close')"
  >
    <div class="fixed inset-2 h-max max-h-[calc(100%-16px)] max-w-[700px] overflow-y-scroll m-auto sm:inset-20 bg-white dark:bg-eerie-black p-8 sm:p-16 rounded-2xl">
      <button 
        class="w-10 h-10 absolute duration-200 hover:rotate-90 top-2 right-2 sm:top-6 sm:right-6"
        @click="$emit('close')"
      >
        <span class="w-full bg-eerie-black dark:bg-white h-1 block absolute top-1/2 -translate-y-1/2 rotate-45 rounded" />
        <span class="w-full bg-eerie-black dark:bg-white h-1 block absolute top-1/2 -translate-y-1/2 -rotate-45 rounded" />
      </button>
      <slot class="gap-4" />
    </div>
  </div>
</template>