<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen gap-4 text-white/80"
  >
    <ContentDoc class="text-center"></ContentDoc>
    <UButton
      class="px-6 bg-white/70 text-black hover:bg-grap-200"
      color="primary"
      variant="solid"
      label="Button"
      to="/"
    >
      links 回首页！👍</UButton
    >
  </div>
</template>

<script setup>
definePageMeta({
  layout: "other",
});
</script>

<style scoped></style>
