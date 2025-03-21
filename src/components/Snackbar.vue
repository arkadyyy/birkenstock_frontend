<script setup>
import {useSnackbarStore} from '../stores/snackbar'
import { storeToRefs } from 'pinia'
const store = useSnackbarStore()
const {isDisplayed} = storeToRefs(store)
const {displaySnackbar,closeSnackbar} = store
</script>


<template>
   <v-snackbar
      :bottom="0"   
      :right="0"    
      origin="overlap"
      z-index="999"
      timeout="2000"
      v-model="isDisplayed"
        :absolute="true"
  
    >
    Please fill all inputs

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="closeSnackbar"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

</template>