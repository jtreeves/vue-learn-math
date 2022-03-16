<template>
    <footer>
        © {{ year }}
    </footer>
</template>

<script setup lang="ts">
    const now: Date = new Date()
    const year: number = now.getFullYear()
</script>

<style scoped>
    footer {
        display: flex;
        color: #ccc;
        justify-content: center;
        width: 100%;
        margin-top: 50px;
        margin-bottom: 50px;
        font-size: 13px;
        line-height: 13px;
    }
</style>
