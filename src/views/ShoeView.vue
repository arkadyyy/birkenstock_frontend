<script setup>
import {useRoute} from 'vue-router'
    const route = useRoute()

    const {shoe_id} = route.params
</script>


<template>

    <h2>welcome from shoe view </h2>
    <p>{{ shoe_id }}</p>

</template>


<style lang="scss">

</style>