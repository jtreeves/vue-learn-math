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
                    :correct="determineCorrect(choice)"
                    :level="level"
                    :answered="wasAnswered"
                    @get-feedback="showAnswer"
                />
            </ol>

            <FeedbackDetails 
                v-if="wasAnswered"
                :answer="answer"
                :selection="selection"
                :correct="wasCorrect"
                @get-question="updateQuestion"
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
