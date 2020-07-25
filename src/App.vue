<template>
    <v-app>
        <px-nav />
        <router-view />
        <px-footer />
    </v-app>
</template>

<style lang="scss">
@import './assets/scss/main.scss';
// -webkit-animation: char-9-body-animation 2.5s linear alternate infinite;
// animation: char-9-body-animation 2.5s linear alternate infinite;
</style>

<script>
import PxNav from '@/components/Global/PxNav';
import PxFooter from '@/components/Global/PxFooter';

export default {
    name: 'App',
    components: { PxFooter, PxNav }
}
</script>