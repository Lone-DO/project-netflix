import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import Component from '~/components/app/theme-toggle.vue';

describe('appThemeToggle', () => {
  it('mounts', async () => {
    const wrapper = await mountSuspended(Component);
    expect(wrapper.find('#app-theme-toggle').exists()).toBeTruthy();
  });
});
