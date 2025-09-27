<script lang='ts' setup>
import { PROFILES } from '~/lib/constants';

definePageMeta({
  layout: 'standalone',
});
const $route = useRoute();
const appStore = useAppStore();
const debounce = ref<number | null>(null);

onMounted(async () => {
  const profile = PROFILES.find(item => item.id === $route.params.id);
  if (!$route.params.id || !profile || !appStore.imgSource) {
    clear();
  }
  else {
    debounce.value = setTimeout(() => {
      appStore.profile = profile;
      navigateTo('/browse');
    }, 2000);
  }
});

function clear() {
  appStore.profile = null;
  navigateTo('/browse');
}
</script>

<template>
  <section id="SwitchProfile-id" class="relative">
    <img :src="appStore.imgSource" :alt="String($route.params.id)">
    <!-- <Icon /> -->
  </section>
</template>
