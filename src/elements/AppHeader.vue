<template>
    <header>
        <section>
            <RouterLink to="/home">
                <img
                    alt="Rubiks Cube"
                    src="@/assets/rubiks.jpg"
                />
            </RouterLink>

            <RouterLink to="/home">
                <span>
                    Math Attack!
                </span>
            </RouterLink>
        </section>

        <ScoreBoard v-if="shouldShow" />
    </header>
</template>

<script setup lang="ts">
    import {
        ref,
        Ref,
        watch
    } from 'vue'
    import {
        useRoute,
        RouteLocationNormalizedLoaded
    } from 'vue-router'
    import ScoreBoard from './ScoreBoard.vue'

    const route: RouteLocationNormalizedLoaded = useRoute()
    const shouldShow: Ref<boolean> = ref(false)

    watch(() => route.path, (newPath, oldPath) => {
        if (
            route.path === '/question' && 
            newPath !== oldPath
        ) {
            shouldShow.value = true
        } else if (
            route.path !== '/question' && 
            newPath !== oldPath
        ) {
            shouldShow.value = false
        }
    })
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
        object-fit: cover;
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

    @media screen and (max-width: 1000px) {
        header {
            flex-direction: column;
            border-bottom: none;
        }
    }
</style>
