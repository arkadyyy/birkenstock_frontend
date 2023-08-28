<script setup>
import Text from './Text.vue'
import Header from './Header.vue'
import Button from './Button.vue'
</script>


<template>

    <div class="third_sec_container">
       
       
        <div class="left_container">
            <Header>
        <img class="img" src = '../assets/images/birkenstock_logo.png'/>
        <Text left = '5px' color = 'blue' fontWeight = '800' fontSize = '5em'  text = "MADE IN GERMANY"/>
        <Button left = '40px' top = "25em" height = "55px" width = "75%">buy now</Button>
      </Header>
        </div>
        <div class="right_container">
            <img class="img" src = '../assets/images/german_flag.png'/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.third_sec_container {
    height : 100vh;
    display: flex;

//    justify-content: center;
   align-items: center;
   padding: 4rem;
//    background-color: green;

}
.third_sec_container img {
    width : 50vw;
    height : 30vh;
    object-fit: contain;
    margin-bottom: -3rem;
}
.left_container {
   width : 70%;
   position: relative;
// flex : 4;
}
.right_container{
   width :30%;
   display: flex;
   align-items: center;
   justify-content: center;
// flex : 1;
}
</style>