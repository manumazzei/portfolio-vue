<script>
import src1 from '../assets/familia.jpeg'
import src2 from '../assets/avos.jpeg'
import src3 from '../assets/thor.jpeg'
import src4 from '../assets/pierre.jpeg'
import src5 from '../assets/mae.jpeg'

export default {

    data() {
        return {
            index: 0,
            imagens: [
                {
                    src: src1,
                    alt: "Familia"
                },
                {
                    src: src2,
                    alt: "Avos"
                },
                {
                    src: src3,
                    alt: "Thor"
                },
                {
                    src: src4,
                    alt: "Pierre"
                },
                {
                    src: src5,
                    alt: "Mae"
                }
            ]
        };
    },
    methods: {
        prev() {
            this.index == 0 ? (this.index = 4) : this.index--;
        },
        next() {
            this.index == 4 ? (this.index = 0) : this.index++;
        },
    },
}
</script>

<template>
    <div class="carrossel">

        <div class="card">

            <img :src="imagens[index].src" :alt="imagens[index].alt">

        </div>

        <button @click="prev" class="arrows arrow-left">&#10140;</button>
        <button @click="next" class="arrows arrow-right">&#10140;</button>
    </div>
</template>

<style scoped>
.carrossel {
    overflow: hidden;
    height: 400px;
    width: 900px;
    display: flex;
    justify-content: center;
}

.card {
    display: flex;
    align-items: center;
}

.card>img {
    height: 100%;
    width: 100%;
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
    top: 50%;
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