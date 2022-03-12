<template>
    <app-header />
    <router-view />
    <app-footer />
</template>

<script lang='ts'>
    import AppHeader from '@/elements/AppHeader.vue'
    import AppFooter from '@/elements/AppFooter.vue'

    export default {
        components: {
            AppHeader,
            AppFooter
        }
    }
</script>

<style>
    #app {
        text-align: center;
        color: #2c3e50;
        min-height: 100vh;
        display: grid;
        grid-template-rows: 100px auto 113px;
    }

    body {
        font-family: 'Courier New', Courier, monospace;
        margin: 10px;
    }

    a:link, a:visited {
        text-decoration: none;
        color: inherit;
    }
</style>
