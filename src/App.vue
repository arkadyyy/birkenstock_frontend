<script setup lang="ts">
import {  RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar/>
  <div class="wrapper">
    <v-app>
    <v-main>
      <RouterView />
      <Footer/>
    </v-main>
  </v-app>
  </div>

   
 
  <!-- <Footer/> -->
</template>

<style scoped>
.wrapper{
  position: absolute;
  top: 80px;
  width: 100%;
}



</style>
