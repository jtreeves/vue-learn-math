<template>
    <header>
        <section>
            <router-link to="/home">
                <img
                    alt="Rubiks Cube"
                    src="@/assets/rubiks.jpg"
                >
            </router-link>

            <router-link to="/home">
                <span>
                    Learn Math
                </span>
            </router-link>
        </section>

        <ScoreBoard />
    </header>
</template>

<script lang='ts'>
    import ScoreBoard from './ScoreBoard.vue'

    export default {
        components: {
            ScoreBoard
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: 0 20px;
        align-items: center;
        height: 100px;
        gap: 20px;
        justify-content: space-between;
    }

    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }

    span {
        font-size: 50px;
    }

    section {
        display: flex;
        align-items: center;
        gap: 30px;
    }
</style>
