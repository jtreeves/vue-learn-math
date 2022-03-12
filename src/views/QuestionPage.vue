<template>
    <main>
        <h1>Question</h1>
        <h2>{{ question }}</h2>

        <ul>
            <ChoiceButton 
                v-for="choice in choices"
                :key="choice"
                :choice="choice"
            />
        </ul>
    </main>
</template>

<script lang='ts'>
    import {
        computed,
        ComputedRef
    } from 'vue'
    import {
        IQuestion
    } from '@/interfaces'
    import generateQuestion from '@/utilities/generateQuestion'
    import ChoiceButton from '@/elements/ChoiceButton.vue'

    export default {
        components: {
            ChoiceButton
        },

        setup() {
            const questionSet: IQuestion = generateQuestion(1, 'addition')

            const question: ComputedRef<string> = computed(
                (): string => {
                    const thisQuestion: string = questionSet.question
                    
                    return thisQuestion
                }
            )

            const choices: ComputedRef<number[]> = computed(
                (): number[] => {
                    const thisChoices: number[] = questionSet.choices

                    return thisChoices
                }
            )
            
            return { question, choices }
        }
    }
</script>
