<script setup>
import Carrossel from '../components/Carrossel.vue';

</script>

<template>
    <div>
      <div><h1 class="titulofamilia">Essa é a minha família: </h1></div>
      
      <Carrossel />




<!--       <div><img class="fotofamilia" src="@/assets/familia.jpeg" height="500"></div>
      <div> <p>Minha família é grande e unida, porém moro apenas com meus pais e meu irmão mais novo.</p>
      </div> -->
    </div>
  </template>
  
  <style scoped>
    .titulofamilia{
    display: flex;
    margin-top: 70px;
    font-size: 50px;
  }

  .fotofamilia{
    display:flex;
    width: 80ch;
    height: 60ch;
  }

  </style>
  