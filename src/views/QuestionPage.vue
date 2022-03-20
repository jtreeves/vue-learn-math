<template>
    <main>
        <h1 :class="headingStyling">
            {{ heading }}
        </h1>

        <section>
            <h2>{{ question }}</h2>

            <ol :class="styling">
                <ChoiceButton 
                    v-for="choice in choices"
                    :key="choice"
                    :choice="choice"
                    :selection="selection"
                    :level="level"
                    :was-answered="wasAnswered"
                    :is-correct="determineCorrect(choice)"
                    @get-feedback="showAnswer"
                />
            </ol>

            <FeedbackDetails 
                v-if="
                    wasAnswered || 
                    time.value === 0 ||
                    status.hasWon ||
                    status.hasLost
                "
                :answer="answer"
                :was-answered="wasAnswered"
                :was-correct="wasCorrect"
                :styling="styling"
                @get-question="updateQuestion"
                @play-again="resetQuestion"
            />
        </section>
    </main>
</template>

<script setup lang="ts">
    import {
        onMounted,
        onUnmounted,
        computed,
        ComputedRef
    } from 'vue'
    import { 
        QuestionComposable,
        IFeedbackStyling,
        IHeadingStyling
    } from '@/interfaces'
    import playTime from '@/utilities/playTime'
    import resetGame from '@/utilities/resetGame'
    import time from '@/store/time'
    import status from '@/store/status'
    import useQuestion from '@/composables/useQuestion'
    import useWatchers from '@/composables/useWatchers'
    import ChoiceButton from '@/elements/ChoiceButton.vue'
    import FeedbackDetails from '@/elements/FeedbackDetails.vue'
    
    const {
        question,
        choices,
        answer,
        selection,
        level,
        timerId,
        wasAnswered,
        wasCorrect,
        determineCorrect,
        updateQuestion,
        showAnswer,
        resetQuestion
    }: QuestionComposable = useQuestion()

    const heading: ComputedRef<string> = computed(() => {
        let text: string = ''

        if (status.hasWon) {
            text = 'YOU WIN!'
        } else if (status.hasLost) {
            text = 'YOU LOSE!'
        } else {
            text = 'Question'
        }

        return text
    })
    
    const headingStyling: ComputedRef<IHeadingStyling> = computed(() => {
        const redText: boolean = status.hasLost
        const greenText: boolean = status.hasWon
        const stylingObject: IHeadingStyling = {
            redText,
            greenText
        }

        return stylingObject
    })
    
    const styling: ComputedRef<IFeedbackStyling> = computed(() => {
        const red: boolean = status.hasLost || (time.value === 0 && !wasAnswered.value) || (wasAnswered.value && !wasCorrect.value)
        const green: boolean = status.hasWon || (wasAnswered.value && wasCorrect.value)
        const stylingObject: IFeedbackStyling = {
            red,
            green
        }

        return stylingObject
    })

    onMounted(() => {
        resetGame()
        playTime(timerId, wasAnswered)
    })

    onUnmounted(() => {
        clearInterval(timerId.value)
        setTimeout(resetGame, 1000)
    })

    useWatchers(wasAnswered)
</script>

<style scoped>
    section {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    ol {
        list-style-type: upper-latin;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        width: 300px;
        align-self: center;
    }

    .red {
        padding: 10px;
        border: 5px solid red;
        border-radius: 4px;
    }

    .green {
        padding: 10px;
        border: 5px solid green;
        border-radius: 4px;
    }

    .redText {
        color: red;
    }

    .greenText {
        color: green;
    }
</style>
