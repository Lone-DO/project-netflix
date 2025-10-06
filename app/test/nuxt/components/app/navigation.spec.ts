import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import Component from '~/components/app/navigation.vue';

describe('appNavigation', () => {
  it('mounts', async () => {
    const wrapper = await mountSuspended(Component);
    expect(wrapper.find('#app-navigation').exists()).toBeTruthy();
  });
});
