<template>
    <main>
        <h1>Home</h1>

        <img
            alt="Rubiks Cube"
            src="@/assets/rubiks.jpg"
        >

        <p>Test your arithmetic skills with this online game.</p>

        <aside>
            <GenericButton
                text="Read Instructions"
                @click="readInstructions"
            />

            <GenericButton
                text="Play Game"
                @click="playGame"
            />
        </aside>
    </main>
</template>

<script setup lang="ts">
    import {
        LandingPagesComposable
    } from '@/interfaces'
    import useLandingPages from '@/composables/useLandingPages'
    import GenericButton from '@/elements/GenericButton.vue'

    const {
        playGame,
        readInstructions
    }: LandingPagesComposable = useLandingPages()
</script>

<style scoped>
    img {
        height: 300px;
        width: 300px;
    }

    aside {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
</style>
