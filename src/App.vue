<template>
    <div class="App">
        <!-- <px-nav /> -->
        <router-view />
        <px-footer />
    </div>
</template>

<style lang="scss">
@import './assets/scss/main.scss';

</style>

<script>
import PxFooter from '@/components/Global/PxFooter';

export default {
    name: 'App',
    components: { PxFooter },
}
</script>