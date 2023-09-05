<script setup>
import Text from './Text.vue'

const props = defineProps({
    header : String,
    values : Array
})
</script>

<template>

    <div class="select_input_container">
        <Text/>
        <select>
            <option v-for="option in values">{{ option }}</option>
        </select>
    </div>
</template>


<style scoped lang="scss">
.select_input_container {
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
}
</style>