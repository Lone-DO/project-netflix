<script lang='ts' setup>
import { PROFILES } from '~/lib/constants';

const $props = withDefaults(defineProps<{
  mode?: 'default' | 'list';
  excludeCurrent?: boolean;
}>(), {
  mode: 'default',
});

const appStore = useAppStore();
const isList = computed(() => $props.mode === 'list');
const classes = computed(() => {
  const defaults = 'flex justify-center flex-wrap items-start ';
  const modeClasses = isList.value
    ? 'flex-col'
    : 'gap-2.5';

  return [defaults, modeClasses].join(' ');
});
const listClasses = computed(() => {
  return !isList.value
    ? ''
    : 'w-full';
});

const filtered = PROFILES.filter((profile) => {
  return profile.id && profile.id !== appStore.profile?.id;
});
</script>

<template>
  <ClientOnly>
    <ul id="app-profile-list" :class="classes">
      <li
        v-for="profile in (excludeCurrent ? filtered : PROFILES)"
        :key="profile.id"
        :class="listClasses"
      >
        <AppProfile v-bind="profile" :is-list />
      </li>
    </ul>
  </ClientOnly>
</template>
