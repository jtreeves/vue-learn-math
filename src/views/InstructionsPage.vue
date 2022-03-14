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

<script lang='ts'>
    import {
        ref, 
        Ref 
    } from 'vue'
    import { 
        RouteLocationNormalizedLoaded, 
        Router, 
        useRoute, 
        useRouter
    } from 'vue-router'
    import CurrentInstruction from '@/steps/CurrentInstruction.vue'
    import GenericButton from '@/elements/GenericButton.vue'

    export default {
        components: {
            CurrentInstruction,
            GenericButton
        },

        setup() {
            const route: RouteLocationNormalizedLoaded = useRoute()
            const router: Router = useRouter()
            const step: Ref<string> = ref(String(route.params.step))

            function loadNext(): void {
                const currentStep: number = parseInt(step.value)
                const nextStep: number = currentStep + 1
                const nextString: string = String(nextStep)
                const nextRoute: string = '/instructions/' + nextString

                step.value = nextString
                router.push(nextRoute)
            }

            function loadPrevious(): void {
                const currentStep: number = parseInt(step.value)
                const previousStep: number = currentStep - 1
                const previousString: string = String(previousStep)
                const previousRoute: string = '/instructions/' + previousString

                step.value = previousString
                router.push(previousRoute)
            }

            function goHome(): void {
                router.push('/home')
            }

            function startGame(): void {
                router.push('/question')
            }

            return { 
                step,
                loadNext,
                loadPrevious,
                goHome,
                startGame
            }
        }
    }
</script>

<style scoped>
    aside {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
</style>
