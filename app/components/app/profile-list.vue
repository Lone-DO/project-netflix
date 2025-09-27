<script lang='ts' setup>
import { PROFILES } from '~/lib/constants';
</script>

<template>
  <section id="browse" class="flex flex-col items-center justify-center gap-4 min-w-screen text-center">
    <h1 class="text-3xl">
      Who's watching?
    </h1>
    <ClientOnly>
      <ul class="flex justify-center flex-wrap items-start gap-2.5">
        <li v-for="profile in PROFILES" :key="profile.id">
          <AppProfile v-bind="profile" />
        </li>
      </ul>
    </ClientOnly>
  </section>
</template>
