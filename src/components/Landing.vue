<script lang="ts" setup>
import Text from './Text.vue';

const models = [
    'Arizona',
    'Boston',
    'Madrid',
    'Bend',
    'Gizen',
    'Super-Birki'
]

</script>

<template>
<div class="container">
  
    <div class="top_section">
        <Text fontSize='1.2em' text = 'The jesus sandal we all want'/>
        <img src="../assets/images/birkenstock_logo.png"/>
    </div>
    <div class="bottom_section">
        <img src="../assets/images/landing_pair.png"/>
        <Text color = "#fff"  fontSize = '0.9em' text = 'Popular two-strap sandal: The Arizona cult sandal has been popular for decades with its timeless design and is always a stylish choice.'/>
        <div class="models_container">
               <Text color = "#fff"  v-for="model in models" :text = "model"/>
               <Text position = "absolute" left = "-5%" top = "-180%" fontSize = "1.4em" fontWeight = "Bold" color = "#fff" transform = "rotate(-90deg)"  text = "Models"/>
        </div>
    </div>
   
</div>
</template>

<style lang="scss" scoped>
   .container {
    background-color:$white ;
    min-height: 100vh;
   }
   .top_section {
    background-color: $white;
    height: 50vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
   .bottom_section {
    background-color: $blue;
    height : 47vh;
    // position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
   }

   .top_section 
   .top_section img {
    width : 35em;
    height: 10em;
    object-fit: contain;

   }
   .bottom_section img {
    position: absolute;
    top : 5em;
    left : 26%;
    width: 40em;
    height: 40em;
    object-fit: contain;
   }

   .models_container {
    position: relative;
    display: flex;
    margin : 2rem;
    justify-content: space-around;
    width : 80%;
   }
   
   
 
</style>