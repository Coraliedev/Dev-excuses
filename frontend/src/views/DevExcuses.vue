<script setup>
import { ref } from 'vue'

const messageExcuse = ref('')
const newMessage = (updateMessage) => {
  return (messageExcuse.value = updateMessage)
}
</script>

<template>
  <div class="h-screen w-screen bg-gray-50 flex flex-col justify-items-center">
    <h1 class="text-7xl text-green-500 font-dark font-extrabold mb-8 text-center">Dev excuses</h1>
    <div class="m-auto mt-10">
      <p class="text-2xl md:text-3xl font-light leading-normal mb-8 text-center">
        {{ messageExcuse }}
      </p>
    </div>
  </div>
</template>
