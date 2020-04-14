<template>
    <div>
        <v-content>
            <v-container>
                <video-card></video-card>
                <video-card></video-card>
                <video-card></video-card>
                <video-card></video-card>
                <video-card></video-card>
                <video-card></video-card>
                <video-card></video-card>
                <video-card></video-card>
                <video-card></video-card>
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

    export default {
        components: {VideoCard},
        props: {
            source: String,
        },
        data: () => ({
            // dialog: false,
        }),
    }
</script>
