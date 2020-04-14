<template>
    <v-row>
        <v-card class="mx-auto my-2" width="80%">
            <v-card-text>
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
                        <v-icon>mdi-download</v-icon>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-row>
</template>

<script>
    export default {
        name: "VideoCard",
        props: [
            'movie'
        ],
        data: () => ({}),
        methods: {},
    }
</script>

<style scoped>

</style>
