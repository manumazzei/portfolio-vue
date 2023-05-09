<script>
import src1 from '../assets/familia.jpeg'
import src2 from '../assets/livro.jpeg'
import src3 from '../assets/jardim.jpeg'
import src4 from '../assets/manu.jpeg'
import src5 from '../assets/volei.jpeg'

export default {

    data() {
        return {
            imagens: [
                {
                    id: 1,
                    src: src1,
                    alt: "Familia"
                },
                {
                    id: 2,
                    src: src2,
                    alt: "Livro"
                },
                {
                    id: 3,
                    src: src3,
                    alt: "Jardim"
                },
                {
                    id: 4,
                    src: src4,
                    alt: "Manu"
                },
                {
                    id: 5,
                    src: src5,
                    alt: "Volei"
                }
            ]
        };
    },
    methods: {
        prev() {

        },
        next() {

        },
    },
}
</script>

<template>
    <div class="carrossel">

        <div class="card">

            <div class="imagens" v-for="imagem in imagens" :key="imagem.id">
                <img :src="imagem.src" :alt="imagem.alt">
            </div>

        </div>
    </div>

    <button @click="prev" class="arrows arrow-left">&#10140;</button>
    <button @click="next" class="arrows arrow-right">&#10140;</button>
</template>

<style scoped>
.carrossel {
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    max-width: 700px;
}

.card {
    white-space: nowrap;
    height: 540px;
}

.card img {
    height: 100%;
}


/* estilo das arrows */
.arrows {
    /* Resetando padrão */
    background: none;
    border: none;
    color: white;

    /* estilo */
    font-size: 50px;
    cursor: pointer;

    transition: 0.3s;

    /* Posicionamento */
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20%;
    left: auto;
}

.arrow-left {
    transform: rotate(-180deg);
    right: auto;
    left: 20%;
}

.arrows:hover {
    color: aqua;
}
</style>