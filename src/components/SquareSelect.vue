<script setup>
import Text from './Text.vue'
    const props = defineProps({
        value : {
            default : null,
            type :String
        },
        color : {
            default : null,
            type : String
        }
    })
</script>

<template>
    <div class="square_container">
        <!-- <h2>{{ value }}</h2> -->
        <!-- <div v-if="color" :style = "{backgroundColor : color}" class="color"></div> -->
       <Text color = "#000" fontWeight = 'light' fontSize = '1em' :text = "value" />
    </div>
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
    }

</style>