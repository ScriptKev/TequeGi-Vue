<template>
    <div class="TequeDetail">
        <px-nav />

        <section class="TequeDetail__grid">

            <figure class="TequeDetail__img">
                <img :src="productDetail.img" alt="img" width="100%">
            </figure>
<!-- `../static/img/${this.$route.params.id}.svg` -->
            <div class="TequeDetail__title">
                <h2>Tequeño tal</h2>
                <small>Mini Descripcion</small>
            </div>

            <div class="TequeDetail__description">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br>
                    Saepe ipsam laborum obcaecati, voluptatem provident sequi!
                </p>
            </div>

            <v-form class="TequeDetail__sumbit" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field
                            prepend-icon="mdi-account-circle"
                            :counter="25"
                            label="Nombre y Apellido"
                            required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                            <v-text-field
                            prepend-icon="mdi-phone"
                            :counter="11"
                            hint="Omita espacios y guiones"
                            persistent-hint
                            label="Telefono"
                            required
                            prefix="+58"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-btn block>Realizar Pedido</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.TequeDetail {
    width: 100%;
    height: 90vh;

    &__grid {
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 15% 1fr 1fr;
        grid-template-areas:    "img title"
                                "img description"
                                "sumbit sumbit";
        column-gap: 30px;
        justify-items: center;
        align-content: center;

        & .TequeDetail__img {
            grid-area: img;

            & img {
                border-radius: 10px;
            }
        }

        & .TequeDetail__title {
            grid-area: title;
        }

        & .TequeDetail__description {
            grid-area: description;
        }

        & .TequeDetail__sumbit {
            grid-area: sumbit
        }
    }
}
</style>

<script>
import PxNav from '@/components/Global/PxNav';

export default {
    name: 'TequeDetail',
    components: { PxNav },
    data () {
        return {
            productDetail: { img: require('@/static/img/TequeQueso.svg'),}
        }
    },

    created () {
        this.getProduct();
        console.log(this.$route.params.id);

    },

    methods: {
        getProduct () {
            const id = this.$route.params.id
        }
    }
}
</script>