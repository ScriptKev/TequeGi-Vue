<template>
    <v-app>
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
import {mapState} from 'vuex'
import PxFooter from '@/components/Global/PxFooter';

export default {
    name: 'App',
    components: { PxFooter },

    methods: {
        openModal(){
            console.log(this.modal)
        }
    },

    computed: {
        ...mapState(['modal'])
    }
}
</script>