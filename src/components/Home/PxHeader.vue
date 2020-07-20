<template>
    <header class="header">
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
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
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