<template>
    <article>
        <FirstInstruction v-if="props.step === 1" />
        <SecondInstruction v-if="props.step === 2" />
        <ThirdInstruction v-if="props.step === 3" />
    </article>
</template>

<script setup lang="ts">
    import FirstInstruction from './FirstInstruction.vue'
    import SecondInstruction from './SecondInstruction.vue'
    import ThirdInstruction from './ThirdInstruction.vue'

    const props = defineProps<{
        step: number
    }>()
</script>
