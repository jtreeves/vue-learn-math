<template>
    <article>
        <p :class="props.styling">
            {{ feedback }}
        </p>

        <GenericButton 
            :text="buttonText"
            @click="handleClick"
        />
    </article>
</template>

<script setup lang="ts">
    import {
        computed, 
        ComputedRef
    } from 'vue'
    import {
        IFeedbackStyling
    } from '@/interfaces'
    import status from '@/store/status'
    import score from '@/store/score'
    import GenericButton from './GenericButton.vue'

    const props = defineProps<{
        answer: number
        wasCorrect: boolean
        wasAnswered: boolean,
        styling: IFeedbackStyling
    }>()

    const emit = defineEmits<{
        (event: 'getQuestion'): void,
        (event: 'playAgain'): void
    }>()

    const feedback: ComputedRef<string> = computed(() => {
        if (status.hasWon || status.hasLost) {
            const winMessage: string = `You got ${score.value} points and won!`
            const loseMessage: string = 'You got 3 strikes and lost!'
            const gameOverMessage: string = status.hasWon ? winMessage : loseMessage

            return gameOverMessage
        } else {
            if (!props.wasAnswered) {
                const strikeMessage: string = 'You did not answer the question. YOU GOT A STRIKE!'

                return strikeMessage
            } else {
                const answerMessage: string = `The answer was ${props.answer}. You were ${props.wasCorrect ? 'CORRECT' : 'INCORRECT'}!`

                return answerMessage
            }
        }
    })

    const buttonText: ComputedRef<string> = computed(() => {
        let text: string = ''

        if (status.value) {
            text = 'Next'
        } else {
            text = 'Play Again'
        }

        return text
    })

    function handleClick(): void {
        if (status.value) {
            emit('getQuestion')
        } else {
            emit('playAgain')
        }
    }
</script>

<style scoped>
    article {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
    }

    .red {
        color: red;
    }

    .green {
        color: green;
    }
</style>
