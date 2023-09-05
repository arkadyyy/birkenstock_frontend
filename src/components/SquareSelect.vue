<script setup>
import Text from './Text.vue'
import {ref,reactive,computed,watch,watchEffect} from 'vue'



    const props = defineProps({
        value : {
            default : null,
            type :String
        },
        type : {
            default : 'text',
            type : String
        },
        handler : {
            default : null,
            type : Object
        },
        selectedBtns : {
            default : [],
            type : Array
        },
        isSelected : {
            default : false,
            type : Boolean
        }
    })


    // const discountedPrice = computed(() => {
    //   return price.value * 0.9; // Applying a 10% discount
    // });


function test(){
    console.log(props.selectedBtns)
}





</script>

<template>
    <v-btn
    :style = "{backgroundColor : isSelected ? '#004B85' : '#fff',color :isSelected ? '#fff' : '#000' }" 
     @click = "handler(value)"  variant = "flat" class="mr-2 mb-2"  :ripple="false" size="small" v-if="type==='color'">
        <div class="color"  :style = "{backgroundColor : value}"></div>
    </v-btn>
    <v-btn v-if="type !== 'color'" :style = "{backgroundColor : isSelected ? '#004B85' : '#fff',color :isSelected ? '#fff' : '#000' }"  @click = "handler(value)"  variant = "flat" class="mr-2 mb-2"  :ripple="false" size="small">{{ value }}</v-btn>
</template>


<style scoped lang="scss">
    .square_container {
        background-color: $white;
        border-radius: 2px;
        margin: 0.3rem;
        width : 40px;
        height : 40px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .color {
        width : 20px;
        height : 20px;
        border-radius: 50%;
        border : 2px solid #fff;
    }

</style>