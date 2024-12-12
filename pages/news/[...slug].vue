<template>
  <div class="page-list flex flex-col items-center justify-center">
    <FeaturesWaitlistBoxContainer class=" w-2/3 my-4">
      <ContentDoc class="text-gray-600 my-4" />
      <UButton
        class="px-6 bg-white/70 text-black hover:bg-grap-200"
        color="primary"
        variant="solid"
        label="Button"
        to="/"
        >about 回首页！👍</UButton
      >
    </FeaturesWaitlistBoxContainer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "news",
});
</script>
