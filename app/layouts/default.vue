<script setup lang='ts'>
const appStore = useAppStore();
</script>

<template>
  <div id="layout-default" class="flex min-h-screen flex-col">
    <AppHeader v-if="appStore.profile" />
    <main class="flex flex-1 justify-center items-center overflow-hidden">
      <slot />
    </main>
  </div>
</template>
