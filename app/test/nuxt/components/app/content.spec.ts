import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import Component from '~/components/app/content.vue';

describe('appContent', () => {
  it('mounts', async () => {
    const wrapper = await mountSuspended(Component);
    expect(wrapper.find('#content').exists()).toBeTruthy();
  });
});
