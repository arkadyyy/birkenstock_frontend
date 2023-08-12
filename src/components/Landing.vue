<script lang="ts" setup>
import Text from './Text.vue';

</script>

<template>
<div class="container">
  
    <div class="top_section">
        <Text fontSize='1.2em' text = 'The jesus sandal we all want'/>
        <img src="../assets/images/birkenstock_logo.png"/>
    </div>
    <div class="bottom_section">
        <img src="../assets/images/landing_pair.png"/>
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
   
   
 
</style>