<template>
    <article>
        <p>Your answer was: {{ props.selection }}</p>
        <p>The correct answer is: {{ props.answer }}</p>
        <p>You were {{ props.wasCorrect ? 'correct' : 'incorrect' }}</p>
        <p
            v-if="!props.wasAnswered"
        >
            You did not answer the question. You get a strike!
        </p>

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
        wasCorrect: boolean
        wasAnswered: boolean
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
