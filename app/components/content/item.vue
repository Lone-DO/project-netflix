<script setup lang="ts">
defineProps<{
  index: number;
  src: string;
}>();
</script>

<template>
  <article class="content-item relative w-fit shrink-0 px-3 py-1 md:px-5 md:py-1.5 lg:px-6 lg:py-2 rounded-md hover:scale-105 transition-all duration-300 ease-in-out">
    <span class="absolute bottom-[12.5%] left-0 md:left-1 lg:left-2 z-10 [text-shadow:var(--text-shadow-wrapper)] text-white dark:text-black text-6xl md:text-7xl lg:text-8xl font-extrabold">{{ index }}</span>
    <img
      :src="src"
      alt=""
      class="object-cover z-0 w-28 h-39 md:w-35 md:h-49 lg:w-45 lg:h-64 rounded-md"
    >
  </article>
</template>
