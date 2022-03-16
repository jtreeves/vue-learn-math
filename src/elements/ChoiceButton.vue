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
        correct: boolean
        answered: boolean
        level: number
    }>()

    const emit = defineEmits<{
        (
            event: 'getFeedback', 
            choice: number,
            correct: boolean
        ): void
    }>()

    function grade(): void {
        if (!props.answered && timeState.time !== 0) {
            updateScore(props.level, props.correct)
            emit('getFeedback', props.choice, props.correct)
        }
    }
</script>

<style scoped>
    li {
        width: 200px;
    }
</style>
