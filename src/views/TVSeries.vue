<template>
    <div>
        <v-content>
            <v-container>
                <video-card
                        :key="movie._id"
                        :movie="movie"
                        :type="type"
                        v-for="movie of tvSeries">
                </video-card>
            </v-container>
        </v-content>
        <v-btn
                bottom
                color="pink"
                dark
                fab
                fixed
                right
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>

<script>
    import VideoCard from "../components/VideoCard";
    import http from "../plugins/http";

    export default {
        name: "TVSeries",
        components: {VideoCard},
        data: () => ({
            tvSeries: [],
            type: 'tv-series'
        }),
        created() {
            this.getTvSeries();
        },
        methods: {
            getTvSeries() {
                http.getFiles().then(result => {
                    console.log(result);
                    this.tvSeries = result.data.filter(file => file.type === "tv-series")
                })
            }
        }
    }
</script>

<style scoped>

</style>
