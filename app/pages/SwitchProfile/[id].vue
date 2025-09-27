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
  <section id="SwitchProfile-id" class="flex justify-center items-center relative w-40 h-40">
    <img
      class="w-15"
      :src="appStore.imgSource"
      :alt="String($route.params.id)"
    >
    <img
      class="w-30 animate-spin absolute top-1/7"
      src="@/assets/images/spinner.png"
      alt="loading image"
    >
  </section>
</template>
