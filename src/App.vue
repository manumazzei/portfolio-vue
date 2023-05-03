<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div> 
  <header> 
    <h1> Emmanuelle </h1>
    

 <!-- <HelloWorld msg="You did it!"  -->

 <nav> <!-- Layout -->
   <RouterLink to="/">Minha História</RouterLink>
   <RouterLink to="/lugares">Lugares</RouterLink>
   <RouterLink to="/familyView">Familia</RouterLink>
   <RouterLink to="/hobbies">Hobbies</RouterLink>
 
  </nav>
    
  </header>
    
    <main> 
      <RouterView/>
    </main>
  
    <footer> Um pouco mais sobre mim  </footer>
  </div>

</template>


<style scoped>
  header {
      background: pink;
      position: fixed; /* fixar posição */
      top:0;
      z-index:2; /* ofundidade */
      width: 100vw; /* ficar do tamanho da tela 100% da largura*/
      display: flex;
      justify-content: space-between ; /* organizar as coisas no mesmo eixo principal */ 
      padding: 0 2rem; /*  primeiro vertical segundo horizontal  */
      align-items: center;  /* centraliza ao contrario do justify largura ou altura */
  }


  header nav {
    display: flex;
    justify-content: space-between;
    width: 30%;

  }

  main {
    padding-top:10vh;
    min-height: 120vh; /* tamanho */
    background: white;
   
  }

  footer {
    background: pink;
  }
</style>
