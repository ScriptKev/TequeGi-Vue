<template>
    <div class="contact">
        <h2>Tienes alguna duda? <br> Escribenos!</h2>

    <div class="contact__container">
        <div class="contact__results">
            <h4 class="results__clientName">
                Hola! {{ clientName }}
            </h4>

            <span class="results__clientPhone">
                {{ clientPhone }}
            </span>
        </div>

        <form class="form">
            <input type="text" v-model="clientName" name="clientName" id="clientName" placeholder="Nombre y Apellido" /> <br>
            <input type="tel" v-model="clientPhone" name="clientPhone" id="clientPhone" placeholder="Telefono" /> <br>
            <input type="text" v-model="clientMsj" name="clientMsj" id="clientMsj" placeholder="Mensaje" /> <br>
            <input type="submit" value="Enviar" @click.prevent="formContactSumbit">
        </form>

        <div class="contact__results2">
            <span class="results__clientMsj">
                Tu mensaje {{ clientMsj }} sera recibido y atendido
            </span>
        </div>

        <section class="form__results">
            <div class="results"></div>
        </section>
    </div>
</div>
</template>

<style lang="scss" scoped>
.contact {
    margin-top: 80px;
    text-align: center;
}

.contact__container {
    background-color: #dddddd;
    margin-top: 20px;
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:    "results resultsOne"
                            "results form"
                            "results resultsTwo";
    justify-items: center;
    align-items: center;

    & .contact__results{
        grid-area: resultsOne;

        & h4 {
            font-size: 30px;
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

    & .contact__results2 {
        grid-area: resultsTwo;
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
</style>

<script>
export default {
    name: 'PxFormContact',
    data () {
        return {
            clientName: '',
            clientPhone: '',
            clientMsj: ''
        }
    },

    methods: {
        formContactSumbit(){
            console.log('funciona')
        }
    }
}
</script>