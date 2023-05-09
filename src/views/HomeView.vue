<script>
import TheWelcome from '../components/TheWelcome.vue'

export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<template>
  <main>
    <div class="divfoto">
        <img class="imgmanu" src="@/assets/manu.jpeg">
      </div>
    <div class="divsocorro">
      <div class="divsobremim">
        <h2>Sobre mim</h2>
        <p>Olá meu nome é Emmanuelle, tenho 19 anos e nasci no interior do Paraná.
        </p>
        <p>Me considero uma pessoa muito dedicada em tudo que me proponho a fazer
          e sempre busco aprender coisas novas. </p>
        <p>Gosto de ouvir música e também passar o tempo com minha família e amigos.</p>
        <p class="titulodalista"> Um pouco mais sobre mim:</p>
        <ul class="listasobremim">
          <li>Já morei em vários <a href='http://localhost:5173/lugares'>lugares</a></li>
          <li>Minha <a href='http://localhost:5173/familyView'>família</a> é bem grande</li>
          <li>Esses são os meus <a href='http://localhost:5173/hobbies'>hobbies</a></li>
        </ul>
      </div>
    </div>
    <br>

  </main>
</template>

<style scoped>
.titulodalista {
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-size: 40px;
}

.listasobremim {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  list-style-type: square;
  flex-direction: column;
  line-height: 80px;
}

.imgmanu {
  width: 250px;
  border-radius: 20%;
  padding-top: 5vh;
}

.divsocorro {
  margin-top: 5vh;
  display: flex;
}

.divfoto {
  width: 30vh;
  position: fixed;
  left: 2%;
}

</style>
