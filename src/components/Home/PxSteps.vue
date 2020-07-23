<template>
    <section class="steps">
        <div class="steps__container">
            <article class="step__primary">
                <section class="step__primary--title">
                    <i>01</i>
                    <h2>Elije</h2>
                </section>

                <section class="step__primary--description">
                    <p>
                        Tienes toda una seleccion tequeños espectaculares por elejir
                    </p>
                </section>

                <figure class="step__primary--img">
                    <img src="" alt="Ilustracion">
                </figure>
            </article>

            <article class="step__secondary">
                <section class="step__secondary--title">
                    <i>02</i>
                    <h2>Llena <br> El <br> Formulario</h2>
                </section>

                <section class="step__secondary--description">
                    <p>Tienes toda una seleccion</p>
                </section>

                <figure class="step__secondary--img">
                    <img src="" alt="Ilustracion">
                </figure>
            </article>

            <article class="step__tertiary">
                <section class="step__tertiary--title">
                    <i>03</i>
                    <h2>Confirmaremos <br> Tu <br> Pedido</h2>
                </section>

                <section class="step__tertiary--description">
                    <p>Tienes toda una seleccion</p>
                </section>

                <figure class="step__tertiary--img">
                    <img src="" alt="Ilustracion">
                </figure>
            </article>

            <article class="step__quaternary">
                <section class="step__quaternary--title">
                    <i>04</i>
                    <h2>Disfruta <br> Tu <br> Delivery</h2>
                </section>

                <section class="step__quaternary--description">
                    <p>Recibiras a domicilio tus deliciosos tequeños</p>
                </section>

                <figure class="step__quaternary--img">
                    <img src="" alt="Ilustracion">
                </figure>
            </article>

            <figure class="step__end">
                <img src="" alt="ilustracion">
            </figure>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.steps {
    width: 90%;
    height: auto;
    margin: auto;

    &__container {
        max-width: 1440px;

        & .step__primary {
            display: grid;
            grid-template-columns: 1fr 60% 200px;
            grid-template-rows: 300px;
            grid-template-areas:    ". step1Description step1Title";
            justify-items: center;
            align-items: center;

            &--title {
                cursor: default;
                width: 100%;
                height: 100%;
                grid-area: step1Title;
                background-color: #161616;
                color: white;
                text-align: center;
                border-radius: 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 1s;
                box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.63);
                position: relative;


                &:hover {
                    transform: scale(1.1);
                    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.808);
                }

                & i {
                    position: absolute;
                    font-size: 150px;
                    color:rgba(255, 255, 255, 0.315);
                }

                & h2 {
                    margin: 0 5px;
                }
            }

            &--description {
                grid-area: step1Description;
                width: 100%;
                height: 100%;
                background-color: #ffffff91;
                color: black;
                text-align: center;
                border-radius: 8px 0 0 8px;

                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        & .step__secondary {
            margin-top: 100px;
            display: grid;
            grid-template-columns: 200px 60% 1fr;
            grid-template-rows: 300px;
            grid-template-areas:    "step2Title step2Description .";
            justify-items: center;
            align-items: center;

            &--title {
                grid-area: step2Title;
                cursor: default;
                width: 100%;
                height: 100%;
                background-color: #161616;
                color: white;
                text-align: center;
                border-radius: 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 1s;
                box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.63);

                &:hover {
                    transform: scale(1.1);
                    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.808);
                }

                & i {
                    position: absolute;
                    font-size: 150px;
                    color:rgba(255, 255, 255, 0.315);
                }

                & h2 {
                    margin: 0 5px;
                }
            }

            &--description {
                grid-area: step2Description;
                width: 100%;
                height: 100%;
                background-color: #ffffff91;
                color: black;
                text-align: center;
                border-radius: 8px 0 0 8px;

                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        & .step__tertiary {
            margin-top: 100px;
            display: grid;
            grid-template-columns: 1fr 60% 200px;
            grid-template-rows: 300px;
            grid-template-areas:    ". step3Description step3Title";
            justify-items: center;
            align-items: center;

            &--title {
                grid-area: step3Title;
                cursor: default;
                width: 100%;
                height: 100%;
                background-color: #161616;
                color: white;
                text-align: center;
                border-radius: 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 1s;
                box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.63);

                &:hover {
                    transform: scale(1.1);
                    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.808);
                }

                & i {
                    position: absolute;
                    font-size: 150px;
                    color:rgba(255, 255, 255, 0.315);
                }

                & h2 {
                    margin: 0 5px;
                }
            }

            &--description {
                grid-area: step3Description;
                width: 100%;
                height: 100%;
                background-color: #ffffff91;
                color: black;
                text-align: center;
                border-radius: 8px 0 0 8px;

                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        & .step__quaternary {
            margin-top: 100px;
            display: grid;
            grid-template-columns: 200px 60% 1fr;
            grid-template-rows: 300px;
            grid-template-areas:    "step4Title step4Description .";
            justify-items: center;
            align-items: center;

            &--title {
                grid-area: step4Title;
                cursor: default;
                width: 100%;
                height: 100%;
                background-color: #161616;
                color: white;
                text-align: center;
                border-radius: 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 1s;
                box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.63);

                &:hover {
                    transform: scale(1.1);
                    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.808);
                }

                & i {
                    position: absolute;
                    font-size: 150px;
                    color:rgba(255, 255, 255, 0.315);
                }

                & h2 {
                    margin: 0 5px;
                    // text-transform: uppercase;
                }
            }

            &--description {
                grid-area: step4Description;
                width: 100%;
                height: 100%;
                background-color: #ffffff91;
                color: black;
                text-align: center;
                border-radius: 8px 0 0 8px;

                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        & .step__end {
            width: 80%;
            height: auto;
            margin: 100px auto auto auto;
            display: flex;
            justify-content: center;
        }
    }
}
</style>

<script>
export default {
    name: 'PxSteps'
}
</script>