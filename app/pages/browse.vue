<script setup lang="ts">
const appStore = useAppStore();
</script>

<template>
  <section id="browse" class="flex flex-col items-center justify-center gap-4 min-w-screen text-center">
    <!-- TODO: Add fallback element till app is ready -->
    <template v-if="!appStore.profile">
      <h1 class="text-3xl">
        Who's watching?
      </h1>
      <AppProfileList />
    </template>
    <AppContent v-else-if="appStore.profile" />
  </section>
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
