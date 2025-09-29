<script setup lang="ts">
import { NAVIGATION_ITEMS } from '~/lib/constants';
</script>

<template>
  <header id="app-header" class="navbar text-primary-content bg-base-300">
    <div class="navbar-start items-center gap-2">
      <nuxt-link to="/browse" class="p-0">
        <AppLogo class="w-25" />
      </nuxt-link>
      <AppDropdown :items="NAVIGATION_ITEMS" label="Browse" />
    </div>
    <div class="navbar-end">
      <AppThemeToggle />
      <!-- <AuthButton /> -->
    </div>
  </header>
</template>
