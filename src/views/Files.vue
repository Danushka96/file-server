<template>
    <div>
        <v-content>
            <v-container>
                <video-card
                        :key="movie._id"
                        :movie="movie"
                        :type="type"
                        v-for="movie of getFiles">
                </video-card>
            </v-container>
        </v-content>
        <v-btn
                @click="dialog = true"
                bottom
                color="pink"
                dark
                fab
                fixed
                right
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-dialog
                max-width="800"
                v-model="dialog"
        >
            <v-card>
                <Upload :type="type"></Upload>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import VideoCard from "../components/VideoCard";
    import Upload from "./Upload";

    export default {
        components: {Upload, VideoCard},
        props: {
            source: String,
        },
        data: () => ({
            type: 'movies',
            dialog: false
        }),
        computed: {
            getFiles() {
                return this.$store.getters.getFiles.filter(file => file.type === this.type)
            },
            getType() {
                return this.$store.getters.getType;
            }
        },
        watch: {
            getType(newVal) {
                this.type = newVal
            }
        },
        methods: {
            emitRefresh() {
                this.$emit('refresh')
            }
        }
    }
</script>
<style scoped>
    .v-card {
        border-radius: 1rem;
    }
</style>
