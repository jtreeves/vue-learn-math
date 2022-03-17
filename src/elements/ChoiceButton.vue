<template>
    <li>
        <GenericButton 
            :text="props.choice.toString()"
            :class="{ 
                muted: props.wasAnswered || 
                time.value === 0 ||
                status.hasWon ||
                status.hasLost
            }"
            @click="grade"
        />
    </li>
</template>

<script setup lang="ts">
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
            choice: number,
            isCorrect: boolean
        ): void
    }>()

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
