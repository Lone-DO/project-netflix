import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import Component from '~/components/testimonial/tag.vue';

describe('appContent', () => {
  it('mounts', async () => {
    const wrapper = await mountSuspended(Component, { props: { value: '', tag: '' } });
    expect(wrapper.find('.testimonial-tag').exists()).toBeTruthy();
  });
});
