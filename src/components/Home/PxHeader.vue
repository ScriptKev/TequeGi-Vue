<template>
    <header class="header">
<<<<<<< HEAD
        <div class="header__bg">
            <px-nav/>
            <div class="header__presentation--container">
                <div class="header__presentation">
                    <h1>TequeGi</h1>
                    <span>
                        Los tequeños más sabrosos y únicos de Caracas.
                    </span>
                    <br/>
                    <button>Pide tu Delivery</button>
                </div>
            </div>
=======
        <div class="header__grid">
            <section class="header__logo">
                <h1>TequeGi 🥖</h1>
                <span class="header__logo--slogan">Tus Sueños con Tequeños</span>

                <div class="header__logo--cta">
                    <button class="cta__primary">Pide tu delivery</button>
                </div>
            </section>

            <section class="header__img">
                <div class="header__img--teques"></div>
            </section>
>>>>>>> e7b568bff4e939b47b80f4f82e0340c9b3062028
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.header {
<<<<<<< HEAD
    width: 100%;
    height: 100vh;

    &__bg {
        width: 100%;
        height: 100%;
        background-image: url('../../static/img/tequenos.webp');
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
        grid-template-columns: 16% 1fr 1fr;
        grid-template-rows: 13% 1fr 1fr;
        grid-template-areas:    ". . ."
                                ". presentation ."
                                ". . .";
    }

    &__presentation {
        grid-area: presentation;

        & h1 {
            font-size: 80px;
        }

        & span {

        }

        & button {
            margin-top: 10px
=======
    background: radial-gradient(circle, rgba(255,180,162,1) 38%, rgba(200,147,158,1) 100%);
    width: 100%;
    height: 70vh;

    &__grid {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:    "presentation img";
        justify-items: center;
        align-items: center;
    }

    &__logo {
        grid-area: presentation;

        & h1 {
            font-size: 3rem
        }

        &--slogan {
            color: white;
        }
    }

    &__img {
        grid-area: img;
        width: 100%;
        height: 100%;

        &--teques {
            width: 100%;
            height: 100%;
            background-image: url('../../static/img/header-presentation.jpg');
            background-position-y: bottom;
            background-position-x: 30%;
            background-repeat: no-repeat;
            background-size: cover;
            // object-fit: fill;
            clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);

>>>>>>> e7b568bff4e939b47b80f4f82e0340c9b3062028
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