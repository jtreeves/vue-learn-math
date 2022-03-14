<template>
    <li>
        <GenericButton 
            :text="stringChoice"
            :handleClick="grade"
        />
    </li>
</template>

<script lang='ts'>
    import {
        defineComponent,
        computed, 
        ComputedRef 
    } from 'vue'
    import scoreState from '@/store/scoreState'
    import GenericButton from './GenericButton.vue'

    export default defineComponent({
        components: {
            GenericButton
        },

        props: {
            choice: Number,
            correct: Boolean
        },

        setup(props, context) {
            const stringChoice: ComputedRef<string> = computed(
                (): string => {
                    const thisChoice: string = String(props.choice)
                    
                    return thisChoice
                }
            )

            function grade(): void {
                if (props.correct) {
                    scoreState.setScore(10)
                } else {
                    scoreState.setScore(-10)
                }
                context.emit('nextQuestion')
            }

            return { 
                stringChoice,
                grade
            }
        }
    })
</script>

<style scoped>
    li {
        width: 200px;
    }
</style>
