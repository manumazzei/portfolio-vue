<script>
import TheWelcome from '../components/TheWelcome.vue'

export default {
  data () {
    return {
      
    }
  }, 
  methods : {

  }
}
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="divcentral">
      <h1>Sobre mim</h1>
      <p>Ola meu nome é Emmanuelle, tenho 19 anos e nasci no interior do Paraná.
      </p>
      <img class = "img" src="@/assets/manu.jpeg">
    </div>
  </main>
</template>

<style scoped>
.divcentral{
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

</style>
