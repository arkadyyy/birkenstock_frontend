<script setup>
const props = defineProps({
    size : {
        type :String,
        default :'130px'
    },
    top :{
        type : String,
        default : '0px'
    },
    left :{
        type : String,
        default : '0px'
    },
})
</script>


<template>
    <div class="circle" :style = "{width : size,height : size,top,left}"></div>
</template>

<style lang="scss" scoped>
.container {
    background-color: $blue;
    border-radius: 50%;
    position: absolute;
    background-color: red;
}
.circle {
    background-color: $blue;
    border-radius: 50%;
    position: absolute;
    // z-index: 0;
}
</style>