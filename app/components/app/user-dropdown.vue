<script setup lang="ts">
import { USER_ITEMS } from '~/lib/constants';

const appStore = useAppStore();
</script>

<template>
  <app-dropdown
    :items="USER_ITEMS"
    class="dropdown-end"
    list-classes="p-0"
    open-by="hover"
  >
    <template #default>
      <i v-if="!appStore.imgSource" class="skeleton w-8 h-8" />
      <img
        v-if="appStore.imgSource"
        :src="appStore.imgSource || ''"
        :alt="String(appStore.profile?.id)"
        class="w-8 h-8"
      >
    </template>
    <template #prefix>
      <AppProfileList mode="list" :exclude-current="true" />
    </template>
    <template #affix>
      <ul class="flex flex-col items-center justify-center">
        <li>
          <AppThemeToggle />
        </li>
      </ul>
    </template>
  </app-dropdown>
</template>
