<template>
    <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useTWAStore } from './stores/twaStore';

onMounted(() => {
    useTWAStore().webApp.ready();
})
</script>
