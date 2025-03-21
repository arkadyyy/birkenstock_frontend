<script setup>
import Header from '../components/Header.vue'
import Text from '../components/Text.vue'
import Button from '../components/Button.vue'
import {useRoute} from 'vue-router'

import DeliveryMethod from '../components/checkout/DeliveryMethod.vue'
import PaymenyMethod from '../components/checkout/PaymenyMethod.vue'
import { computed, ref } from 'vue'


const route = useRoute()

const {step} = route.params
const stepRef = ref(step)

const currentStep = computed(() => {
    if(stepRef.value === 'delivery') return '1/2 - DELIVERY METHOD'
    if(stepRef.value === 'payment') return '2/2 - PAYMENT METHOD'
})
</script>


<template>

    
    <Header>
        <Text fontWeight = 'bold' fontSize = '5em' text = "CHECKOUT"/>
        <Text fontSize = '1.4em' fontWeight = 'bold' :text = "currentStep"/>
    </Header>
    <DeliveryMethod v-if="step === 'delivery'"/>
    <PaymenyMethod v-if="step === 'payment'"/>
  

    

    
</template>



<style lang="scss" scoped>

.checkout_container {
    min-height : 50vh;
    // background-color: red;
    // position: relative;
    // display: flex;
    // flex-wrap: wrap;
    // padding : 2rem;
}

.inputs_container {
    height : 30%;
    width : 100%;
    display: flex;
    flex-wrap: wrap;
}
.input {
    width : 30%;
    // flex : 1;
    height : 80px;
    margin : 1rem;
}


</style>