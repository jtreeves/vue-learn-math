<template>
    <GenericButton
        text="Read Instructions"
        :handleClick="read"
    />
</template>

<script lang='ts'>
    import { defineComponent } from 'vue'
    import GenericButton from './GenericButton.vue'

    export default defineComponent({
        components: {
            GenericButton
        },
        methods: {
            read() {
                this.$router.push('/instructions/1')
            }
        }
    })
</script>
