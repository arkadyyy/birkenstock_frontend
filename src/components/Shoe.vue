<script setup>
import Text from './Text.vue'
import { useRouter } from 'vue-router';

const props = defineProps({
   shoe : Object,
   displayHeart : {
    default : true
   }
   
})

const router = useRouter()

function handleNavigation(){
 
    console.log(props.shoe)

    router.push(`/shoe/${props.shoe.id}`)
}
</script>


<template>
    <div @click = "handleNavigation" class="shoe_container">
        <img v-if="displayHeart" class="heart" src="../assets/images/outlined_heart.png"/>
        <img :src="shoe.img"/>
       <Text :text = "shoe.text" />
       <Text :text = "shoe.color" />
    </div>
</template>


<style lang="scss" scoped>
.shoe_container {
    width : 27%;
    // background-color: red;
    margin :2rem;
    margin-bottom: 7rem;
    height : 350px;
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