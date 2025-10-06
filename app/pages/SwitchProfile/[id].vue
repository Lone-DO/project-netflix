<script lang='ts' setup>
import { PROFILES } from '~/lib/constants';

definePageMeta({
  layout: 'standalone',
});
const $route = useRoute();
const appStore = useAppStore();
const requiresAuth = ref(false);
const hasValidPinCode = ref(false);
const debounce = ref<NodeJS.Timeout | null>(null);
const profile = computed(() => PROFILES.find(item => item.id === $route.params.id));

onMounted(async () => {
  if (!$route.params.id || !profile.value || !appStore.imgSource) {
    return reject();
  }
  if (profile.value?.requiresAuth) {
    requiresAuth.value = true;
    return null;
  }
  return proceed();
});

function reject() {
  if (hasValidPinCode.value) {
    return;
  }
  appStore.profile = null;
  return navigateTo('/browse');
}

function proceed() {
  debounce.value = setTimeout(() => {
    appStore.profile = profile.value || null;
    navigateTo('/browse');
  }, 2000);
}
</script>

<template>
  <section id="SwitchProfile-id" class="flex justify-center items-center relative w-40 h-40">
    <i v-if="!appStore.imgSource" class="w-15 h-15 skeleton" />
    <img
      v-if="appStore.imgSource"
      class="w-15"
      :src="appStore.imgSource"
      :alt="String($route.params.id)"
    >
    <img
      class="w-30 animate-spin absolute top-1/7"
      src="@/assets/images/spinner.png"
      alt="loading image"
    >
    <AuthDialog
      v-if="requiresAuth"
      :is-open="requiresAuth"
      @on-valid="hasValidPinCode = true"
      @on-closed="reject"
    />
  </section>
</template>
