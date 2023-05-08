<script setup>
import useExcusesStore from '../stores/excuses.store'
import { computed } from 'vue'

const props = defineProps({
  messageExcuse: String
})

const excusesStore = useExcusesStore()

const emit = defineEmits(['random-message'])

computed({
  get: () => props.messageExcuse,
  set: (value) => emit('random-message', value)
})

const NewRamdomExcuse = () => {
  let newRandomMessage = excusesStore.getRandomExcuse().message
  if (props.messageExcuse === newRandomMessage) {
    NewRamdomExcuse()
  } else {
    emit('random-message', newRandomMessage)
  }
}
</script>

<template>
  <button
    type="button"
    @click.prevent="NewRamdomExcuse"
    class="px-5 m-auto w-1/2 max-w-xs inline py-3 text-l md:text-xl leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-green-500 hover:bg-green-500"
  >
    <span>Random excuse</span>
  </button>
</template>
