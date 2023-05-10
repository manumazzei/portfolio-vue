<template>
  <div class="quadradomaior">
   <div> 
   <div><h2>Esses são meus hobbies: </h2></div>
    <div class="quadradinhoum"></div>
    <div class="quadradinhodois"></div>
    <div class="quadradinhotres"></div>
    <div class="quadradinhoquatro"></div>
    <div>      
      <ul class="listahobbies">
        <li>Fazer academia me faz muito bem para mente e o corpo;</li>
        <li>Acompanhar o meu time do coração muda meu humor;</li>
        <li>Sou apaixonada por livros de romance e suspense;</li>
        <li>Jogando vôlei de praia esqueço dos meus problemas.</li>
      </ul>
    </div>
  </div>
  </div>
</template>

<style scoped>
.quadradomaior{
  display: flex;
}

.quadradinhoum{
  display: inline-block;
  flex-wrap: wrap;
  height: 25%;
  width: 40%;
  flex-direction: row;
  background-image: url("@/assets/academia.jpeg");
  background-repeat: no-repeat;
  background-size: 100%;
} 

.quadradinhodois{
  display: inline-block;
  height: 25%;
  width: 40%;
  flex-direction:row;
  flex-wrap: wrap;
  background-image: url("@/assets/corinthians.jpeg");
  background-repeat: no-repeat;
  background-size: 100%;
}

.quadradinhotres{
  display: inline-block;
  height: 25%;
  width: 40%;
  flex-direction:row;
  flex-wrap: wrap;
  background-image: url("@/assets/livro.jpeg");
  background-repeat: no-repeat;
  background-size: 100%;
}

.quadradinhoquatro{
  display: inline-block;
  height: 25%;
  width: 40%;
  flex-direction:row;
  flex-wrap: wrap;
  background-image: url("@/assets/volei.jpeg");
  background-repeat: no-repeat;
  background-size: 100%;
}

.listahobbies{
  position: relative;
  display: flex;
  align-items: center;
  list-style-type: square;
  flex-direction: column;
  line-height: 40px; 
}

</style>