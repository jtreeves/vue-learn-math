<template>
    <main>
        <h1>Home</h1>

        <img
            alt="Rubiks Cube"
            src="@/assets/rubiks.jpg"
        >

        <PlayButton />
    </main>
</template>

<script lang='ts'>
    import PlayButton from '@/elements/PlayButton.vue'

    export default {
        components: {
            PlayButton
        }
    }
</script>

<style scoped>
    img {
        height: 300px;
        width: 300px;
    }
</style>
