<template>
    <v-app id="inspire">
        <v-content>
            <v-container
                    class="fill-height"
            >
                <v-row
                >
                    <video-card></video-card>
                </v-row>
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
    </v-app>
</template>

<script>
    import VideoCard from "../components/VideoCard";
    export default {
        name: "TVSeries",
        components: {VideoCard}
    }
</script>

<style scoped>

</style>
