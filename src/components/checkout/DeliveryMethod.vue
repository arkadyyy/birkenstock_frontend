<script setup>
import { reactive, ref,watch } from 'vue'
import Button from '../Button.vue'
import Text from '../Text.vue'
import {useSnackbarStore} from '../../stores/snackbar'
import SelectInput from '../SelectInput.vue'

import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'


const deliveryMethod = ref('home delivery')
const address = ref('home delivery')
const city = ref('home delivery')
const houseNum = ref('home delivery')
const apartmentNum = ref('home delivery')
const form = ref()

const formValues = reactive({
    test : ''
})

////
const initialState = {
    name: '',
    email: '',
    select: null,
    checkbox: null,
  }

  const state = reactive({
    ...initialState,
  })

  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ]

  const rules = {
    name: { required },
    email: { required, email },
    select: { required },
    items: { required },
    checkbox: { required },
  }

  const v$ = useVuelidate(rules, state)

  function clear () {
    v$.value.$reset()

    for (const [key, value] of Object.entries(initialState)) {
      state[key] = value
    }
  }
  ////

// const INPUTS = [
// {label}

// ]


const store = useSnackbarStore()
const {displaySnackbar} = store

async function validate () {
    alert(this.$refs.form)
        const { valid } = await this.$refs.form.validate()
       
        if (valid) alert('Form is valid')
      }

function handleValChange(val){
        deliveryMethod.value = val
      }



 
</script>



<template>
   <div class="checkout_container">
    <v-sheet width="40%" height="80%" >
    <v-form @submit.prevent>
        <v-text-field
      v-model="state.name"
      :error-messages="v$.name.$errors.map(e => e.$message)"
      :counter="10"
      label="Name"
      required
      @input="v$.name.$touch"
      @blur="v$.name.$touch"
    ></v-text-field>

    <v-text-field
      v-model="state.email"
      :error-messages="v$.email.$errors.map(e => e.$message)"
      label="E-mail"
      required
      @input="v$.email.$touch"
      @blur="v$.email.$touch"
    ></v-text-field>

    <v-select
      v-model="state.select"
      :items="items"
      :error-messages="v$.select.$errors.map(e => e.$message)"
      label="Item"
      required
      @change="v$.select.$touch"
      @blur="v$.select.$touch"
    ></v-select>

    <v-checkbox
      v-model="state.checkbox"
      :error-messages="v$.checkbox.$errors.map(e => e.$message)"
      label="Do you agree?"
      required
      @change="v$.checkbox.$touch"
      @blur="v$.checkbox.$touch"
    ></v-checkbox>

      <!-- <v-btn type="submit" block class="mt-2">Submit</v-btn> -->
    </v-form>
  </v-sheet>
  <Button :handler = "v$.$validate" top = '88%' left = '82%' height = '60px' width = '250px'>procced</Button>
   </div>
</template>


<style scoped lang="scss">
.checkout_container {
    // height : 100vh;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding : 2rem;

}

.inputs_container {
    height : 30%;
    width : 100%;
    display: flex;
    flex-wrap: wrap;
}
.input_container {
    display: flex;
    flex-direction: column;
    align-items: start;
    // background-color: red;
    width : 27%;
    margin-right: 1rem;
    
}
.input {
    width : 100%;
    // flex : 1;
    height : 80px;
    margin-top : 1rem;
}
</style>