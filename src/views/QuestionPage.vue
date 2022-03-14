<template>
    <main>
        <h1>Question</h1>
        
        <SingleQuestion />
    </main>
</template>

<script lang='ts'>
    import scoreState from '@/store/scoreState'
    import timeState from '@/store/timeState'
    import statusState from '@/store/statusState'
    import strikesState from '@/store/strikesState'
    import SingleQuestion from '@/elements/SingleQuestion.vue'

    export default {
        components: {
            SingleQuestion
        },
        setup() {
            return { 
                scoreState,
                statusState,
                timeState,
                strikesState
            }
        }
    }
</script>
