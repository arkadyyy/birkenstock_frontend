<script setup>
import {useRoute} from 'vue-router'
import Header from '../components/Header.vue'
import Text from '../components/Text.vue'
import Button from '../components/Button.vue'
import Card from '../components/Shoe.vue'
import boston_demo from '../assets/images/boston_demo.png'

const dummyData = [
    {
        id : '123',
        price : '150$',
        text : 'warm brown',
        model : 'Boston',
        img : boston_demo ,
        color : 'brown'
    },
    {
        id : '123',
        price : '150$',
        text : 'warm brown',
        model : 'Boston',
        img : boston_demo ,
        color : 'brown'
    },
    {
        id : '123',
        price : '150$',
        text : 'warm brown',
        model : 'Boston',
        img : boston_demo ,
        color : 'brown'
    },


]

    const route = useRoute()

    const {shoe_id} = route.params

</script>


<template>
<div class="main_container">
    <div class="img_container">
        <Header >
            <Text fontWeight = 'bold' fontSize = '5em' text = "BOSTON GRIP"/>
        </Header>
        <div class="shoe_container">

        <img class="shoe_img" src="../assets/images/boston_demo.png"/>

        </div>
    </div>
    <div class="detail_container">
        <Text text = 'Color : '/>
        <v-select
        :style = "{width : '150px'}"
  density="compact"
  base-color="#fff"

  :items="[1,2,3]"
  variant="outlined"
  :flat = "true"
  bg-color="#fff"

></v-select>
        <Text text = 'Size : '/>
        <v-select
        :style = "{width : '150px'}"
  density="compact"
  base-color="#fff"

  :items="[1,2,3]"
  variant="outlined"
  :flat = "true"
  bg-color="#fff"

></v-select>
<v-divider :style = "{width : '90%'}">

</v-divider>
        <div class="price_container">
            <div>
                <Text fontSize = '2em' text = "Price "/>
                <Text fontSize = '0.6em' text = "not includes shipping cost "/>
                <Text top = '1.3rem' fontSize = '1.3em' text = "$140" fontWeight = 'bold'/>
            </div>
                
<div :style = "{position : 'relative',width : '100%',height : '50%',top : '120px'}">
    <Button top = '80px' left  = '222px' width = '300px' height = '60px'>
   buy now 
</Button>
<Button width = '300px'  left  = '222px' top = '5px' height = '60px'>
   add to cart
</Button>

</div>
        </div>



    </div>


</div>
<div class="also_like_container">
    <Header>
          <div :style = "{display : 'flex',alignItems : 'center'}">
            <Text fontWeight = 'bold' fontSize = '3em' text = "YOU MAY ALSO LIKE"/>
            <v-btn class="ml-5 mt-5" variant="plain">See all</v-btn>
          </div>

          <div class="also_like_card_container">
            <Card :displayHeart = "false" v-for="shoe in dummyData" :shoe = "shoe"/>
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
        flex : 2;
        
    }
    .detail_container {
        flex : 1.2;
        // background-color : red;
        padding-top: 5rem;
        position: relative;
    }
    .shoe_container {
        padding-left : 4rem;
        padding-right : 4rem;
        display: flex;
        align-items: center;
        // justify-content: center;
        // background-color: blue;
    }
    .also_like_container{
        height : 80vh;
 
    }

    .shoe_img {
        width : 50%;
        height : 49%;
        object-fit: contain;
        
    }

    .price_container {
        margin-top: 1rem;
        position: relative;
        display: flex;
        flex-direction: column;
        // background-color: red;
        height : 35%
    }

    .also_like_card_container {
        display: flex;
        // background-color: red;
        width: 100%;
    }
</style>