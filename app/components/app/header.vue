<script setup lang="ts">
</script>

<template>
  <header id="app-header" class="navbar text-primary-content bg-base-300 min-h-10 pt-0 pb-0">
    <div class="navbar-start items-center gap-2 flex-1">
      <nuxt-link to="/browse" class="p-0">
        <AppLogo class="w-35" />
      </nuxt-link>
      <AppNavigation />
    </div>
    <div class="navbar-end w-15">
      <AppThemeToggle />
      <!-- <AuthButton /> -->
    </div>
  </header>
</template>
