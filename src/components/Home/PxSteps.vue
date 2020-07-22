<template>
    <section class="steps">
        <div class="steps__container">
            <article class="step__primary">
                <section class="step__primary--title">
                    <i>01</i>
                    <h2>Elije</h2>
                </section>

                <section class="step__primary--description">
                    <p>Tienes toda una seleccion</p>
                </section>
            </article>

            <article class="step__secondary">
                <section class="step__secondary--title">
                    <h2>Elije</h2>
                </section>

                <section class="step__secondary--description">
                    <p>Tienes toda una seleccion</p>
                </section>
            </article>

            <article class="step__tertiary">
                <section class="step__tertiary--title">
                    <h2>Elije</h2>
                </section>

                <section class="step__tertiary--description">
                    <p>Tienes toda una seleccion</p>
                </section>
            </article>
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
            grid-template-rows: 100px;
            grid-template-areas:    ". step1Description step1Title";

            &--title {
                width: 100%;
                height: 100%;
                grid-area: step1Title;
                background-color: #161616;
                color: white;
                text-align: center;
                border-radius: 8px;
            }

            &--description {
                grid-area: step1Description;
                width: 100%;
                height: 100%;
                background-color: #ffffff91;
                color: black;
                text-align: center;
                border-radius: 8px 0 0 8px;
            }
        }

        & .step__secondary {
            display: grid;
            grid-template-columns: 200px 1fr 1fr;
            grid-template-rows: 1fr;
            grid-template-areas:    "step2Title step2Description .";
            justify-items: center;
            align-items: center;

            &--title {
                grid-area: step2Title;
            }

            &--description {
                grid-area: step2Description;
            }
        }

        & .step__tertiary {
            display: grid;
            grid-template-columns: 1fr 1fr 200px;
            grid-template-rows: 1fr;
            grid-template-areas:    ". step3Description step3Title";
            justify-items: center;
            align-items: center;

            &--title {
                grid-area: step3Title;
            }

            &--description {
                grid-area: step3Description;
            }
        }
    }
}
</style>

<script>
export default {
    name: 'PxSteps'
}
</script>