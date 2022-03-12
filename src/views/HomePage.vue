<template>
    <main>
        <h1>Home</h1>

        <img
            alt="Rubiks Cube"
            src="@/assets/rubiks.jpg"
        >

        <p>Test your arithmetic skills with this online game.</p>

        <PlayButton />
        <InstructionsButton />
    </main>
</template>

<script lang='ts'>
    import PlayButton from '@/elements/PlayButton.vue'
    import InstructionsButton from '@/elements/InstructionsButton.vue'

    export default {
        components: {
            PlayButton,
            InstructionsButton
        }
    }
</script>

<style scoped>
    img {
        height: 300px;
        width: 300px;
    }
</style>
