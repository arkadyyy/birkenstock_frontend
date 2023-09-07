<script setup>
import SquareSelect from './SquareSelect.vue';
import Text from './Text.vue';
import SelectInput from './SelectInput.vue'
import { ref, onMounted, onBeforeUnmount, watch, computed, watchEffect,reactive } from 'vue';
import {useFilterShoesStore} from '../stores/filterShoes'
import { storeToRefs } from 'pinia'

const store = useFilterShoesStore()

const {activeBtns,activeColors,activeGenders,sortByOptions,selectedSortBy,modelOptions,selectedModel,genderOptions,selectedGender,GENDERS,SIZES,COLORS} = storeToRefs(store)
const {
    activeColorHandler,
    activeSizeHandler,
    activeGenderHandler,
    checkIFselected,
    checkifColorSelected,
    checkifGenderSelected,
    clearFilters,

} = store
// const activeBtns = ref([])
// const activeColors = ref([])
// const activeGenders = ref([])

// const sortByOptions = ref(['New arrivals', 'Price', 'Name (A-Z)', 'Name (Z-A)'])
// const selectedSortBy = ref([])

// const modelOptions = ref(['Arizona','Boston','Madrid','Bend','Gizeh','Super-Birki'])
// const selectedModel = ref([])

// const genderOptions = ref(['M','F','unisex'])
// const selectedGender = ref([])

// const GENDERS = ['M','F','unisex']
// const SIZES = ['30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49']
// const COLORS = ['#714932','#000000','#DCD2BE','#F5F561','#434978','#899F61','#EA2768','#C72826','#A1A1A3','#5A3991',]

// function activeSizeHandler(val){
   
//     const check = activeBtns.value.indexOf(val)
//     if(check === -1) activeBtns.value = [...activeBtns.value,val]
//     if(check !== -1) activeBtns.value = activeBtns.value.filter((_) => _ !== val)


//     }


//     function checkIFselected(val){
//             const check = activeBtns.value.indexOf(val)
//             if(check !== -1) return true
//             if(check === -1) return false 
//     }

//     function checkifColorSelected(val){
//         const check = activeColors.value.indexOf(val)
//             if(check !== -1) return true
//             if(check === -1) return false 
//     }
//     function checkifGenderSelected(val){
//         const check = activeGenders.value.indexOf(val)
//             if(check !== -1) return true
//             if(check === -1) return false 
//     }


// function activeColorHandler(val){
   
//     const check = activeColors.value.indexOf(val)
//     if(check === -1) activeColors.value = [...activeColors.value,val]
//     if(check !== -1) activeColors.value = activeColors.value.filter((_) => _ !== val)

// }    

// function activeGenderHandler(val){
//     const check = activeGenders.value.indexOf(val)
//     if(check === -1) activeGenders.value = [...activeGenders.value,val]
//     if(check !== -1) activeGenders.value = activeGenders.value.filter((_) => _ !== val)
// }

// function clearFilters(){
//     activeBtns.value = []
//     activeColors.value = []
//     activeGenders.value = []
// }
</script>


<template>
    
<div class="shoes_filter_container">
   
   
   <div class="size_container">
    <Text class="txt" text = "Size" color = "#000" fontSize = "1em" fontWeight = "600"/>
        <SquareSelect :key="size" :isSelected = "checkIFselected(size)" :selectedBtns = "activeBtns" :handler = "activeSizeHandler" v-for="size in SIZES" :value = "size"/>
   </div>
   <div class="select_container">
<div class="select_container_element">

    <Text class="txt" text = "Sort by" color = "#000" fontSize = "1em" fontWeight = "600"/>
  <v-select
  :multiple="true"
  density="compact"
  chips
  closable-chips
  :clearable="true"
  base-color="#fff"
  label="Select sort option"
  :items="sortByOptions"
  variant="outlined"
  :flat = "true"
  bg-color="#fff"

></v-select>

</div>

<Text class="txt" text = "Select model" color = "#000" fontSize = "1em" fontWeight = "600"/>

  <v-select
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

></v-select>

   </div>
   <div class="select_container">
  <div class="select_container_element">
    
    <Text class="txt" text = "Select color" color = "#000" fontSize = "1em" fontWeight = "600"/>

<SquareSelect :key = "color" type = 'color' :isSelected = "checkifColorSelected(color)" :selectedBtns = "activeColors" :handler = "activeColorHandler" v-for="color in COLORS" :value = "color"/>
  </div>
   <div class="select_container_element">

    <Text class="txt" text = "Gender" color = "#000" fontSize = "1em" fontWeight = "600"/>
        <SquareSelect :key = "gender" :isSelected = "checkifGenderSelected(gender)" :selectedBtns = "activeGenders" :handler = "activeGenderHandler" v-for="gender in GENDERS" :value = "gender"/>

   </div>
   </div>
   <div class="select_container">
    <div class="select_container_element">
        <div class="price_range_header">
   
   <Text class="txt" text = "Price range" color = "#000" fontSize = "1em" fontWeight = "600"/>
   <v-select
   :style = "{ maxWidth : '100px', }"
 density="compact"
 base-color="#fff"
 label="ILS"
 :items="['ILS','USD','EUR']"
 variant="outlined"
 :flat = "true"
 bg-color="#fff"
 

></v-select>

  </div>
  <div class="price_range_content">
  <div :style = "{left : '10px',position : 'relative'}">
   <Text left = '-10px' class="txt" text = "From" color = "#000" fontSize = "1em" fontWeight = "600"/>
   <v-text-field
  
           v-model="lastname"
           :rules="nameRules"
           :counter="10"
           bg-color="#fff"
           variant="outlined"
           density="compact"
           hide-details
           type="number"
           :style = "{ maxWidth : '90px' }"
          
         ></v-text-field>
  </div>

   <div :style = "{left : '40px',position : 'relative'}">
       <Text left = '-14px' class="txt" text = "To" color = "#000" fontSize = "1em" fontWeight = "600"/>
   <v-text-field
   v-model="lastname"
           :rules="nameRules"
           :counter="10"
           bg-color="#fff"
           variant="outlined"
           density="compact"
           hide-details
           type="number"
           :style = "{ maxWidth : '90px' }"
          
           
           
         ></v-text-field>

   </div>

  </div>
    </div>
   
   <Text class="txt" text = "Free search" color = "#000" fontSize = "1em" fontWeight = "600"/>
   <v-text-field
   density="compact"
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Search"
            bg-color="#fff"
            variant="outlined"
          ></v-text-field>

   <div class="oriention_select_container">
    <SquareSelect :handler = "clearFilters" value = "clear"/>
        <!-- <SquareSelect type = "icon"/>
        <SquareSelect type = "icon"/> -->
        
   </div>
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
        width: 20%;
        flex-wrap: wrap;
    }
    .size_container .txt {
        width: 100%;
        margin-bottom : 1rem;
    }

    .select_container{
        width: 25%;
        margin-right: 1rem;
        // margin-top: 3rem;
      

    }

    .select_container_element {
        min-height : 50%;
        // background-color: yellow;
    }

    .select_container .txt {
        margin-bottom: 1rem;
    }

    .price_range_header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .oriention_select_container {
        display: flex;
        justify-content: end;
        // background-color: red;
    }


    .price_range_content{
        display: flex;
        align-items: center;
      
        // justify-content: space-between;
    }

    .price_range_content div {
        display: flex;
        align-items: center;
        justify-content: center;
    }



</style>