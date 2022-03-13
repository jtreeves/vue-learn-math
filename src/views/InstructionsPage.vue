<template>
    <main>
        <h1>Instructions</h1>

        <p>Learn how to play the game.</p>

        <p>Current step: {{ step }}</p>

        <section>
            <GenericButton 
                text="Previous Step"
                :handleClick="loadPrevious"
            />
            
            <GenericButton 
                text="Next Step"
                :handleClick="loadNext"
            />
        </section>
    </main>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue'
    import GenericButton from '@/elements/GenericButton.vue'

    export default defineComponent({
        components: {
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
            }
        }
    })
</script>

<style scoped>
    section {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
</style>
