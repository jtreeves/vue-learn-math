<template>
    <article>
        <p>Your answer was: {{ props.selection }}</p>
        <p>The correct answer is: {{ props.answer }}</p>
        <p>You were {{ props.correct ? 'correct' : 'incorrect' }}</p>

        <GenericButton 
            text="Next"
            @click="emit('getQuestion')"
        />
    </article>
</template>

<script setup lang="ts">
    import GenericButton from './GenericButton.vue'

    const props = defineProps<{
        answer: number
        selection: number
        correct: boolean
    }>()

    const emit = defineEmits<{
        (event: 'getQuestion'): void
    }>()
</script>

<style scoped>
    article {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
</style>
