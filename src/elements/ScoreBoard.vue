<template>
    <section>
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
    import score from '@/store/score'
    import time from '@/store/time'
    import strikes from '@/store/strikes'
</script>

<style scoped>
    article {
        padding: 10px;
        border: 3px solid darkblue;
    }
</style>
