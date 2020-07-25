<template>
    <nav class="nav">
        <figure class="nav__logo">
            <!-- <img src="" alt="logo"> -->
            <router-link to="/" class="nav__links--item">
                <h2>TequeGi</h2>
            </router-link>
        </figure>

        <section class="nav__links">
            <router-link to="/" class="nav__links--item">Nosotros</router-link>
            <router-link to="/" class="nav__links--item">Contactanos</router-link>
        </section>
    </nav>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/lib/variables';

.nav {
    background-color: transparent;
    width: 100%;
    height: 15vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    &__links {

        &--item {
            font-size: 1.1rem;
            margin: 0 10px;
            color: map-get($Colors, 'Primary');
            text-shadow: 1px 1px 5px map-get($Colors, 'Secondary');
        }
    }
}
</style>

<script>
export default {
    name: 'PxNav'
}
</script>