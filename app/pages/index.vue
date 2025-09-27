<script setup lang="ts">
definePageMeta({
  layout: 'standalone',
});
const hasStarted = ref(false);
const debounce = ref<number>();
const transition = ref<number>();
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
onUnmounted(cleanup);
</script>

<template>
  <section
    id="intro"
    class="cursor-pointer p-4"
    @click="start"
  >
    <img
      alt="Dayshawn Losovoj"
      src="@/assets/images/logo.svg"
      class="transform transition opacity duration-6000 ease-in-out"
      :class="{ 'scale-100': !hasStarted, 'scale-800': hasStarted, 'opacity-100': !hasStarted, 'opacity-0': hasStarted }"
    >
  </section>
</template>
