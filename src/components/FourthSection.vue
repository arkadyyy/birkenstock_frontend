<script setup>
import Header from './Header.vue'
import Text from './Text.vue'
</script>


<template>

    <div class="fourth_sec_container">
        <img src = '../assets/images/everywhere.png'/>
        <Header>
            <Text fontWeight = 'bold' fontSize = '5em' text = "JOIN THE FAMILY"/>
            <Text fontWeight = 'bold' fontSize = '5em' text = "WERE EVERYWHERE"/>
        </Header>
       
    </div>
</template>

<style scoped lang="scss">
.fourth_sec_container {
    height : 120vh;
    padding : 4rem;
    position: relative;
    overflow: hidden;
   
}

.fourth_sec_container img {
    width : 70vw;
    height: 90vh;
    object-fit: contain;
    position: absolute;
    left : 30%;
    top: 7%;
}

</style>