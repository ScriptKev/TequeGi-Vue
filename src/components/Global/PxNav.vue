<template>
    <nav class="nav">
        <figure class="nav__logo">
            <router-link to="/">
                <h2>TequeGi 🥖</h2>
            </router-link>
        </figure>

        <section class="nav__links">
            <router-link class="nav__link" to="/about">Nosotros</router-link>
            <a class="nav__link" href="#">Contactanos</a>
        </section>
    </nav>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.nav {
    background-color: map-get($Colors, 'Secondary');
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &__logo {

    }

    &__links {

    }

    &__link {
        margin: 0 10px;
    }
}
</style>

<script>
export default {
    name: 'PxNav'
}
</script>