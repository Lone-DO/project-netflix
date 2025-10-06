import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import Component from '~/components/app/dropdown.vue';

const $props = {
  items: [],
};
describe('appDropdown', () => {
  it('mounts', async () => {
    const wrapper = await mountSuspended(Component, { props: $props });
    expect(wrapper.find('.app-dropdown').exists()).toBeTruthy();
  });
});
