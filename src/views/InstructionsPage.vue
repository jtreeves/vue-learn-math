<template>
    <main>
        <h1>Instructions</h1>

        <CurrentInstruction 
            :step="step"
        />

        <aside>
            <GenericButton 
                v-if="step === 1"
                text="Back Home"
                @click="goHome"
            />
            
            <GenericButton 
                v-if="step !== 1"
                text="Previous Step"
                @click="loadPrevious"
            />
            
            <GenericButton 
                v-if="step !== 4"
                text="Next Step"
                @click="loadNext"
            />
            
            <GenericButton 
                v-if="step === 4"
                text="Play Game"
                @click="playGame"
            />
        </aside>
    </main>
</template>

<script setup lang="ts">
    import { 
        InstructionsComposable,
        LandingPagesComposable
    } from '@/interfaces'
    import useInstructions from '@/composables/useInstructions'
    import useLandingPages from '@/composables/useLandingPages'
    import GenericButton from '@/elements/GenericButton.vue'
    import CurrentInstruction from '@/articles/CurrentInstruction.vue'
    
    const {
        step,
        loadNext,
        loadPrevious
    }: InstructionsComposable = useInstructions()

    const {
        goHome,
        playGame
    }: LandingPagesComposable = useLandingPages()
</script>

<style scoped>
    aside {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
</style>
