<script setup>

const props = defineProps({
    text : '',
    handler :'',
    position : "relative",
    top : '0px',
    left : '0px',
    width : '100px',
    height : '8px'
})
</script>


<template>
<button :style="{position,top,left,width,height}" @click="() => handler()" class="container">
    {{ text }}
</button>
</template>

<style lang="scss" scoped>
    .container {
        border : 1px solid $black;
        box-shadow: 1px 5px 0px $black;
        border-radius: 3px;
        text-transform: uppercase;
        padding : 1rem;
        height: 10px;
        min-width: 100px;
        color: $black;
        font-weight :500;
        
    }

</style>