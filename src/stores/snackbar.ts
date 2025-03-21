import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', () => {
  const isDisplayed = ref(false)

  const displaySnackbar = () => {
    isDisplayed.value = true
    setTimeout(() => {
            isDisplayed.value = false
    }, 2000);
  }
  const closeSnackbar = () => {
    isDisplayed.value = false
  }


  return {isDisplayed,displaySnackbar,closeSnackbar}
})
