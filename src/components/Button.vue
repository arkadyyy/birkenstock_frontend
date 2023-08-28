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
<button :style="{position,top,left,width,height}" @click="() => handler()" class="btn_container">
  <slot></slot>
</button>
</template>

<style lang="scss" scoped>
   .btn_container {
    border : 1px solid $black;
        box-shadow: 2px 3px 0px $black;
        border-radius: 3px;
        text-transform: uppercase;
        padding : 1rem;
        height: 10px;
        min-width: 100px;
        color: $black;
        font-weight :500;
        position: absolute;
        background-color: $white;
        display: flex;
        align-items: center;
        justify-content: center;
        left : 28%;
        z-index: 10;
        top : 78%;
        width: 120px;
        cursor: pointer;
   }

</style>