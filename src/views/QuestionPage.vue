<template>
    <main>
        <h1>Question</h1>

        <section>
            <h2>{{ question }}</h2>

            <ol>
                <ChoiceButton 
                    v-for="choice in shuffledChoices"
                    :key="choice"
                    :choice="choice"
                    :correct="determineCorrect(choice)"
                    @nextQuestion="updateQuestion"
                />
            </ol>
        </section>
    </main>
</template>

<script setup lang='ts'>
    import { 
        QuestionComposable 
    } from '@/interfaces'
    import useQuestion from '@/composables/useQuestion'
    import ChoiceButton from '@/elements/ChoiceButton.vue'
    
    const {
        question,
        shuffledChoices,
        determineCorrect,
        updateQuestion
    }: QuestionComposable = useQuestion()
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
