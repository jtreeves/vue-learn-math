<template>
    <GenericButton
        text="Play Game"
        :handleClick="play"
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
            play() {
                this.$router.push('/question')
            }
        }
    })
</script>
