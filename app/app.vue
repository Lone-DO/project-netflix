<script lang='ts' setup>
import audio from '@/assets/audio/netflix.mp3';

const player = useTemplateRef('player');
const playerStore = usePlayerStore();
onMounted(() => playerStore.element = player.value);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <audio ref="player" :src="audio" />
  </NuxtLayout>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  scale: 0.5;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
