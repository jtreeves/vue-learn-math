<template>
    <main>
        <h1>Question</h1>

        <section>
            <h2>{{ question }}</h2>

            <ol>
                <ChoiceButton 
                    v-for="choice in choices"
                    :key="choice"
                    :choice="choice"
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
                :selection="selection"
                :was-answered="wasAnswered"
                :was-correct="wasCorrect"
                @get-question="updateQuestion"
                @play-again="resetQuestion"
            />
        </section>
    </main>
</template>

<script setup lang="ts">
    import {
        onMounted
    } from 'vue'
    import { 
        QuestionComposable 
    } from '@/interfaces'
    import playTime from '@/utilities/playTime'
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

    onMounted(() => {
        playTime(wasAnswered)
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
    }
</style>
