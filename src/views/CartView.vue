<script setup lang="ts">
import Header from '../components/Header.vue'
import Text from '../components/Text.vue'
import Button from '../components/Button.vue'
import {ref} from 'vue'
import { useRouter } from 'vue-router'
const desserts = ref(
     [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
)
const router = useRouter()

function handleNavigation(){
    router.push('/checkout/delivery')
}
</script>

<template>

 <div class="cart_container">
 
        <div class="table_container">
            <Header >
            <Text fontWeight = 'bold' fontSize = '5em' text = "MY CART"/>
        </Header>
            <v-table :style = "{width : '80%'}" class="ml-6" theme="light" height="55vh" >
    <thead>
      <tr>
        <th class="text-left">
            Product
        </th>
        <th class="text-left">
           
        </th>
        <th class="text-left">
         Size
        </th>
        <th class="text-left">
        Color
        </th>
        <th class="text-left">
        Amount
        </th>
        <th class="text-left">
         Price
        </th>
        <th class="text-left">
        
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
        
      >
        <td>
           
            <Text text = 'Boston grip'/>
        </td>
        <td>
           
            <img src="../assets/images/boston_demo.png"/>
        </td>
        <td><Text text = '42'/></td>
        <td>
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
        </td>
        <td>   <v-select
   :style = "{ maxWidth : '100px', }"
 density="compact"
 base-color="#fff"
 label="1"
 :items="['1','2','3','4','5']"
 variant="outlined"
 :flat = "true"
 bg-color="#fff"
 

></v-select></td>
        <td><Text text = '$140'/></td>
        <td><v-icon  icon="mdi-close-box-outline"></v-icon></td>
      </tr>
    </tbody>
  </v-table>
        </div>

        <div class="summary_table">
            <Text fontWeight = 'bold' fontSize = '1.5rem' text = "ORDER SUMMARY"/>
            <v-divider class="mt-2" color="#000" :style = "{width : '60%'}"></v-divider>
            <v-list lines="one">
  <v-list-item
  class="mt-4"
    v-for="n in 3"
    :key="n"
    :title="'Item ' + n"
    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
  ></v-list-item>
</v-list>

<div class="total_container">

    <Text fontWeight = 'semiBold' fontSize = '1.2em' text = "TOTAL : "/>
<div class="total_price_box">
    <Text fontWeight = 'medium' fontSize = '1em' text = "$750"/>
</div>

<Button :handler = "handleNavigation" top = '200%' left = '5px' width = '300px' height = '50px'>
    checkout
</Button>
</div>
        </div>

</div>



</template>

<style lang="scss" scoped>
    .cart_container {
        height : 100vh;
        display: flex;
        position: relative;
    }
    .table_container { 
        flex : 2;
    }

    .summary_table {
        flex : 1;
        // background-color: red;
        padding-top: 7rem;
        
    }
.total_container {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    margin-top: 3rem;
    position: relative;
}
    .total_price_box {
        background-color: #f6f6f6;
        padding : 0.5rem;
        border-radius: 5px;
        width : 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 1rem;
    }

    img {
        width : 100px;
        height: 100px;
        object-fit: contain;
    }
</style>
