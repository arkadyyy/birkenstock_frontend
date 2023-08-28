<script setup>
import SquareSelect from './SquareSelect.vue';
import Text from './Text.vue'
const SIZES = ['30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49']
</script>


<template>
<div class="shoes_filter_container">
    <Text text = "Size" color = "#000" fontSize = "1.2em" fontWeight = "600"/>

   <div class="size_container">
        <SquareSelect v-for="size in SIZES" :value = "size"/>
   </div>
   <div class="select_container">
    <h2>asd</h2>
    <h2>asd</h2>
    <h2>asd</h2>
    <h2>asd</h2>
    <h2>asd</h2>
   </div>
</div>
</template>

<style lang="scss" scoped>
    .shoes_filter_container {
        background-color: $gray;
        width: 100%;
        min-height: 40vh;
        border-radius: 8px;
        position: relative;
        top : 2em;
        padding: 2rem;
        display: flex;
    }

    .size_container {
        display: flex;
        width: 15%;
        flex-wrap: wrap;
    }

    .select_container{
        width: 25%;
        background-color: red;
    }
</style>