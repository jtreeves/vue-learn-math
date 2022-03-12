<template>
    <AppHeader />
    <RouterView />
    <AppFooter />
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

    ul {
        list-style: none;
    }

    ul, ol, h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        padding: 50px;
    }

    h1 {
        line-height: 50px;
        font-size: 50px;
        height: 50px;
    }

    h2 {
        line-height: 30px;
        font-size: 30px;
        height: 30px;
    }
</style>
