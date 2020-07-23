<template>
    <div class="Home">
        <px-header />
        <px-main />
        <px-form-contact />
    </div>
</template>

<script>
import PxHeader from '@/components/Home/PxHeader';
import PxMain from '@/components/Home/PxMain';
import PxFormContact from '@/components/Home/PxFormContact';

export default {
    name: 'Home',
    components: { PxHeader, PxMain, PxFormContact }
}
</script>