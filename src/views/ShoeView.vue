<script setup>
import {useRoute} from 'vue-router'
import Header from '../components/Header.vue'
import Text from '../components/Text.vue'
    const route = useRoute()

    const {shoe_id} = route.params

</script>


<template>
<div class="main_container">
    <div class="img_container">
        <Header padding = "4rem">
            <Text fontWeight = 'bold' fontSize = '5em' text = "BOSTON GRIP"/>
        </Header>
        <div class="shoe_container">
            <v-img
  :width="527"
  
  cover
  src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
></v-img>
        </div>
    </div>
    <div class="detail_container">

    </div>


</div>
<div class="also_like_container">
    <Header padding = "4rem">
          <div :style = "{display : 'flex',alignItems : 'center'}">
            <Text fontWeight = 'bold' fontSize = '3em' text = "YOU MAY ALSO LIKE"/>
            <v-btn class="ml-5 mt-5" variant="plain">See all</v-btn>
          </div>
        </Header>
</div>
</template>


<style lang="scss">
    .main_container{
        min-height : 100vh;
        position: relative;
        display: flex;
        // background-color: blue;
    }
    .img_container {
        flex : 2
    }
    .detail_container {
        flex : 1.2;
        background-color : red
    }
    .shoe_container {
        padding-left : 4rem;
        padding-right : 4rem;
    }
    .also_like_container{
        height : 80vh;
 
    }
</style>