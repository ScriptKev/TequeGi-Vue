<template>
    <nav class="nav">
        <figure class="nav__logo">
<<<<<<< HEAD
            <!-- <img src="" alt="logo"> -->
            <router-link to="/" class="nav__links--item">
                <h2>TequeGi</h2>
=======
            <router-link to="/">
                <h2>TequeGi 🥖</h2>
>>>>>>> e7b568bff4e939b47b80f4f82e0340c9b3062028
            </router-link>
        </figure>

        <section class="nav__links">
<<<<<<< HEAD
            <router-link to="/about" class="nav__links--item">Nosotros</router-link>
            <router-link to="/contact" class="nav__links--item">Contactanos</router-link>
=======
            <router-link class="nav__link" to="/about">Nosotros</router-link>
            <a class="nav__link" href="#">Contactanos</a>
>>>>>>> e7b568bff4e939b47b80f4f82e0340c9b3062028
        </section>
    </nav>
</template>

<style lang="scss" scoped>
<<<<<<< HEAD
@import '../../assets/scss/lib/variables';

.nav {
    background-color: transparent;
    width: 100%;
    height: 15vh;
=======
@import '../../assets/scss/main';

.nav {
    background-color: map-get($Colors, 'Secondary');
    width: 100%;
    height: 10vh;
>>>>>>> e7b568bff4e939b47b80f4f82e0340c9b3062028
    display: flex;
    justify-content: space-around;
    align-items: center;

<<<<<<< HEAD
    &__links {

        &--item {
            font-size: 1.1rem;
            margin: 0 10px;
            color: white;
            text-shadow: 1px 1px 6px black;
        }
=======
    &__logo {

    }

    &__links {

    }

    &__link {
        margin: 0 10px;
>>>>>>> e7b568bff4e939b47b80f4f82e0340c9b3062028
    }
}
</style>

<script>
export default {
    name: 'PxNav'
}
</script>