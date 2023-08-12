<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'

</script>

<template>
  <Navbar/>

  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper{
  position: absolute;
  top: 80px;
  width: 100%;
}



</style>
