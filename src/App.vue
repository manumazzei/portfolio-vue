<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="bg">
    <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_f24znioj.json"  background="transparent"  speed="1"  loop autoplay></lottie-player>
  </div>
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
  
    <footer class="footer"> "O universo é uma harmonia de contrários." - Pitágoras </footer>
</div>

</template>


<style scoped>

#bg {
  position: absolute;
  z-index: -1;
  width: 100%;
  left: 0;
  top: 0;
}

main {
  height: 90vh;
}

footer {
  height: 20vh;
  font-size: 25px;
}
</style>
