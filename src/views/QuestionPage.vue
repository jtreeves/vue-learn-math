<template>
    <main>
        <h1>Question</h1>

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
        IFeedbackStyling
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
        wasAnswered,
        wasCorrect,
        determineCorrect,
        updateQuestion,
        showAnswer,
        resetQuestion
    }: QuestionComposable = useQuestion()

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
        playTime(wasAnswered)
    })

    onUnmounted(() => {
        wasAnswered.value = true
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
        padding: 5px;
        border: 5px solid red;
    }

    .green {
        padding: 5px;
        border: 5px solid green;
    }
</style>
