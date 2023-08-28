<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Text from '../components/Text.vue'
import FilterShoes from '../components/FilterShoes.vue'
import Shoe from  '../components/Shoe.vue'
import boston_demo from '../assets/images/boston_demo.png'
const arr  =[1,2,3,4,5,6,7,7,7,7,7]


const dummyData = [
    {
        price : '150$',
        text : 'warm brown',
        model : 'Boston',
        img : boston_demo ,
        color : 'brown'
    },
    {
        price : '150$',
        text : 'warm brown',
        model : 'Boston',
        img : boston_demo ,
        color : 'brown'
    },
    {
        price : '150$',
        text : 'warm brown',
        model : 'Boston',
        img : boston_demo ,
        color : 'brown'
    },
    {
        price : '150$',
        text : 'warm brown',
        model : 'Boston',
        img : boston_demo ,
        color : 'brown'
    },
    {
        price : '150$',
        text : 'warm brown',
        model : 'Boston',
        img : boston_demo,
        color : 'brown'
    },
    {
        price : '150$',
        text : 'warm brown',
        model : 'Boston',
        img : boston_demo 
        ,
        color : 'brown'
    },
    {
        price : '150$',
        text : 'warm brown',
        model : 'Boston',
        img : boston_demo ,
        color : 'brown'
    },
]
</script>

<template>
    <div class="shoes_container">
        <Header>
            <Text  fontWeight = 'bold' fontSize = '5em' text = "FIND YOUR PAIR"/>
            <FilterShoes/>
            <div class="shoes">
                    <Shoe v-for="shoe in dummyData" :shoe = "shoe"/>
            </div>
        </Header>
    </div>
    <Footer/>
</template>


<style scoped>
    .shoes_container {
      min-height: 180vh;
      margin-bottom: 10rem;
    }
    .shoes {
        display: flex;
        flex-wrap: wrap;
        /* background-color: green; */
        width: 100%;
        position: relative;
        top: 80px;
        justify-content: start;
        align-items: center;
    }
</style>