<template>
    <div class="contact">
        <h2>Tienes alguna duda? <br> Escribenos!</h2>

    <div class="contact__container">
        <div class="contact__results">
            <h4 class="results__clientName">
                <div class="results__clientName--welcome">Hola! </div><div class="results__clientName--name">{{ clientName }}</div>
            </h4>

            <span class="results__clientPhone">
                Recibiremos su mensaje con su numero <i>{{ clientPhone }}</i>
            </span>
        </div>

        <v-form class="form" ref="form" v-model="valid" lazy-validation>
            <v-text-field
            v-model="clientName"
            prepend-icon="mdi-account-circle"
            :counter="25"
            :rules="clientNameRules"
            label="Nombre y Apellido"
            required
            ></v-text-field>

            <v-text-field
            v-model="clientPhone"
            prepend-icon="mdi-phone"
            :counter="11"
            :rules="clientPhoneRules"
            hint="Omita espacios y guiones"
            persistent-hint
            label="Telefono"
            required
            prefix="+58"
            ></v-text-field>

            <!-- <v-text-field
            v-model="clientEmail"
            prepend-icon="mdi-email"
            :rules="cientEmailRules"
            label="E-mail"
            required
            ></v-text-field> -->

            <v-textarea
            v-model="clientMsj"
            prepend-icon="mdi-comment"
            :counter="255"
            :rules="clientMsjRules"
            auto-grow
            clearable
            clear-icon="mdi-close"
            placeholder="Cual es su duda?"
            required
            ></v-textarea>

            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate" >
            Enviar
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
            Limpiar 
            </v-btn>
        </v-form>

        <section class="form__results">
            <div class="results"></div>
        </section>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/lib/variables';

.contact {
    margin-top: 80px;
    text-align: center;
}

.contact__container {
    margin-top: 20px;
    width: 100%;
    height: 100%;
    max-height: 630px;
    max-width: 1440px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:    "results resultsOne"
                            "results form"
                            "results .";
    justify-items: center;
    align-items: center;

    & .contact__results{
        grid-area: resultsOne;

        & .results__clientName {
            &--welcome {
                font-size: 30px;
            }

            &--name {
                font-size: 20px;
                color: map-get($Colors, 'Primary');
                text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.199);
            }
        }

        & .results__clientPhone {

            & i {
                color: map-get($Colors, 'Primary');
                text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.199);
            }
        }
    }

    & .form {
        width: 80%;
        grid-area: form;

        input {
            display: block;
            width: 100%;
            height: 40px;
        }
    }

    & .form__results {
        grid-area: results;
        width: 100%;
        height: 100%;

        & .results {
            position: relative;
            width: 100%;
            height: 100%;
            background-image: url('../../static/img/Phone.svg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
}

.form {
    width: 550px;
    margin: auto;
}
</style>

<script>
export default {
    name: 'PxFormContact',
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
            ]
        }
    },

    methods: {
        formContactSumbit(){
            console.log('funciona')
            //   message = yourMessage.split(' ').join('%20')
        },

        validate () {
            this.$refs.form.validate()
        },

        reset () {
            this.$refs.form.reset()
        },
    }
}
</script>