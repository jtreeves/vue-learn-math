<template>
    <footer>
        © {{ year }}
    </footer>
</template>

<script lang='ts'>
    import {
        computed,
        ComputedRef
    } from 'vue'

    export default {
        setup () {
            const year: ComputedRef<number> = computed(
                (): number => {
                    const now: Date = new Date()
                    const currentYear: number = now.getFullYear()
                    return currentYear
                }
            )
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
