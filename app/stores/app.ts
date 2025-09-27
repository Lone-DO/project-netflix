import type { PROFILE } from '~/lib/types';

export const useAppStore = defineStore('appStore', () => {
  const imgSource = ref<any>(null);
  const isMounted = ref(false);
  const profile = ref<PROFILE | null>(null);
  watch(profile, (item) => {
    try {
      localStorage.setItem('profile', JSON.stringify(item));
    }
    catch (error) {
      console.error(error);
    }
  });
  onMounted(() => {
    const cache = JSON.parse(localStorage.getItem('profile') || '{}');
    if (cache) {
      profile.value = cache;
    }
    isMounted.value = true;
  });
  return {
    imgSource,
    profile,
  };
});
