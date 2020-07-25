<template>
    <header class="header">
        <div class="header__bg">
            <div class="header__presentation--container">
                <section class="header__presentation">
                    <h1>TequeGi</h1>
                    <span>
                        Los tequeños más sabrosos y únicos de Caracas.
                    </span>
                    <br/>
                    <button>Pide tu Delivery</button>
                </section>

                <figure class="header__img">
                    <img src="../../static/img/TequeQueso.svg" alt="TequeQueso">
                </figure>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.header {
    width: 90%;
    height: 100vh;
    margin: auto;

    &__bg {
        width: 100%;
        height: 100%;
        // background-image: url('../../static/img/tequenos.webp');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }

    &__presentation--container {
        width: 100%;
        height: 100%;
        background: transparent;
        display: grid;
        grid-template-columns:  1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:    "presentation img";
        justify-items: center;
        align-items: center;
    }

    &__presentation {
        grid-area: presentation;

        & h1 {
            font-size: 80px;
        }

        & span {

        }

        & button {
            margin-top: 10px;
            background-color: #ee9c1f;
            border-radius: 10px;
            padding: 10px;
            color: white;
        }
    }

    &__img {
        width: 100%;
        height: 100%;
        grid-area: img;
        display: flex;
        align-items: center;

        & img {
            width: 100%;
            clip-path: circle(50% at 50% 64%);
            box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.63);

            animation-name: stretch;
            animation-duration: 1.5s; 
            animation-timing-function: ease-in-out; 
            animation-delay: 0;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            animation-fill-mode: none;
            animation-play-state: running;
        }
    }
}

@keyframes stretch {
    0% {
        transform: translateY(-80px);
        // transform: scale(.9);
    }

    100% {
        transform: translateY(0px);
    }
}


@media only screen and (max-width: 1440px) {
    .main {
        
        &__products {

            &--grid {
                grid-template-columns: 1fr 1fr;
            }
        }
    }
}

@media only screen and (max-width: 800px) {
    .header {
        height: auto;
        
        &__presentation--container {
            grid-template-columns:  1fr;
            grid-template-rows: min-content min-content;
            grid-template-areas:    "presentation"
                                    "img";
            align-items: flex-start;
            text-align: center;
        }
    }

    @keyframes stretch {
    0% {
        transform: translateY(20px);
        // transform: scale(.9);
    }

    100% {
        transform: translateY(60px);
    }
}
}
</style>

<script>
import PxNav from '@/components/Global/PxNav'

export default {
    name: 'PxHeader',
    components: { PxNav }
}
</script>