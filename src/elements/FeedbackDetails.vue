<template>
    <article>
        <p :class="styling">
            {{ feedback }}
        </p>

        <GenericButton 
            :text="status.value ? 'Next' : 'Play Again'"
            @click="status.value ? emit('getQuestion') : emit('playAgain')"
        />
    </article>
</template>

<script setup lang="ts">
    import { 
        computed, 
        ComputedRef 
    } from 'vue'
    import {
        IFeedback
    } from '@/interfaces'
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

    const gameOverMessage: string = status.hasWon ? 'YOU WON!' : 'YOU LOST!'
    const strikeMessage: string = 'You did not answer the question. YOU GET A STRIKE!'
    const answerMessage: string = `The answer was ${props.answer}. You were ${props.wasCorrect ? 'CORRECT' : 'INCORRECT'}!`

    let feedback: string = ''

    if (status.hasWon || status.hasLost) {
        feedback = gameOverMessage
    } else {
        if (!props.wasAnswered) {
            feedback = strikeMessage
        } else {
            feedback = answerMessage
        }
    }

    const styling: ComputedRef<IFeedback> = computed(() => {
        const red: boolean = status.hasLost || !props.wasAnswered || (props.wasAnswered && !props.wasCorrect)
        const green: boolean = status.hasWon || (props.wasAnswered && props.wasCorrect)
        const stylingObject: IFeedback = {
            red,
            green
        }

        return stylingObject
    })
</script>

<style scoped>
    article {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }

    .red {
        color: red;
    }

    .green {
        color: green;
    }
</style>
