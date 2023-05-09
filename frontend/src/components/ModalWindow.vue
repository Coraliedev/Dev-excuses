<script setup>
import useModalStore from '../stores/modal.store'

const modalStore = useModalStore()

const submit = (e) => {
  e.preventDefault()
  modalStore.toggleModal()
}
</script>

<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 flex justify-center align-center">
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-75"></div>

    <div class="modale fixed rounded">
      <div class="px-6 py-6 lg:px-8">
        <h3 class="mb-4 text-xl font-medium text-gray-900">Add an excuse</h3>
        <form class="space-y-6" @submit="submit">
          <div>
            <label for="excuse" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Excuse</label
            >
            <input
              type="texte"
              name="excuse"
              id="excuse"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="excuse message"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-600 active:bg-green-500 hover:bg-green-500"
          >
            Create excuse
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modale {
  background: rgb(249 250 251);
  color: #333;
  padding: 50px;
  top: 30%;
}
</style>
