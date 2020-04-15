<template>
    <v-row justify="center">
        <v-col sm="10">
            <v-expansion-panels class="mb-6" dark>
                <v-expansion-panel
                >
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                        <v-row>
                            <v-col sm="1">
                                <v-icon>mdi-folder-open</v-icon>
                            </v-col>
                            <v-col sm="4">
                                <div>{{movie.name}}</div>
                            </v-col>
                            <v-col sm="3">
                                <div>{{movie.date}}</div>
                            </v-col>
                            <v-col sm="4">
                                <div>{{movie.size}} KB</div>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-card :key="file.name" flat hover v-for="file of movie.files">
                            <v-card-text>
                                <v-row>
                                    <v-col sm="10">
                                        <b>{{file}}</b>
                                    </v-col>
                                    <v-col sm="2">
                                        <a :href="getBaseUrl() +'/' + type + '/' + movie._id + '/' + file"
                                           target="_blank">
                                            <v-btn icon>
                                                <v-icon>mdi-download</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
    </v-row>
</template>

<script>
    import http from "../plugins/http";

    export default {
        name: "VideoCard",
        props: [
            'movie',
            'type'
        ],
        data: () => ({}),
        methods: {
            getBaseUrl() {
                return http.getBaseURL();
            }
        },
    }
</script>

<style scoped>

</style>
