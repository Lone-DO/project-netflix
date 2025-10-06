<script setup lang="ts">
definePageMeta({
  layout: 'standalone',
});
const hasStarted = ref(false);
const debounce = ref<number>();
const transition = ref<NodeJS.Timeout | number>();
const appStore = useAppStore();
const playerStore = usePlayerStore();
function start() {
  if (!hasStarted.value) {
    clearTimeout(debounce.value);
    hasStarted.value = true;
    playerStore?.play();
    transition.value = setTimeout(() => navigateTo('/browse'), 2000);
  }
}

function cleanup() {
  hasStarted.value = false;
  clearTimeout(debounce.value);
  clearTimeout(transition.value);
}

onMounted(() => appStore.reset());

onUnmounted(cleanup);
</script>

<template>
  <section
    id="intro"
    class="cursor-pointer p-4"
    @click="start"
  >
    <AppLogo
      :class="{ 'scale-100': !hasStarted, 'scale-800': hasStarted, 'opacity-100': !hasStarted, 'opacity-0': hasStarted }"
    />
  </section>
</template>
