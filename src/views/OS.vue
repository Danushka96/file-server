<template>
    <div>
        <v-content>
            <v-container>
                <video-card
                        :key="o._id"
                        :movie="o"
                        :type="type"
                        v-for="o of os">
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
        components: {VideoCard},
        props: {
            source: String,
        },
        data: () => ({
            os: [],
            type: 'movies'
        }),
        created() {
            this.getOS();
        },
        methods: {
            getOS() {
                http.getFiles().then(result => {
                    console.log(result);
                    this.os = result.data.filter(file => file.type === "os")
                })
            }
        }
    }
</script>
