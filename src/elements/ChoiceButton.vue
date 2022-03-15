<template>
    <li>
        <GenericButton 
            :text="stringChoice"
            :handleClick="grade"
        />
    </li>
</template>

<script setup lang='ts'>
    import {
        computed
    } from 'vue'
    import scoreState from '@/store/scoreState'
    import GenericButton from './GenericButton.vue'

    const props = defineProps<{
        choice: number
        correct: boolean
    }>()

    const emits = defineEmits<{
        (event: 'nextQuestion'): void
    }>()

    const stringChoice = computed<string>(
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

        emits('nextQuestion')
    }
</script>

<style scoped>
    li {
        width: 200px;
    }
</style>
