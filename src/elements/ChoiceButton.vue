<template>
    <li>
        <GenericButton 
            :text="props.choice.toString()"
            @click="grade"
        />
    </li>
</template>

<script setup lang="ts">
    import scoreState from '@/store/scoreState'
    import GenericButton from './GenericButton.vue'

    const props = defineProps<{
        choice: number
        correct: boolean
    }>()

    const emit = defineEmits<{
        (
            event: 'getFeedback', 
            choice: number,
            correct: boolean
        ): void
    }>()

    function grade(): void {
        if (props.correct) {
            scoreState.setScore(10)
        } else {
            scoreState.setScore(-10)
        }

        emit('getFeedback', props.choice, props.correct)
    }
</script>

<style scoped>
    li {
        width: 200px;
    }
</style>
