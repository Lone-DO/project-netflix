<script lang='ts' setup>
defineProps<{ value: string; tag: string; loading?: boolean }>();
</script>

<template>
  <p class="flex gap-2 text-sm" :class="loading && 'skeleton min-w-40 min-h-3'">
    <template v-if="!loading">
      <span class="text-neutral-500">{{ tag }}:</span>
      <span>{{ value }}</span>
    </template>
  </p>
</template>
