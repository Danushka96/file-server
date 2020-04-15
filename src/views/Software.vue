<template>
    <div>
        <v-content>
            <v-container>
                <video-card
                        :key="soft._id"
                        :movie="soft"
                        :type="type"
                        v-for="soft of software">
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
            software: [],
            type: 'software'
        }),
        created() {
            this.getSoftware();
        },
        methods: {
            getSoftware() {
                http.getFiles().then(result => {
                    console.log(result);
                    this.software = result.data.filter(file => file.type === "software")
                })
            }
        }
    }
</script>
