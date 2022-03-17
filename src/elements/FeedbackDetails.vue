<template>
    <article>
        <p>
            Your answer was: {{ props.selection }}
        </p>

        <p>
            The correct answer is: {{ props.answer }}
        </p>
        
        <p>
            You were {{ props.wasCorrect ? 'correct' : 'incorrect' }}
        </p>

        <p v-if="!props.wasAnswered">
            You did not answer the question. You get a strike!
        </p>

        <p v-if="status.hasWon">
            You won!
        </p>

        <p v-if="status.hasLost">
            You lost!
        </p>

        <GenericButton 
            v-if="status.value"
            text="Next"
            @click="emit('getQuestion')"
        />

        <GenericButton 
            v-if="!status.value"
            text="Play Again"
            @click="emit('playAgain')"
        />
    </article>
</template>

<script setup lang="ts">
    import status from '@/store/status'
    import GenericButton from './GenericButton.vue'

    const props = defineProps<{
        answer: number
        selection: number
        wasCorrect: boolean
        wasAnswered: boolean
    }>()

    const emit = defineEmits<{
        (event: 'getQuestion'): void,
        (event: 'playAgain'): void
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
