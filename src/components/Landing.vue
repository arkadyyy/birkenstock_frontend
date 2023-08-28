<script lang="ts" setup>
import Text from './Text.vue';

import {watch,computed,ref} from 'vue'
import Button from './Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const models = [
    'Arizona',
    'Boston',
    'Madrid',
    'Bend',
    'Gizen',
    'Super-Birki'
]
const activeModelRef = ref<number>(0)


watch(activeModelRef,() => {
    changeModel()
})

function changeModel(){
    const LAST_MODEL = models.length - 1
    if(activeModelRef.value !== LAST_MODEL) setTimeout(() => {
            activeModelRef.value++
    }, 5000);
    if(activeModelRef.value === LAST_MODEL)
    setTimeout(() => {
            activeModelRef.value = 0;
    }, 5000);
}

changeModel()



function isActiveModel(val : string){

    return val === models[activeModelRef.value]

}




function navigateToShoes(){
   router.push('/shoes')
}
</script>

<template>
    
<div class="container">
  
    <div class="top_section">
        <Button :handler = "navigateToShoes">buy now</Button>
        <Text fontSize='1.2em' text = 'The jesus sandal we all want'/>
        <img src="../assets/images/birkenstock_logo.png"/>
      
        <!-- <button @click="test" class="btn" >buy now</button> -->
        
    </div>
    <div class="bottom_section">
        <img src="../assets/images/landing_pair.png"/>
        <Text color = "#fff"  fontSize = '0.9em' text = 'Popular two-strap sandal: The Arizona cult sandal has been popular for decades with its timeless design and is always a stylish choice.'/>
        <div class="models_container">
               <button  :class = "{model_btn_active :isActiveModel(model),model_btn :!isActiveModel(model)}"  v-for="model in models">{{ model }}</button>
               <Text position = "absolute" left = "-5%" top = "-180%" fontSize = "1.4em" fontWeight = "Bold" color = "#fff" transform = "rotate(-90deg)"  text = "Models"/>
        </div>
    </div>
   
</div>
</template>

<style lang="scss" scoped>
   .container {
    background-color:$white ;
    // min-height: 100vh;
   }
   .top_section {
    background-color: $white;
    height: 40vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
   .bottom_section {
    background-color: $blue;
    height : 50vh;
    // position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
   }


   .top_section img {
    width : 45em;
    height: 13em;
    object-fit: contain;

    padding : 1rem;

   }
   .bottom_section img {
    position: absolute;
    top : 2em;
    left : 30%;
    width: 33em;
    height: 40em;
    object-fit: contain;
   }

   .models_container {
    position: relative;
    display: flex;
    margin : 2rem;
    margin-bottom: 3rem;
    justify-content: space-around;
    width : 80%;
   }

//    .btn {
//     border : 1px solid $black;
//         box-shadow: 2px 3px 0px $black;
//         border-radius: 3px;
//         text-transform: uppercase;
//         padding : 1rem;
//         height: 10px;
//         min-width: 100px;
//         color: $black;
//         font-weight :500;
//         position: absolute;
//         background-color: $white;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         left : 28%;
//         z-index: 10;
//         top : 78%;
//         width: 120px;
//         cursor: pointer;
//    }

   .model_btn {
    background-color: transparent;
    border: none;
    color: $white;
    font-size: 1em;
    cursor: pointer;
   
    
   }
      .model_btn:after{
    content: "";
  border-bottom: 3px solid transparent;
  margin-top: 0.3rem;
  width: 60%;
  display: block;
   }
   .model_btn_active {
    background-color: transparent;
    border: none;
    color: $white;
    font-size: 1em;
    cursor: pointer;
    transition: 0.6s ease-in;
    
   }
   .model_btn_active:after{
    content: "";
  border-bottom: 3px solid $white;
  margin-top: 0.3rem;
  width: 60%;
  display: block;
   }
   
   
 
</style>