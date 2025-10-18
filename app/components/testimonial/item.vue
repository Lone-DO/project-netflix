<script lang='ts' setup>
import type { testimonial } from '~/lib/db/schema';

defineProps<{ item: testimonial; loading?: boolean }>();

const appStore = useAppStore();
</script>

<template>
  <article class="testimonial-item w-full rounded-sm">
    <header class="flex gap-2 items-center flex-1/1 flex-wrap mb-2">
      <template v-if="!item.imageSrc">
        <Icon :name="appStore.icons.user" size="64" />
      </template>
      <Suspense v-if="item.imageSrc">
        <template #fallback>
          <Icon :name="appStore.icons.user" size="64" />
        </template>
        <img
          :alt="item.name"
          :src="item.imageSrc"
          class="w-16 h-16 rounded-full"
        >
      </Suspense>
      <!-- TODO: Use item.linked_in for external RouterLink that opens new tab -->
      <h3 :class="loading && 'skeleton min-h-7 min-w-32'" class="text-xl font-medium">
        {{ item.name }}
      </h3>
      <i :class="loading && 'skeleton min-h-5 min-w-20'" class="flex-1/1 font-medium">
        {{ item.position }}
      </i>
    </header>
    <div class="w-full flex max-lg:flex-col-reverse items-start gap-x-8">
      <p :class="loading && 'skeleton min-h-3 w-full'" class="flex-1 text-justify text-base">
        {{ item.review }}
      </p>
      <aside class="flex flex-col gap-4 items-start justify-center md:min-w-50">
        <TestimonialTag
          :loading
          tag="Date"
          :value="item.date"
        />
        <TestimonialTag
          :loading
          tag="Company"
          value="Virtual Peaker"
        />
        <TestimonialTag
          :loading
          tag="Relationship"
          :value="item.relationship"
        />
      </aside>
    </div>
  </article>
</template>
