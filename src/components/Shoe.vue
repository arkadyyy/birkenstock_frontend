<script setup>
import Text from './Text.vue'
import { useRouter } from 'vue-router';
const props = defineProps({
   shoe : Object
   
})
const router = useRouter()
function handleNavigation(){
    router.push(`/shoe/${shoe_id}`)
}
</script>


<template>
    <div @click = "handleNavigation" class="shoe_container">
        <img class="heart" src="../assets/images/outlined_heart.png"/>
        <img :src="shoe.img"/>
       <Text :text = "shoe.text" />
       <Text :text = "shoe.color" />
    </div>
</template>


<style lang="scss" scoped>
.shoe_container {
    width : 31%;
    // background-color: red;
    margin :1rem;
    height : 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
}
.heart {
    position: absolute;
    width : 30px;
    height : 30px;
    object-fit: contain;
    top : 0px;
    right : 20px;
}
</style>