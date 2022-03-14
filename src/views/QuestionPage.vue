<template>
    <main>
        <h1>Question</h1>
        
        <SingleQuestion 
            :currentQuestion="currentQuestion"
            @nextQuestion="updateQuestion"
        />
    </main>
</template>

<script lang='ts'>
    import { 
        reactive 
    } from 'vue'
    import { 
        IQuestion 
    } from '@/interfaces'
    import generateQuestion from '@/utilities/generateQuestion'
    import SingleQuestion from '@/elements/SingleQuestion.vue'

    export default {
        components: {
            SingleQuestion
        },

        setup() {
            const initialSet: IQuestion = generateQuestion(1, 'addition')
            const currentQuestion: IQuestion = reactive(initialSet)

            function updateQuestion(): void {
                const updatedSet: IQuestion = generateQuestion(1, 'addition')
                currentQuestion.question = updatedSet.question
                currentQuestion.choices = updatedSet.choices
            }

            return { 
                currentQuestion,
                updateQuestion
            }
        }
    }
</script>
