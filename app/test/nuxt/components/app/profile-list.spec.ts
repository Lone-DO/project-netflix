import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import Component from '~/components/app/profile-list.vue';

describe('appProfileList', () => {
  it('mounts', async () => {
    const wrapper = await mountSuspended(Component);
    expect(wrapper.find('#app-profile-list').exists()).toBeTruthy();
  });
});
