<template>
<!--    <v-content>-->
        <v-container
        >
            <div class="file-upload">
                <v-file-input
                        :show-size="1000"
                        color="deep-purple accent-4"
                        counter
                        label="File input"
                        multiple
                        outlined
                        placeholder="Select your files"
                        prepend-icon="mdi-paperclip"
                        v-model="files"
                >
                    <template v-slot:selection="{ index, text }">
                        <v-chip
                                color="deep-purple accent-4"
                                dark
                                label
                                small
                                v-if="index < 2"
                        >
                            {{ text }}
                        </v-chip>

                        <span
                                class="overline grey--text text--darken-3 mx-2"
                                v-else-if="index === 2"
                        >
                            +{{ files.length - 2 }} File(s)
                        </span>
                    </template>
                </v-file-input>
                <v-text-field
                        label="Display Name"
                        outlined
                        v-model="displayName">
                </v-text-field>
                <div :style="{'width': progress}" class="progess-bar" v-if="progress">
                    <v-progress-linear
                            color="amber"
                            height="25"
                            reactive
                            v-model="progress"
                    ></v-progress-linear>
                    {{progress}}
                </div>
                <button :disabled="!this.files.length > 0 && uploadBtn" @click="onUploadFile"
                        class="upload-button">Upload file
                </button>
            </div>
            <v-snackbar
                    color="success"
                    multi-line
                    right
                    top
                    v-model="responseSnackBar"
            >
                {{ message }}
                <v-btn
                        @click="snackbar = false"
                        dark
                        text
                >
                    Close
                </v-btn>
            </v-snackbar>
        </v-container>
    <!--    </v-content>-->
</template>

<script>
    import axios from "axios";
    import config from "../config"

    export default {
        name: 'Upload',
        props: [
            'type'
        ],
        data() {
            return {
                progress: 0,
                files: [],
                responseSnackBar: '',
                message: '',
                displayName: '',
                uploadBtn: true,
            };
        },
        watch: {
            files: function (newVal) {
                if (this.displayName === '' && newVal.length > 0) {
                    console.log(newVal);
                    this.displayName = newVal[0].name.replace(/\./g, ' ');
                }
            }
        },
        methods: {
            onUploadFile() {
                this.uploadBtn = false;
                const formData = new FormData();
                this.files.forEach(file => formData.append("file_" + Math.random(), file));
                formData.append("path", this.type);
                formData.append("displayName", this.displayName);
                // sending file to the backend
                axios
                    .post(`${config.BASEURL}/upload`, formData, {
                        onUploadProgress: ProgressEvent => {
                            this.progress = Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100)
                                + "%";
                        }
                    })
                    .then(() => {
                        this.responseSnackBar = true;
                        this.message = "Uploaded Successfully";
                        this.files = [];
                        this.progress = 0;
                        this.displayName = '';
                        this.$store.dispatch('getFiles');
                    })
                    .catch(err => {
                        this.responseSnackBar = true;
                        this.message = "Something went wrong with the server, Try Again";
                        console.log(err);
                    });
            },
        }
    };
</script>

<style scoped>
    .file-upload {
        box-shadow: 2px 2px 9px 2px #ccc;
        border-radius: 1rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 1rem;
        margin: -10px -10px -10px -10px;
    }

    input {
        font-size: 0.9rem;
    }

    input,
    div,
    button {
        margin-top: 2rem;
    }

    .upload-button {
        width: 7rem;
        padding: 0.5rem;
        background-color: #278be9;
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        border-radius: 1rem;
    }

    .upload-button:disabled {
        background-color: #b3bcc4;
        cursor: no-drop;
    }
</style>
