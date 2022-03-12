<template>
    <main>
        <h1>Question</h1>
        <h2>{{ question }}</h2>

        <ul>
            <li>{{ choices[0] }}</li>
            <li>{{ choices[1] }}</li>
            <li>{{ choices[2] }}</li>
            <li>{{ choices[3] }}</li>
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

    export default {
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
