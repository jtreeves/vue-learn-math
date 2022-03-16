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
                v-if="wasAnswered || timeState.time === 0"
                :answer="answer"
                :selection="selection"
                :was-answered="wasAnswered"
                :was-correct="wasCorrect"
                @get-question="updateQuestion"
            />
        </section>
    </main>
</template>

<script setup lang="ts">
    import {
        onMounted,
        watch
    } from 'vue'
    import { 
        QuestionComposable 
    } from '@/interfaces'
    import playTime from '@/utilities/playTime'
    import timeState from '@/store/timeState'
    import strikesState from '@/store/strikesState'
    import useQuestion from '@/composables/useQuestion'
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
        showAnswer
    }: QuestionComposable = useQuestion()

    onMounted(() => {
        playTime(wasAnswered)
    })

    watch(() => timeState.time, (newTime, oldTime) => {
        if (
            timeState.time === 0 && 
            newTime !== oldTime && 
            !wasAnswered.value
        ) {
            strikesState.incrementStrikes()
        }
    })
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
