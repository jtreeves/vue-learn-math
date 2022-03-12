<template>
    <button @click="handleClick">
        {{ text }}
    </button>
</template>

<script lang='ts'>
    export default {
        props: {
            text: String,
            handleClick: Function
        }
    }
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
