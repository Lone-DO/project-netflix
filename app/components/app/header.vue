<script setup lang="ts">
</script>

<template>
  <header id="app-header" class="navbar bg-base-300 min-h-10 py-0 px-8">
    <div class="navbar-start items-center gap-2 flex-1">
      <nuxt-link to="/browse" class="p-0">
        <AppLogo class="w-35" />
      </nuxt-link>
      <AppNavigation />
    </div>
    <div class="navbar-end w-15">
      <AppUserDropdown />
    </div>
  </header>
</template>
