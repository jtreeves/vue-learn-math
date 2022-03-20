<template>
    <section :class="styling">
        <article>
            Strikes: {{ strikes.value }}
        </article>

        <article>
            Time: {{ time.value }}s
        </article>

        <article>
            Score: {{ score.value }}
        </article>
    </section>
</template>

<script setup lang="ts">
    import {
        computed,
        ComputedRef
    } from 'vue'
    import {
        IBoardStyling
    } from '@/interfaces'
    import score from '@/store/score'
    import time from '@/store/time'
    import strikes from '@/store/strikes'
    import status from '@/store/status'

    const styling: ComputedRef<IBoardStyling> = computed(() => {
        const red: boolean = status.hasLost
        const green: boolean = status.hasWon
        const blue: boolean = !red && !green
        const stylingObject: IBoardStyling = {
            red,
            green,
            blue
        }

        return stylingObject
    })
</script>

<style scoped>
    article {
        padding: 10px;
        border-radius: 4px;
        width: 125px;
    }

    .red article {
        border: 3px solid red;
    }

    .green article {
        border: 3px solid green;
    }

    .blue article {
        border: 3px solid darkblue;
    }
</style>
