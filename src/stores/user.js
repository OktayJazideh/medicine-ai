import { defineStore } from 'pinia'
import { ref } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  // Listen to Firebase auth state
  onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser
  })

  return { user }
}) 