<script setup>
import { ref,defineEmits,watch } from 'vue'
import Text from './Text.vue'


const props = defineProps({
    header : String,
    values : Array,
    label : String
})

const currVal = ref();
const emit = defineEmits(['currVal'])

watch(currVal,() => {
    console.log("curVal changed : ",currVal.value)
    emit('currVal',currVal.value)
})
</script>

<template>
    {{ currVal }}
    <div class="select_input_container">
        <Text v-if="label" :text = "label"/>
        <v-select
        v-model="currVal"
         
        density="compact"
        base-color="#fff"
       
        :items="values"
        variant="outlined"
        :flat = "true"
        bg-color="#fff"
        :model-value="currVal"
        ></v-select>
        <!-- <v-select
        density="compact"
        :multiple="true"
        chips
        closable-chips
        :clearable="true"
        base-color="#fff"
        label="Select model"
        :items="modelOptions"
        variant="outlined"
        :flat = "true"
        bg-color="#fff"
        ></v-select> -->
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