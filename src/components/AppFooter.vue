<template>
    <footer>
        © {{ year }}
    </footer>
</template>

<script>
    import { computed } from 'vue'

    export default {
        setup () {
            const year = computed(() => new Date().getFullYear())
            return { year }
        }
    }
</script>

<style scoped>
    footer {
        display: flex;
        color: #ccc;
        justify-content: center;
    }
</style>
