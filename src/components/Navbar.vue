<script lang="ts" setup>
import Text from './Text.vue'
import { useRouter } from 'vue-router';
const router = useRouter();


function handleNavigation(route : string){
    router.push(route)
}
</script>

<template>
<div class="container">
  
   
       
        <div @click="handleNavigation('/vendors')" class="btn">
                
                <img src="../assets/images/pin.png"/>
                <Text text = 'Find vendor' />
        </div>
        <div @click="handleNavigation('/cart')" class="btn">
            <img src="../assets/images/cart.png"/>
            <Text text = 'Cart' />
           
        </div>
  
</div>

</template>

<style lang="scss" scoped>
    .container{
        position: fixed;
        width : 100%;
        height : 80px;
        display: flex;
        align-items: center;
        justify-content: end;
        padding : 2rem;
        z-index: 999;
        border-bottom: 1px solid $black;
        background-color: $white ;
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
 
</style>