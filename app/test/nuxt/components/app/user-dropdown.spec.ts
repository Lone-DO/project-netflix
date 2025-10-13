import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import Component from '~/components/app/user-dropdown.vue';

describe('appUserDropdown', () => {
  it('mounts', async () => {
    const wrapper = await mountSuspended(Component);
    const appStore = useAppStore();
    expect(appStore.profile?.icon).toBe(undefined);
    expect(appStore.imgSource).toBe(null);
    expect(wrapper.find('.app-user-dropdown').exists()).toBeTruthy();
  });
});
