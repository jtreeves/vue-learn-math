<template>
    <li>
        <GenericButton 
            :text="stringChoice"
            :handleClick="store"
        />
    </li>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue'
    import GenericButton from './GenericButton.vue'

    export default defineComponent({
        components: {
            GenericButton
        },

        props: {
            choice: Number
        },

        data() {
            const stringChoice: string = String(this.choice)

            return { stringChoice }
        },

        methods: {
            store() {
                
            }
        }
    })
</script>

<style scoped>
    li {
        width: 200px;
    }
</style>
