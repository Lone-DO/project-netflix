<script lang='ts' setup>
import { useAppStore } from '@/stores/app';
/** On mount, logout of AppStore and redirect */
const appStore = useAppStore();

onMounted(() => {
  appStore.reset();
  navigateTo('/browse', { replace: true });
});
</script>

<template>
  <p>SIGNOUT</p>
</template>
