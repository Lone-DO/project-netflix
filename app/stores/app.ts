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
    syncIcons();
  });

  function reset() {
    /**
     * Global Reset handler
     * TODO: Integrate future store clearing logic here
     * Called when user loads root `/` page
     */
    imgSource.value = null;
    profile.value = null;
  }
  return {
    icons,
    imgSource,
    profile,
    reset,
  };
});
