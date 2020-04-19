<template>
    <v-app style="background-color: #FAFAFA">
        <AppNavigation></AppNavigation>
        <DrawerComponent></DrawerComponent>
        <router-view></router-view>
    </v-app>
</template>

<script>
    import AppNavigation from "../components/Layouts/AppNavigation";
    import DrawerComponent from "../components/Layouts/DrawerComponent";

    export default {
        name: "MainLayout",
        components: {DrawerComponent, AppNavigation},
        created() {
            this.$store.dispatch('getFiles');
        },
    }
</script>

<style scoped>

</style>
