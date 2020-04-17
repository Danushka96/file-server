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
                            <v-col sm="3">
                                <div>{{movie.size}} KB</div>
                            </v-col>
                            <v-col sm="1">
                                <v-btn @click="deleteConfirmFile()" icon>
                                    <v-icon color="red">mdi-delete</v-icon>
                                </v-btn>
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
                                        <a :href="getBaseUrl() + '/' + movie.folderId + '/' + file"
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
        <v-dialog
                max-width="290"
                v-model="dialog"
        >
            <v-card>
                <v-card-title class="headline">You Sure?</v-card-title>

                <v-card-text>
                    <h3>Deleting files:</h3>
                    <br>
                    <p :key="file" v-for="file of movie.files"><b>{{file}}</b></p>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            @click="dialog = false"
                            color="green darken-1"
                            text
                    >
                        Disagree
                    </v-btn>

                    <v-btn
                            @click="deleteFile()"
                            color="red darken-1"
                            text
                    >
                        Agree
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
        data: () => ({
            dialog: false,
        }),
        methods: {
            getBaseUrl() {
                return http.getBaseURL();
            },
            deleteConfirmFile() {
                this.dialog = true;
                console.log(this.movie._id)
            },
            deleteFile() {
                this.dialog = false;
                http.deleteFile(this.movie._id).then((res => {
                    console.log(res);
                    this.$emit('refresh')
                }))
            },
        },
    }
</script>

<style scoped>

</style>
