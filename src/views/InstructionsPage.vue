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
    import { defineComponent } from 'vue'
    import CurrentInstruction from '@/steps/CurrentInstruction.vue'
    import GenericButton from '@/elements/GenericButton.vue'

    export default defineComponent({
        components: {
            CurrentInstruction,
            GenericButton
        },
        data() {
            const step: string = this.$route.params.step as string

            return { step }
        },
        methods: {
            loadNext() {
                const currentStep: number = parseInt(this.step)
                const nextStep: number = currentStep + 1
                const nextString: string = String(nextStep)
                const nextRoute: string = '/instructions/' + nextString

                this.step = nextString
                this.$router.push(nextRoute)
            },
            loadPrevious() {
                const currentStep: number = parseInt(this.step)
                const previousStep: number = currentStep - 1
                const previousString: string = String(previousStep)
                const previousRoute: string = '/instructions/' + previousString

                this.step = previousString
                this.$router.push(previousRoute)
            },
            goHome() {
                this.$router.push('/home')
            },
            startGame() {
                this.$router.push('/question')
            }
        }
    })
</script>

<style scoped>
    aside {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
</style>
