<template>
    <app-header />
    <app-footer />
    <router-view />
</template>

<script lang='ts'>
    import { defineComponent } from 'vue'
    import AppHeader from '@/components/AppHeader.vue'
    import AppFooter from '@/components/AppFooter.vue'

    export default defineComponent({
        name: 'App',
        components: {
            AppHeader,
            AppFooter
        }
    })
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-align: center;
        color: #2c3e50;
    }
</style>
