<template>
  <Analytics />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
useHead({
  titleTemplate: `%S - Lm10's Web Course`,
});
</script>
