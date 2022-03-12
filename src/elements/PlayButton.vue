<template>
    <button @click="play">
        Play
    </button>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue'

    export default defineComponent({
        methods: {
            play() {
                this.$router.push('/question')
            }
        }
    })
</script>

<style scoped>
    button {
        width: 200px;
        height: 50px;
        padding: 7px 11px;
        border-radius: 4px;
        border: none;
        background-color: darkblue;
        color: white;
        cursor: pointer;
        font-size: 13px;
    }
</style>
