import type { Icons, PROFILE } from '~/lib/types';

import { DARK_MODE_ICONS, LIGHT_MODE_ICONS } from '~/lib/constants';

export const useAppStore = defineStore('appStore', () => {
  /** Colors */
  const colorMode = useColorMode();
  const icons = ref<Icons>(LIGHT_MODE_ICONS);
  function syncIcons() {
    if ((colorMode.value) === 'dark') {
      icons.value = DARK_MODE_ICONS;
    }
    else {
      icons.value = LIGHT_MODE_ICONS;
    }
  }
  effect(syncIcons);
  /**
   * Dev Note: `syncIcons` triggers 3x during initial page load due to SSR and Client staging
   * Must propagate onMounted due to SSR not having access to localStorage cache
   * Prevents initial page load from having incorrect icons
   */
  /** PROFILE */
  const isMounted = ref(false);
  const profile = ref<PROFILE | null>(null);
  const imgSource = ref<any>(null);
  async function syncImageSource() {
    if (!profile.value?.icon) {
      imgSource.value = '';
    }
    const src = await import(`@/assets/images/profile/${profile.value?.icon}.webp`);
    imgSource.value = src.default;
  }
  watch(profile, (item) => {
    try {
      localStorage.setItem('profile', JSON.stringify(item));
      syncImageSource();
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
    syncIcons();
  });

  function reset() {
    /**
     * Global Reset handler
     * TODO: Integrate future store clearing logic here
     * Called when user loads root `/` page
     */
    profile.value = null;
  }
  return {
    icons,
    imgSource,
    profile,
    reset,
  };
});
