<script lang="ts" setup>
const props = defineProps({
    text : String,
    fontSize : '1em',
    color : '#000',
    transform : '',
    fontWeight : 'regular',
    position : 'relative',
    top : '0px',
    left : '0px'
    // style : {}
})
</script>

<template>
<p :style = "{fontSize : fontSize,color : color === 'blue' ? '#004B85' : '#000',transform : transform,fontWeight,position,top,left}">{{ text }}</p>
</template>

<style lang="scss" scoped>

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

p {

    font-family: 'Inter', sans-serif;
    position: relative;
}


</style>