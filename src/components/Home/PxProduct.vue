<template>
    <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
    >
        <v-img
        height="250"
        src="@/static/img/tequenos.webp"
        ></v-img>

        <v-card-title>Tequeños de Queso</v-card-title>

        <v-card-text>
        <!-- <v-row
            align="center"
            class="mx-0"
        >
            <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
            ></v-rating>

            <div class="grey--text ml-4">4.5 (413)</div>
        </v-row> -->

        <p>
            Deliciosos tequeños rellenos de queso.
        </p>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Promocion</v-card-title>
        <v-card-subtitle>Elije la cantidad de tequeños</v-card-subtitle>

        <v-card-text>
        <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
        >
            <v-chip>30 Tequeños</v-chip>
            <v-chip>40 Tequeños</v-chip>
            <v-chip>50 Tequeños</v-chip>
        </v-chip-group>
        </v-card-text>

        <v-card-actions>
        <v-btn
            color="deep-purple lighten-2"
            text
            @click="reserve"
        >
            Elegir
        </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
  export default {
        name: 'PxProduct',
        props: ['mainProducts'],
        data: () => ({
            loading: false,
            selection: null,
        }),

        created () {
            console.log(this.mainProducts)
        },

        methods: {
            reserve () {
                this.loading = true
                setTimeout(() => (this.loading = false), 2500)
            },
        },
  }
</script>