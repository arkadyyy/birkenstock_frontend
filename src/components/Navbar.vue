<script lang="ts" setup>
import Text from './Text.vue'
import { useRouter } from 'vue-router';
const router = useRouter();

import { ref, onMounted, onBeforeUnmount, watch, computed, watchEffect } from 'vue';

// Define a reactive ref for scroll position
const scrollY = ref(0);
const displayLogo = ref(false)



const test = computed(() => router.currentRoute.value.path)

watch([test,scrollY],() => {
    console.log("i am here : ",test.value , displayLogo.value)
    if(test.value === '/' && scrollY.value > 300) {
        displayLogo.value = true
    }else{
        displayLogo.value = false
    }
    if(test.value !== '/') displayLogo.value = true
})


// Define the scroll event handler
const handleScroll = () => {
  scrollY.value = window.scrollY;

  // Perform actions based on the scroll position
  // Call functions or modify other refs/reactive variables based on scroll position
};

// Attach the scroll event listener on component mount
onMounted(() => {
    console.log('jaja')
  window.addEventListener('scroll', handleScroll);
  
});

// Remove the scroll event listener on component unmount
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleNavigation(route : string){
    router.push(route)
}
9
function handleLogoClick() {
    router.push('/')

}
</script>

<template>
<div class="navbar_container">
   
    <img @click="handleLogoClick" v-if="displayLogo" src="../assets/images/birkenstock_logo.png"/>
    <div v-else="displayLogo  "></div>
    <div class="btn_container">
        <div @click="handleNavigation('/vendors')" class="btn">
                
                <img src="../assets/images/pin.png"/>
                <Text text = 'Find vendor' />
        </div>
        <div @click="handleNavigation('/cart')" class="btn">
            <img src="../assets/images/cart.png"/>
            <Text text = 'Cart' />
           
        </div>
    </div>
  
</div>

</template>

<style lang="scss" scoped>
    .navbar_container{
        position: fixed;
        width : 100%;
        height : 80px;
        display: flex;
        align-items: center;
        justify-content:space-between;
        padding : 2rem;
        z-index: 999;
        // border-bottom: 1px solid $black;
        background-color: $white ;
    }
    .navbar_container img {
        width : 10vw;
        height: 10vh;
        object-fit: contain;
        cursor: pointer;
    }
    .btn{
        margin-left: 0.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btn img {
        margin : 0.2rem;
        width: 1.3em;
        height: 1.3em;
        
    }
    .btn_container {
        display: flex;
        align-items: center;
    }

 
</style>