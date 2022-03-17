<template>
    <section>
        <article>
            Status: {{ status.value }}
        </article>

        <article>
            Strikes: {{ strikes.value }}
        </article>

        <article>
            Time: {{ time.value }}
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
    import status from '@/store/status'
</script>
