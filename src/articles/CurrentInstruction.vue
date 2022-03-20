<template>
    <BasicRules v-if="props.step === 1" />
    <SingleQuestion v-if="props.step === 2" />
    <ProvidedFeedback v-if="props.step === 3" />
    <EndConditions v-if="props.step === 4" />
</template>

<script setup lang="ts">
    import BasicRules from './BasicRules.vue'
    import SingleQuestion from './SingleQuestion.vue'
    import ProvidedFeedback from './ProvidedFeedback.vue'
    import EndConditions from './EndConditions.vue'

    const props = defineProps<{
        step: number
    }>()
</script>

<style scoped>
    article {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
</style>
