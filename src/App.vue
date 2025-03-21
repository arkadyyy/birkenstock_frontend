<script setup lang="ts">
import {  RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Snackbar from './components/Snackbar.vue'
</script>

<template>
  <Navbar/>
  <div class="wrapper">
    <v-app>
    <v-main>
      <RouterView />
      <Snackbar/>
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
