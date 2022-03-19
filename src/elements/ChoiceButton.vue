<template>
    <li :class="feedbackStyling">
        <GenericButton 
            :text="props.choice.toString()"
            :class="mutedStyling"
            @click="grade"
        />
    </li>
</template>

<script setup lang="ts">
    import {
        computed,
        ComputedRef
    } from 'vue'
    import {
        IMutedStyling,
        IFeedbackStyling
    } from '@/interfaces'
    import time from '@/store/time'
    import status from '@/store/status'
    import updateScore from '@/utilities/updateScore'
    import GenericButton from './GenericButton.vue'

    const props = defineProps<{
        choice: number
        selection: number
        level: number
        wasAnswered: boolean
        isCorrect: boolean
    }>()

    const emit = defineEmits<{
        (
            event: 'getFeedback',
            choice: number,
            isCorrect: boolean
        ): void
    }>()

    const mutedStyling: ComputedRef<IMutedStyling> = computed(() => {
        const muted: boolean = props.wasAnswered || time.value === 0 || status.hasWon || status.hasLost
        const stylingObject: IMutedStyling = {
            muted
        }

        return stylingObject
    })

    const feedbackStyling: ComputedRef<IFeedbackStyling> = computed(() => {
        const red: boolean = !props.isCorrect && (time.value === 0 || props.wasAnswered) && props.selection === props.choice
        const green: boolean = props.isCorrect && (time.value === 0 || props.wasAnswered)
        const stylingObject: IFeedbackStyling = {
            red,
            green
        }

        return stylingObject
    })

    function grade(): void {
        if (!props.wasAnswered && time.value !== 0) {
            updateScore(props.level, props.isCorrect)
            emit('getFeedback', props.choice, props.isCorrect)
        }
    }
</script>

<style scoped>
    li {
        width: 200px;
    }

    .muted {
        cursor: default;
        background-color: slateblue;
    }

    .muted:hover {
        font-weight: normal;
    }
</style>
