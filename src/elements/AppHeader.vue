<template>
    <header>
        <section>
            <RouterLink to="/home">
                <img
                    alt="Rubiks Cube"
                    src="@/assets/rubiks.jpg"
                >
            </RouterLink>

            <RouterLink to="/home">
                <span>
                    Learn Math
                </span>
            </RouterLink>
        </section>

        <ScoreBoard />
    </header>
</template>

<script setup lang="ts">
    import ScoreBoard from './ScoreBoard.vue'
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
