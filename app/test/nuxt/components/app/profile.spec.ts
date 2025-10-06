import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import Component from '~/components/app/profile.vue';

const $props = {
  name: 'Test',
  icon: '',
  id: '0',
  isList: false,
};
describe('appProfile', () => {
  it('mounts', async () => {
    const wrapper = await mountSuspended(Component, { props: $props });
    expect(wrapper.find('.app-profile').exists()).toBeTruthy();
  });
});
