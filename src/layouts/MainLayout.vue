<template>
    <v-app>
        <AppNavigation></AppNavigation>
        <DrawerComponent></DrawerComponent>
        <router-view></router-view>
    </v-app>
</template>

<script>
    import AppNavigation from "../components/AppNavigation";
    import DrawerComponent from "../components/DrawerComponent";
    export default {
        name: "MainLayout",
        components: {DrawerComponent, AppNavigation},
    }
</script>

<style scoped>

</style>
