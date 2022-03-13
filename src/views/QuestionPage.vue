<template>
    <main>
        <h1>Question</h1>
        <h2>{{ question }}</h2>

        <ol>
            <ChoiceButton 
                v-for="choice in choices"
                :key="choice"
                :choice="choice"
            />
        </ol>

        <button @click="scoreState.setScore(10)">
            Increase Score By 10
        </button>

        <button @click="timeState.playTime(false)">
            Start Countdown Clock
        </button>
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
    import scoreState from '@/store/scoreState'
    import timeState from '@/store/timeState'
    import statusState from '@/store/statusState'
    import strikesState from '@/store/strikesState'
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
            
            return { 
                question,
                choices,
                scoreState,
                statusState,
                timeState,
                strikesState
            }
        }
    }
</script>

<style scoped>
    ol {
        list-style-type: upper-latin;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
</style>
