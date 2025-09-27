<script setup lang="ts">
definePageMeta({
  layout: 'standalone',
});

const profiles = [
  { id: 'recruiter', icon: '102', name: 'Recruiter' },
  { id: 'engineer', icon: '161', name: 'Engineer' },
  { id: 'normal', icon: '93', name: 'Anonymous' },
  { id: 'kids', icon: '16', name: 'Kids' },
  { id: 'admin', icon: '133', name: 'Admin', requiresAuth: true },
];
</script>

<template>
  <LazyClientOnly>
    <section id="browse" class="flex flex-col items-center justify-center gap-4 min-w-screen text-center">
      <!-- TODO: Insert transition fade upon loading profile -->
      <h1 class="text-3xl">
        Who's watching?
      </h1>
      <ul class="flex justify-center flex-wrap items-start gap-2.5">
        <li v-for="profile in profiles" :key="profile.id">
          <AppProfile v-bind="profile" />
        </li>
      </ul>
    </section>
  </LazyClientOnly>
</template>

<style scoped>
/* TODO: CLeanup Animation on page load
  Nuxt Transitions work onRoute change,
  but no on initial load of target page
*/
@keyframes grow {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
#browse {
  animation: grow 0.5s;
}
</style>
