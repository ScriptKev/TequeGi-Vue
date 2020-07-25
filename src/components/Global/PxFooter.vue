<template>
    <footer class="footer">
        <h2>@TequeGi 2020</h2>
    </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/lib/variables';

.footer {
    color: map-get($Colors, 'Primary' );
    margin-top: 50px;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 500px) {
    .footer {
        margin-top: 130px;
    }
}
</style>

<script>
export default {
    name: 'PxFooter'
}
</script>