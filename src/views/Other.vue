<template>
    <div>
        <v-content>
            <v-container>
                <video-card
                        :key="other._id"
                        :movie="other"
                        :type="type"
                        v-for="other of others">
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
            others: [],
            type: 'other'
        }),
        created() {
            this.getMovies();
        },
        methods: {
            getMovies() {
                http.getFiles().then(result => {
                    console.log(result);
                    this.others = result.data.filter(file => file.type === "other")
                })
            }
        }
    }
</script>
