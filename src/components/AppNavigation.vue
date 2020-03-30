<template>
    <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            color="blue darken-3"
            dark
    >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title
                style="width: 300px"
                class="ml-0 pl-4"
        >
            <span class="hidden-sm-and-down">File Server</span>
        </v-toolbar-title>
        <v-text-field
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
                class="hidden-sm-and-down"
        />
        <v-spacer />
        <v-btn icon>
            <v-icon>mdi-apps</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-bell</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppNavigation",
        data: () => ({
            drawer: null,
        })
    }
</script>

<style scoped>

</style>
