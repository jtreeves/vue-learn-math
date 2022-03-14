<template>
    <section>
        <FirstInstruction v-if="step === '1'" />
        <SecondInstruction v-if="step === '2'" />
        <ThirdInstruction v-if="step === '3'" />
    </section>
</template>

<script lang='ts'>
    import FirstInstruction from './FirstInstruction.vue'
    import SecondInstruction from './SecondInstruction.vue'
    import ThirdInstruction from './ThirdInstruction.vue'

    export default {
        components: {
            FirstInstruction,
            SecondInstruction,
            ThirdInstruction
        },
        
        props: {
            step: String
        }
    }
</script>
