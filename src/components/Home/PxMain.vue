<template>
    <main class="main">
        <div class="main__container">
            <!-- Main Widgets -->
            <section class="main__widgets">
                <article class="widget" v-for='( w, i ) in widgetsItem' :key="i">
                    <figure class="widget__icon--container">
                        <img :src="w.icon" :alt="w.title" class="widget__icon" width="90px">
                    </figure>

                    <section class="widget__title">
                        <h4> {{ w.title }} </h4>
                    </section>

                    <section class="widget__description">
                        <p> {{ w.description }} </p>
                    </section>
                </article>
            </section>

            <!-- Main Products -->
            <section class="main__products">
                <section class="main__products--title">
                    <h2>Nuestros Tequeños</h2>
                </section>

                <section class="main__products--grid">
                    <article class="product" v-for='( p, i ) in mainProducts' :key='i'>
                        <figure class="product__img">
                            <img src="" :alt="p.title">
                        </figure>

                        <section class="product__name">
                            <h4> {{ p.title }} </h4>
                        </section>

                        <section class="product__shortDescription">
                            <p> {{ p.description }} </p>
                        </section>
                    </article>
                </section>
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.main {
    height: auto;
    width: 100%;

    &__container {
        width: 100%;
        height: 100%;
        max-width: 1440px;
    }

    // Widgets

    &__widgets {
        max-width: 1440px;
        width: 90%;
        height: 220px;
        margin: -100px auto 0 auto;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 220px;
        column-gap: 30px;
    }

    & .widget {
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.527);
        border-radius: 10px;

        &__icon--container {
            display:flex;
            justify-content: center;
            align-items: center;
        }

        &__title {
            text-align: center;
            margin-top: 10px;
        }

        &__description {
            text-align: center;
        }

    }

    // Products

    &__products {
        margin-top: 50px;

        &--title {
            text-align: center;
        }

        &--grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
            gap: 10px 50px;

            & .product {
                background: #dbdbdba4;
            }
        }
    }
}
</style>

<script>
export default {
    name: 'PxMain',
    data () {
        return {
            widgetsItem: [
                {
                    icon: require('@/static/icons/widget1-quality.svg'),
                    title: 'Calidad',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, natus.'
                },

                {
                    icon: require('@/static/icons/widget2-delivery.svg'),
                    title: 'Delivery',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, natus.'
                },

                {
                    icon: require('@/static/icons/widget2-delivery.svg'),
                    title: 'Servicio',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, natus.'
                }
            ],

            mainProducts: [
                {
                    img: require('@/static/img/tequenos.webp'),
                    title: 'Tequeno de Queso',
                    description: 'Tequeno relleno de queso'
                },

                {
                    img: require('@/static/img/tequenos.webp'),
                    title: 'Tequeno de Queso',
                    description: 'Tequeno relleno de queso'
                },

                {
                    img: require('@/static/img/tequenos.webp'),
                    title: 'Tequeno de Queso',
                    description: 'Tequeno relleno de queso'
                },
            ]
        }
    }
}
</script>