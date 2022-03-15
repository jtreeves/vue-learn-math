<template>
    <button @click="props.handleClick">
        {{ props.text }}
    </button>
</template>

<script setup lang='ts'>
    const props = defineProps<{
        text: string
        handleClick: () => void
    }>()
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
        font: inherit;
    }

    button:hover {
        font-weight: bold;
    }
</style>
