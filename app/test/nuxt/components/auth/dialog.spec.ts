import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import Component from '~/components/auth/dialog.vue';

const $props = {
  isOpen: false,
};
describe('appDialog', () => {
  it('mounts', async () => {
    const wrapper = await mountSuspended(Component, { props: $props });
    expect(wrapper.find('#auth-dialog').exists()).toBeTruthy();
  });
});
