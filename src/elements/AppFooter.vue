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
        setup() {
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
        width: 100%;
        margin-top: 50px;
        margin-bottom: 50px;
        font-size: 13px;
        line-height: 13px;
    }
</style>
