<template>
    <li>
        <GenericButton 
            :text="stringChoice"
            :handleClick="grade"
        />
    </li>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue'
    import scoreState from '@/store/scoreState'
    import GenericButton from './GenericButton.vue'

    export default defineComponent({
        components: {
            GenericButton
        },
        props: {
            choice: Number,
            correct: Boolean
        },
        data() {
            const stringChoice: string = String(this.choice)

            return { stringChoice }
        },
        methods: {
            grade(): void {
                if (this.correct) {
                    scoreState.setScore(10)
                } else {
                    scoreState.setScore(-10)
                }
            }
        }
    })
</script>

<style scoped>
    li {
        width: 200px;
    }
</style>
