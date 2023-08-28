<script setup>
const props = defineProps({
    padding :{
        type : String,
        default : '2rem'
    }
})
</script>


<template>
    <div class="header_container" :style = "{padding}" >
        <div class="blue_square"></div>
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>
    .header_container {
        width : 100%;
        height : 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        // background-color: red;
        z-index: 9999;
   
    }
    .blue_square{
        background-color: $blue;
        height: 20px;
        width: 90px;

    }
</style>
