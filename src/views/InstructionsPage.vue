<template>
    <main>
        <h1>Instructions</h1>

        <p>Learn how to play the game.</p>

        <p>Current step: {{ step }}</p>

        <CurrentInstruction 
            :step="step"
        />

        <aside>
            <GenericButton 
                v-if="step === '1'"
                text="Back Home"
                :handleClick="goHome"
            />
            
            <GenericButton 
                v-if="step === '2' || step === '3'"
                text="Previous Step"
                :handleClick="loadPrevious"
            />
            
            <GenericButton 
                v-if="step === '1' || step === '2'"
                text="Next Step"
                :handleClick="loadNext"
            />
            
            <GenericButton 
                v-if="step === '3'"
                text="Play Game"
                :handleClick="startGame"
            />
        </aside>
    </main>
</template>

<script setup lang='ts'>
    import { 
        InstructionsComposable 
    } from '@/interfaces'
    import useInstructions from '@/composables/useInstructions'
    import GenericButton from '@/elements/GenericButton.vue'
    import CurrentInstruction from '@/articles/CurrentInstruction.vue'
    
    const {
        step,
        loadNext,
        loadPrevious,
        goHome,
        startGame
    }: InstructionsComposable = useInstructions()
</script>

<style scoped>
    aside {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
</style>
