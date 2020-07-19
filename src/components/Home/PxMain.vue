<template>
    <main class="main">
        <section class="main__widget--primary">
            Hola
        </section>
    </main>
</template>

<style lang="scss" scoped>
.main {
    height: auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-content: center;
    justify-items: center;

    &__widget--primary {
        margin: -40px auto 0 auto;

    }
}
</style>

<script>
export default {
    name: 'PxMain'
}
</script>