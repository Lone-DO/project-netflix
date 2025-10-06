import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';

import Component from '~/components/app/form-field.vue';

describe('appFormField', () => {
  it('mounts', async () => {
    const parentComponent = {
      components: {
        Component,
      },
      template: `
        <form>
          <Component name='test' />
        </form>
      `,
    };
    const wrapper = await mountSuspended(parentComponent);
    expect(wrapper.find('.app-form-field').exists()).toBeTruthy();
  });
});
