<template>
    <section>
        <h2>{{ question }}</h2>

        <ol>
            <ChoiceButton 
                v-for="choice in shuffledChoices"
                :key="choice"
                :choice="choice"
                :correct="determineCorrect(choice)"
                @nextQuestion="nextQuestion"
            />
        </ol>
    </section>
</template>

<script lang='ts'>
    import { 
        defineComponent, 
        computed, 
        ComputedRef 
    } from 'vue'
    import shuffleChoices from '@/utilities/shuffleChoices'
    import ChoiceButton from '@/elements/ChoiceButton.vue'

    export default defineComponent({
        components: {
            ChoiceButton
        },

        props: {
            currentQuestion: Object
        },

        setup(props, context) {
            const question: ComputedRef<string> = computed(
                (): string => {
                    const thisQuestion: string = props.currentQuestion?.question
                    
                    return thisQuestion
                }
            )

            const choices: ComputedRef<number[]> = computed(
                (): number[] => {
                    const thisChoices: number[] = props.currentQuestion?.choices

                    return thisChoices
                }
            )

            const shuffledChoices: ComputedRef<number[]> = computed(
                (): number[] => {
                    const thisChoices: number[] = shuffleChoices(choices.value)

                    return thisChoices
                }
            )

            function determineCorrect(
                answer: number
            ): boolean {
                if (choices.value.indexOf(answer) === 0) {
                    return true
                } else {
                    return false
                }
            }
            
            function nextQuestion(): void {
                context.emit('nextQuestion')
            }

            return { 
                question,
                choices,
                shuffledChoices,
                determineCorrect,
                nextQuestion
            }
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
