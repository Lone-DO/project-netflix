<script lang='ts' setup>
import type { testimonial } from '~/lib/db/schema';

/**
 * TODO: Render out List of Testimonials/ Received letters of Recommendations
 * Wrap up: Experience should exist as items in the API, to be scalable without modifying code
 */

const {
  data,
  status,
} = useFetch<testimonial[]>('/api/testimonials', {
  lazy: true,
});

const isLoading = computed(() => status.value === 'pending');
const skeletonItem = { date: '', relationship: '', company: '' } as testimonial & { company: string };
</script>

<template>
  <section class="w-full flex-1 flex flex-col items-start">
    <h1 class="text-2xl">
      Testimonials
    </h1>
    <ul class="w-full">
      <li v-if="isLoading" class="py-2">
        <TestimonialItem :item="skeletonItem" :loading="true" />
      </li>
      <li v-if="!isLoading && !data?.length">
        <p>No Testimonials Found</p>
        <!-- TODO: Add Button/Form for users to Submit Reviews directly via website -->
      </li>
      <template v-if="!isLoading">
        <li
          v-for="item in data"
          :key="item.id"
          class="py-2"
        >
          <TestimonialItem :item />
        </li>
      </template>
    </ul>
  </section>
</template>
