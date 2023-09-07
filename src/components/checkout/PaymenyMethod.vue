<script setup>
import Button from '../Button.vue'
import Text from '../Text.vue'
</script>




<template>

<div  class="checkout_container">
<div class="inputs_container">
    <v-select
            class="input"
 density="compact"
 base-color="#fff"
 label="ILS"
 :items="['ILS','USD','EUR']"
 variant="outlined"
 :flat = "true"
 bg-color="#fff"
 

></v-select>
            <v-select
            class="input"
 density="compact"
 base-color="#fff"
 label="ILS"
 :items="['ILS','USD','EUR']"
 variant="outlined"
 :flat = "true"
 bg-color="#fff"
 

></v-select>

</div>
<Button left = '50px' width = '300px' height = '60px' top = '45%' >procced</Button>

</div>
</template>


<style scoped lang="scss">
.checkout_container {
    height : 100vh;
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
.input {
    width : 30%;
    // flex : 1;
    height : 80px;
    margin : 1rem;
}
</style>