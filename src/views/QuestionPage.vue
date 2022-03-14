<template>
    <main>
        <h1>Question</h1>
        
        <SingleQuestion 
            :currentQuestion="currentQuestion"
            @nextQuestion="nextQuestion"
        />
    </main>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue'
    import { IQuestion } from '@/interfaces'
    import generateQuestion from '@/utilities/generateQuestion'
    import SingleQuestion from '@/elements/SingleQuestion.vue'

    export default defineComponent({
        components: {
            SingleQuestion
        },
        data() {
            const currentQuestion: IQuestion = generateQuestion(1, 'addition')

            return { 
                currentQuestion
            }
        },
        methods: {
            nextQuestion() {
                this.currentQuestion = generateQuestion(1, 'addition')
            }
        }
    })
</script>
