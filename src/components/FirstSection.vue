<script setup>

import Header from './Header.vue'
import Text from './Text.vue'
import Circle from './Circle.vue'
import Button from './Button.vue'

function test(){
    alert('asd')
}
</script>


<template>

    <div class="first_section_container">
       
        <Header padding = "4rem">
            <Text fontWeight = 'bold' fontSize = '5em' text = "THE PERFECT FIT"/>
            <Text fontWeight = 'bold' fontSize = '5em'  text = "FOR EVERYDAY"/>
        </Header>

        <Circle size = "320px" top = '38%' left = "34%"/>
        <img src="../assets/images/first_section_img.png"/>

        <Text :style = "{position : 'absolute',top : '70%',padding : '5rem',width : '70%'}" fontWeight = '200' fontSize = '1.6em' text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "/>
    </div>
</template>

<style scoped lang="scss">
.first_section_container {
    min-height : 130vh;
    background-color: $white;
    padding-top: 8rem;
    position: relative;
}
.first_section_container img {
    width : 50vw;
    height: 40vh;
    object-fit: contain;
    position: absolute;
    left : -7%;
    top : 37%;
}
</style>