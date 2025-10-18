import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import type { testimonial } from '~/lib/db/schema';

import Component from '~/components/testimonial/item.vue';

const props = {
  item: {
    name: '',
    date: '',
    id: 0,
    linkedIn: null,
    imageSrc: null,
    review: '',
    relationship: '',
    position: '',
  } as testimonial,
};

describe('appContent', () => {
  it('mounts', async () => {
    const wrapper = await mountSuspended(Component, { props });
    expect(wrapper.find('.testimonial-item').exists()).toBeTruthy();
  });
});
