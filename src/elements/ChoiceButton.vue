<template>
    <li>
        <GenericButton 
            :text="props.choice.toString()"
            :class="styling"
            @click="grade"
        />
    </li>
</template>

<script setup lang="ts">
    import {
        ref,
        Ref,
        computed,
        ComputedRef
    } from 'vue'
    import {
        IChoiceStyling
    } from '@/interfaces'
    import time from '@/store/time'
    import status from '@/store/status'
    import updateScore from '@/utilities/updateScore'
    import GenericButton from './GenericButton.vue'

    const props = defineProps<{
        choice: number
        level: number
        wasAnswered: boolean
        isCorrect: boolean
    }>()

    const emit = defineEmits<{
        (
            event: 'getFeedback',
            isCorrect: boolean
        ): void
    }>()

    const wasClicked: Ref<boolean> = ref(false)

    const styling: ComputedRef<IChoiceStyling> = computed(() => {
        const muted: boolean = props.wasAnswered || time.value === 0 || status.hasWon || status.hasLost
        const red: boolean = !props.isCorrect && (time.value === 0 || props.wasAnswered) && wasClicked.value
        const green: boolean = props.isCorrect && (time.value === 0 || props.wasAnswered)
        const stylingObject: IChoiceStyling = {
            muted,
            red,
            green
        }

        return stylingObject
    })

    function grade(): void {
        if (!props.wasAnswered && time.value !== 0) {
            wasClicked.value = true
            updateScore(props.level, props.isCorrect)
            emit('getFeedback', props.isCorrect)
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
