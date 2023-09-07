import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFilterShoesStore = defineStore('filterShoes', () => {

//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }


const activeBtns = ref([])
const activeColors = ref([])
const activeGenders = ref([])

const sortByOptions = ref(['New arrivals', 'Price', 'Name (A-Z)', 'Name (Z-A)'])
const selectedSortBy = ref([])

const modelOptions = ref(['Arizona','Boston','Madrid','Bend','Gizeh','Super-Birki'])
const selectedModel = ref([])

const genderOptions = ref(['M','F','unisex'])
const selectedGender = ref([])

const GENDERS = ref(['M','F','unisex'])
const SIZES = ref(['30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49'])
const COLORS = ref(['#714932','#000000','#DCD2BE','#F5F561','#434978','#899F61','#EA2768','#C72826','#A1A1A3','#5A3991',])


function activeSizeHandler(val : string){
   
    const check = activeBtns.value.indexOf(val)
    if(check === -1) activeBtns.value = [...activeBtns.value,val]
    if(check !== -1) activeBtns.value = activeBtns.value.filter((_) => _ !== val)


    }


    function checkIFselected(val){
            const check = activeBtns.value.indexOf(val)
            if(check !== -1) return true
            if(check === -1) return false 
    }

    function checkifColorSelected(val){
        const check = activeColors.value.indexOf(val)
            if(check !== -1) return true
            if(check === -1) return false 
    }
    function checkifGenderSelected(val){
        const check = activeGenders.value.indexOf(val)
            if(check !== -1) return true
            if(check === -1) return false 
    }


function activeColorHandler(val){
   
    const check = activeColors.value.indexOf(val)
    if(check === -1) activeColors.value = [...activeColors.value,val]
    if(check !== -1) activeColors.value = activeColors.value.filter((_) => _ !== val)

}    

function activeGenderHandler(val){
    const check = activeGenders.value.indexOf(val)
    if(check === -1) activeGenders.value = [...activeGenders.value,val]
    if(check !== -1) activeGenders.value = activeGenders.value.filter((_) => _ !== val)
}

function clearFilters(){
    activeBtns.value = []
    activeColors.value = []
    activeGenders.value = []
}



  return { 
    activeBtns,
    activeColors,
    activeGenders,
    sortByOptions,
    selectedSortBy,
    modelOptions,
    selectedModel,
    genderOptions,
    selectedGender,
    GENDERS,
    SIZES,
    COLORS,
    activeColorHandler,
    activeSizeHandler,
    activeGenderHandler,
    checkIFselected,
    checkifColorSelected,
    checkifGenderSelected,
    clearFilters,

}
})
