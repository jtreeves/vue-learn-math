<template>
    <li>
        <GenericButton 
            :text="props.choice.toString()"
            @click="grade"
        />
    </li>
</template>

<script setup lang="ts">
    import timeState from '@/store/timeState'
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
        if (!props.wasAnswered && timeState.time !== 0) {
            updateScore(props.level, props.isCorrect)
            emit('getFeedback', props.choice, props.isCorrect)
        }
    }
</script>

<style scoped>
    li {
        width: 200px;
    }
</style>
