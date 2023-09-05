<script setup>
import Button from './Button.vue'
import Text from './Text.vue'
</script>


<template>

    <div class="container">
       
      <div class="logo_container">
        <img class="foot_logo" src="../assets/images/birkenstock_logo_2.png"/>
        <img class="birkenstock_logo" src="../assets/images/birkenstock_logo.png"/>
       
      </div>

      <div class="btn_container">
        <Button top = '-50px' width = '250px'>visit my portfolio</Button>
        <Button width = '250px'>visit Birkenstock</Button>
      </div>

      <div class="txt_container">
        <Text text = "This website inspired by the BIRKENSTOCK brand"/>
        <Text text = "I do not own any of the content used in this website"/>
        <Text text = "This website was built for study purposes"/>
      </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    height : 55vh;
    background-color: $gray ;
    position: relative;
 
}
.birkenstock_logo{
    position: relative;
    width : 200px;
    left : 15px;
}
.foot_logo {
    width : 100px
}

.logo_container {
        position  : absolute;
        bottom : 20px;
        left : 20px;
        display: flex;
        flex-direction: column;
        align-items: start;
        
}
.btn_container {
    position: absolute;
    bottom: 55px;
    right : 300px
}
.txt_container {
    position: absolute;
    top : 50px;
    left : 40px
}
</style>