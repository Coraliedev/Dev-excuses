import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore('excuses', () => {
  let excuses = ref([])

  const getExcuses = async () => {
    await fetch('http://localhost:3000/api/excuse')
      .then((res) => res.json())
      .then((data) => {
        excuses.value = data
      })
  }

  const getRandomExcuse = () => {
    const randomExcuse = excuses.value[Math.floor(Math.random() * excuses.value.length)]
    return randomExcuse
  }

  return {
    excuses,
    getExcuses,
    getRandomExcuse
  }
})
