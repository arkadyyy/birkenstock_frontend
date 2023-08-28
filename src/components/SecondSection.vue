<script setup>
import Header from './Header.vue'
import Text from './Text.vue'
import Circle from './Circle.vue'
import Button from './Button.vue'
</script>


<template>

<div class="first_section_container">
       
       <Header padding = "4rem">
           <Text fontWeight = 'bold' fontSize = '5em' text = "THE PERFECT FIT"/>
           <Text left = '150px' fontWeight = 'bold' fontSize = '5em'  text = "FOR EVERYDAY"/>
       </Header>

       <Circle size = "320px" top = '58%' left = "4%"/>
       <img src="../assets/images/second_section_img.png"/>

     <div>
        <Text :style = "{position : 'absolute',top : '35%',left : '25%',padding : '5rem',width : '35%'}" fontWeight = '200' fontSize = '1.6em' text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "/>
            <Button width = "150px">see all models</Button>
     </div>
   </div>
</template>

<style scoped lang="scss">
.first_section_container {
    min-height : 150vh;
    background-color: $white;
    padding-top: 8rem;
    position: relative;
}
.first_section_container img {
    width : 50vw;
    height: 80vh;
    object-fit: contain;
    position: absolute;
    left : -10%;
    top : 25%;
}
</style>