<script setup>
import Carrossel from '../components/Carrossel.vue';

</script>

<template>
    <div>
   <!--  fix/tamanhos_views -->
      <div><h2>Essa é a minha família: </h2></div>
      <Carrossel />
    

      <div><h1 class="titulofamilia">Essa é a minha família: </h1></div>

      <div> <p>Minha família é grande e unida, porém moro apenas com meus pais e meu irmão mais novo.</p>
      </div> 
    </div>
  </template>
  
  <style scoped>
  .fotofamilia{
    display:flex;
    height: 60ch;
  }

  </style>
  