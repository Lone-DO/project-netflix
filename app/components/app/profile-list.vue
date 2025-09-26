<script lang='ts' setup>
const profiles = [
  { id: 'recruiter', icon: '102', name: 'Recruiter' },
  { id: 'engineer', icon: '161', name: 'Engineer' },
  { id: 'normal', icon: '93', name: 'Anonymous' },
  { id: 'kids', icon: '16', name: 'Kids' },
  { id: 'admin', icon: '133', name: 'Admin', requiresAuth: true },
];
</script>

<template>
  <section id="profiles-list" class="flex flex-col items-center justify-center gap-4 min-w-screen text-center">
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
</template>
