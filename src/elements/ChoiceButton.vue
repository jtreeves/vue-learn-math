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
        computed, 
        ComputedRef
    } from 'vue'
    import {
        ExtractedProps,
        Emitter
    } from '@/types'
    import scoreState from '@/store/scoreState'
    import GenericButton from './GenericButton.vue'

    const props: ExtractedProps = defineProps({
        choice: Number,
        correct: Boolean
    })

    const emits: Emitter = defineEmits(['nextQuestion'])

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

        emits('nextQuestion')
    }
</script>

<style scoped>
    li {
        width: 200px;
    }
</style>
