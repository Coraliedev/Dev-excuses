<script setup>
import { ref } from 'vue'
import RandomButtonVue from '../components/RandomButton.vue'

const messageExcuse = ref('')
const newMessage = (updateMessage) => {
  return (messageExcuse.value = updateMessage)
}
</script>

<template>
  <div class="h-screen w-screen bg-gray-50 flex flex-col justify-items-center">
    <h1
      class="text-5xl md:text-7xl text-green-500 font-dark font-extrabold mb-4 md:mb-8 text-center"
    >
      Dev excuses
    </h1>
    <div class="m-auto mt-5 md:mt-30 w-screen flex flex-col">
      <p class="text-xl md:text-3xl font-light leading-normal mb-4 md:mb-8 m-auto h-10">
        {{ messageExcuse }}
      </p>
      <RandomButtonVue :messageExcuse="messageExcuse" @randomMessage="newMessage" />
    </div>
  </div>
</template>
