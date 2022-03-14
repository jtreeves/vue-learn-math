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
                :handleClick="read"
            />

            <GenericButton
                text="Play Game"
                :handleClick="play"
            />
        </aside>
    </main>
</template>

<script lang='ts'>
    import {
        Router,
        useRouter
    } from 'vue-router'
    import GenericButton from '@/elements/GenericButton.vue'

    export default {
        components: {
            GenericButton
        },

        setup() {
            const router: Router = useRouter()

            function play(): void {
                router.push('/question')
            }

            function read(): void {
                router.push('/instructions/1')
            }

            return {
                play,
                read
            }
        }
    }
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
