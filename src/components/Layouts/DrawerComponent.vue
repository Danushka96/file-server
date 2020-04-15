<template>
    <v-navigation-drawer
            :clipped="$vuetify.breakpoint.lgAndUp"
            app
            v-model="drawer"
    >
        <v-list dense>
            <v-list-item-group
                    active-class="blue--text text--accent-4"
                    v-model="group"
            >
                <template v-for="item in items">
                    <v-list-item
                            :key="item.text"
                            @click="redirect(item.path)"
                            link
                    >
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "DrawerComponent",
        data: () => ({
            drawer: null,
            items: [
                {icon: 'mdi-contacts', text: 'Movies', path: '/home'},
                {icon: 'mdi-history', text: 'TV Series', path: '/tv'},
                {icon: 'mdi-content-copy', text: 'Upload', path: '/upload'},
            ],
            group: '',
        }),
        methods: {
            redirect(path) {
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped>

</style>
