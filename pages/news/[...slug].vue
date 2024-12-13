<template>
  <div class="page-list flex flex-col items-center justify-center">
    <FeaturesWaitlistBoxContainer class=" w-2/3 my-4">
      <ContentDoc class="text-white/70 my-4 markdown-body text-left bg-transparent" />
      <UButton
        class="px-6 bg-white/70 text-black hover:bg-grap-200"
        color="primary"
        variant="solid"
        label="Button"
        to="/news"
        >回到 news ！👍</UButton
      >
    </FeaturesWaitlistBoxContainer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "news",
});
</script>

<style scoped>
</style>
