<script setup lang="ts">
const appStore = useAppStore();
</script>

<template>
  <section
    v-if="appStore.isMounted && !appStore.profile"
    id="login"
    class="w-full flex-1 flex flex-col items-center justify-center gap-4 text-center"
  >
    <!-- TODO: Add fallback element till app is ready -->
    <h1 class="text-3xl">
      Who's watching?
    </h1>
    <AppProfileList />
  </section>
  <ContentList v-else-if="appStore.isMounted && appStore.profile" />
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
