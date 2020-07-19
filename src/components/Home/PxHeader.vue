<template>
    <header class="header">
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
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.header {
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

        }
    }
}
</style>

<script>
export default {
    name: 'PxHeader'
}
</script>