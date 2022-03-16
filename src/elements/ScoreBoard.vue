<template>
    <section>
        <article>
            Status: {{ statusState.status }}
        </article>

        <article>
            Strikes: {{ strikesState.strikes }}
        </article>

        <article>
            Time: {{ timeState.time }}
        </article>

        <article>
            Score: {{ scoreState.score }}
        </article>
    </section>
</template>

<script setup lang="ts">
    import scoreState from '@/store/scoreState'
    import timeState from '@/store/timeState'
    import strikesState from '@/store/strikesState'
    import statusState from '@/store/statusState'
</script>
