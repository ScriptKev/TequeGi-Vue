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
                    <v-card v-for="(p , i) in mainProducts" :key="i" :loading="loading" class="mx-auto my-12 product" max-width="374">
                        <v-img class="product__img" height="250" :src="p.img"></v-img>

                        <v-card-title> {{ p.title }} </v-card-title>

                        <v-card-text>
                            <p>
                                {{ p.description }}
                            </p>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-actions>
                            <v-btn :to="{ name: 'TequeDetail', params: { id: p.id } }" color="deep-purple lighten-2" block text>
                                Elegir
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </section>
            </section>

            <section class="main__steps--container">
                <px-steps />
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
        margin: auto;
    }

    // Widgets

    &__widgets {
        max-width: 1440px;
        width: 90%;
        height: 220px;
        margin: auto;

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
            max-width: 1440px;
            width: 90%;
            margin: 50px auto auto auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
            column-gap: 20px;
            justify-items: center;
            align-content: center;


        }
    }

    &__steps--container {
        width: 100%;
        height: auto;
        margin-top: 50px;

        background-image: url('../../static/img/bg.png');
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        opacity: 1;
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;

    }
}

// Media Queries

@media only screen and (max-width: 1440px) {
    .main {
        
        &__products {

            &--grid {
                grid-template-columns: 1fr 1fr;
            }
        }
    }
}

@media only screen and (max-width: 940px) {
    .main {

        &__widgets {
            grid-template-columns: 1fr 1fr;
            row-gap: 50px;
            margin-top: 150px;
            height: min-content;
        }
    }
}

@media only screen and (max-width: 940px) {
    .main {
        
        &__products {

            &--grid {
                grid-template-columns: 1fr;
            }
        }
    }
}

@media only screen and (max-width: 500px) {
    .main {
        
        & .product {
            width: 320px;
        }
    }
}
</style>

<script>
import PxSteps from '@/components/Home/PxSteps';

export default {
    name: 'PxMain',
    components: { PxSteps },
    data () {
        return {
            // Data Form
            valid: true,
            clientName: '',
            clientNameRules: [
                v => !!v || 'El nombre y apellido es requrido',
                v => (v && v.length <= 25) || 'No puedes exceder mas de 25 caracteres',
            ],

            clientPhone: '',
            clientPhoneRules: [
                v => (v && v.length <= 11) || 'No puedes exceder mas de 11 caracteres',
                v => /^\d{0,11}$/.test(v) || 'Solo Numeros',
            ],

            // clientEmail: '',
            // cientEmailRules: [
            //     v => !!v || 'El correo es requerido',
            //     v => /.+@.+\..+/.test(v) || 'Este correo no es valido',
            // ],

            clientMsj: '',
            clientMsjRules: [
                v => !!v || 'El correo es requerido',
                v => (v && v.length <= 255) || 'No puedes exceder mas de 255 caracteres',
            ],

            dialog: false,
            loading:false,
            selection: '',
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
                    icon: require('@/static/icons/widget3-service.svg'),
                    title: 'Servicio',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, natus.'
                }
            ],

            mainProducts: [
                {
                    img: require('@/static/img/TequeQueso.svg'),
                    id: 'TequeQueso',
                    title: 'Tequeño de Queso',
                    type: 'Tequeño de Queso',
                    description: 'Tequeno relleno de queso'
                },

                {
                    img: require('@/static/img/TequeChoco.svg'),
                    id: 'TequeChoco',
                    title: 'Tequeño de Chocolate',
                    type: 'Tequeño de Chocolate',
                    description: 'Tequeno relleno de chocolate'
                },

                {
                    img: require('@/static/img/TequeBocadillo.svg'),
                    id: 'TequeBocadillo',
                    title: 'Tequeño de Bocadillo',
                    type: 'Tequeño de Bocadillo',
                    description: 'Tequeño relleno de bocadillo'
                },

                {
                    img: require('@/static/img/TequePersonalizado.svg'),
                    id: 'Personalizado',
                    title: 'Personalizado',
                    type: 'Personalizado',
                    description: 'Personalizamos el relleno de tus tequeños!'
                },
            ]
        }
    },

    methods: {
        selectProduct(e){
            console.log(e)
        }
    },
}
</script>