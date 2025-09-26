<script lang='ts' setup>
import type { RouteLocationRaw } from 'vue-router';

const $props = defineProps<{
  name: string;
  icon: string;
  id: string;
  requiresAuth?: boolean;
}>();

const isHovered = ref(false);
const imgSrc = await import(`@/assets/images/profile/${$props.icon}.webp`);
const to = computed<RouteLocationRaw>(() => ({
  name: 'SwitchProfile-id',
  params: {
    id: $props.id,
  },
}));
</script>

<template>
  <Suspense>
    <template #fallback>
      <div class="app-profile--suspense">
        <div class="skeleton w-21 h-21 rounded-sm" />
        <i class="skeleton text-xs">...</i>
      </div>
    </template>
    <!-- TODO: Insert transition fade upon loading profile -->
    <NuxtLink
      :to
      class="app-profile flex flex-col justify-center items-center text-neutral-500 hover:text-white gap-2"
      @focus="isHovered = true"
      @blur="isHovered = false"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <img
        :src="imgSrc.default"
        :alt="`${name} icon`"
        :class="isHovered ? 'border-white border-2' : ''"
        class="w-21 rounded-sm"
      >
      <i class="text-xs" :class="isHovered ? 'text-white' : ''">{{ name }}</i>
      <Icon
        v-if="requiresAuth"
        name="majesticons:lock-line"
        class="text-neutral-500"
        size="20"
      />
    </NuxtLink>
  </Suspense>
</template>
