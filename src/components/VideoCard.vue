<template>
    <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
    >
        <v-img
                height="250"
                src="https://img.yts.mx/assets/images/movies/queen_slim_2019/medium-cover.jpg"
        ></v-img>

        <v-card-title>Cafe Badilico</v-card-title>

        <v-card-text>
            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
            <v-btn
                    @click="reserve"
                    color="deep-purple lighten-2"
                    text
            >
                Reserve
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "VideoCard",
        data: () => ({
            loading: false,
            selection: 1,
        }),

        methods: {
            reserve() {
                this.loading = true;

                setTimeout(() => (this.loading = false), 2000)
            },
        },
    }
</script>

<style scoped>

</style>
