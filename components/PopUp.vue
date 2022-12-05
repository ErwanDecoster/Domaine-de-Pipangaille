<template>
  <div @click.self="$emit('close')" class="fixed inset-0 bg-davys-grey bg-opacity-60 z-50">
    <div class="fixed inset-2 h-max max-w-[500px] m-auto sm:inset-20 bg-white dark:bg-eerie-black p-16 rounded-2xl">
      <button @click="$emit('close')" class="w-10 h-10 absolute duration-200 hover:rotate-90 top-6 right-6">
        <span class="w-full bg-eerie-black dark:bg-white h-1 block absolute top-1/2 -translate-y-1/2 rotate-45 rounded"></span>
        <span class="w-full bg-eerie-black dark:bg-white h-1 block absolute top-1/2 -translate-y-1/2 -rotate-45 rounded"></span>
      </button>
      <slot class="gap-4"></slot>
    </div>
  </div>
</template>