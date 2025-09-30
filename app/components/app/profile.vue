<script lang='ts' setup>
import type { RouteLocationRaw } from 'vue-router';

const $props = defineProps<{
  name: string;
  icon: string;
  id: string;
  isList: boolean;
  requiresAuth?: boolean;
}>();

const appStore = useAppStore();
const isHovered = ref(false);
const imgSrc = await import(`@/assets/images/profile/${$props.icon}.webp`);
const to = computed<RouteLocationRaw>(() => ({
  name: 'SwitchProfile-id',
  params: {
    id: $props.id,
  },
  query: {
    requiresAuth: $props.requiresAuth ? 'true' : undefined,
  },
}));

const classes = computed(() => {
  const base = 'app-profile flex min-w-21 items-center gap-2';
  const flow = $props.isList
    ? 'justify-start text-white px-1'
    : 'flex-col justify-center text-neutral-500 hover:text-white';
  return [base, flow].join(' ');
});
const imgClasses = computed(() => {
  const hoveredClasses = isHovered.value ? 'border-white border-2' : '';
  const defaults = 'rounded-sm';
  const modeClasses = $props.isList
    ? 'w-8'
    : 'w-21';

  return [defaults, hoveredClasses, modeClasses].join(' ');
});
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
      replace
      :class="classes"
      @focus="isHovered = true"
      @blur="isHovered = false"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      @click="appStore.imgSource = imgSrc.default"
    >
      <img
        :src="imgSrc.default"
        :alt="`${name} icon`"
        :class="imgClasses"
      >
      <i class="text-xs" :class="isHovered ? 'text-white' : ''">{{ name }}</i>
      <Icon
        v-if="requiresAuth"
        name="majesticons:lock-line"
        class="text-neutral-500"
        :class="{ 'ml-auto': isList }"
        size="20"
      />
    </NuxtLink>
  </Suspense>
</template>
