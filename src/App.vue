<template>
    <div class="App">
        <px-nav />
        <router-view />
        <px-footer />
    </div>
</template>

<script>
import PxNav from '@/components/Global/PxNav';
import PxFooter from '@/components/Global/PxFooter';

export default {
    name: 'App',
    components: { PxNav, PxFooter }
}
</script>