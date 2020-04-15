<template>
    <div>
        <v-content>
            <v-container>
                <video-card
                        :key="movie._id"
                        :movie="movie"
                        :type="type"
                        v-for="movie of movies">
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
            movies: [],
            type: 'movies'
        }),
        created() {
            this.getMovies();
        },
        methods: {
            getMovies() {
                http.getFiles().then(result => {
                    console.log(result);
                    this.movies = result.data.filter(file => file.type === "movies")
                })
            }
        }
    }
</script>
