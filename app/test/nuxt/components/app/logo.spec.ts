import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import Component from '~/components/app/logo.vue';

describe('appLogo', () => {
  it('mounts', async () => {
    const wrapper = await mountSuspended(Component);
    expect(wrapper.find('#app-logo').exists()).toBeTruthy();
  });
});
