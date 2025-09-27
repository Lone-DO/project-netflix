<script setup lang="ts">
const appStore = useAppStore();
</script>

<template>
  <AppProfileList v-if="!appStore.profile" />
  <AppContent v-else-if="appStore.profile" />
</template>

<style scoped>
/* TODO: CLeanup Animation on page load
  Nuxt Transitions work onRoute change,
  but no on initial load of target page
*/
@keyframes grow {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
#browse {
  animation: grow 0.5s;
}
</style>
