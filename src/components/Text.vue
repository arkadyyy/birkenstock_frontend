<script lang="ts" setup>
const props = defineProps({
    text : 'string',
    fontSize : '1em'
})
</script>

<template>
<p :style = "{fontSize : fontSize}">{{ text }}</p>
</template>

<style lang="scss" scoped>

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

p {

    font-family: 'Inter', sans-serif;
    position: relative;
}


</style>