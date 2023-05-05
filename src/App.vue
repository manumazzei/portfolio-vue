<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div> 
    <header> 
      <h1> Emmanuelle Matos </h1>
      
     <nav class="header nav"> <!-- Layout -->
      <RouterLink to="/">Minha História</RouterLink>
      <RouterLink to="/lugares">Lugares</RouterLink>
      <RouterLink to="/familyView">Familia</RouterLink>
      <RouterLink to="/hobbies">Hobbies</RouterLink>
    
    </nav>
      
    </header>
    
    <main> 
      <RouterView/>
    </main> 
  
    <footer class="footer"> "O universo é uma harmonia de contrários."</footer>
</div>

</template>


<style scoped>
main {
  height: 90vh;
}

footer {
  height: 20vh;
  font-size: 25px;
}
</style>
