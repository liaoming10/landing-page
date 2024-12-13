<template>
  <Analytics />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
useHead({
  titleTemplate: `%s - Lm10's Web Course`,
});
</script>
