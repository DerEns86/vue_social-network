import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const BASE_URL = 'http://localhost:3000/'
  const currentUser = ref(null)

  async function fetchCurrentUser() {
    const response = await fetch(`${BASE_URL}me`)
    currentUser.value = await response.json()
  }

  async function fetchUserById(id: string) {
    const response = await fetch(`${BASE_URL}users/${id}`)
    return await response.json()
  }

  return { currentUser, fetchCurrentUser, fetchUserById }
})
