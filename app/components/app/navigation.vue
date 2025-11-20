<script lang='ts' setup>
import { NAVIGATION_ITEMS } from '~/lib/constants';
</script>

<template>
  <nav id="app-navigation">
    <AppDropdown
      :items="NAVIGATION_ITEMS"
      label="Browse"
      class="sm:hidden"
    />
    <ul class="hidden sm:flex flex-row flex-nowrap menu dropdown-content rounded-box z-1 p-0 gap-1">
      <li v-for="(item, index) in NAVIGATION_ITEMS" :key="index">
        <NuxtLink :to="item?.to" class="p-1">
          <span>{{ item.label }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
