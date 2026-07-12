<script lang='ts' setup>
import { useAppStore } from '@/stores/app';
/** TODO: OnMount, Logout of AppStore and redirect to /browse */
const appStore = useAppStore();
useRouter().replace('/');
appStore.reset();
</script>

<template>
  <p>SIGNOUT</p>
</template>
