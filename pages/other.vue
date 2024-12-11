<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen gap-4 text-white/80"
  >
    <h2>✨ Join our waitlist 🎉</h2>
    <p>🚀 Sign up to be notified when we launch!</p>
    <UButton
      class="px-6 mt-4 bg-white/70 text-black hover:bg-grap-200"
      color="primary"
      variant="solid"
      label="Button"
      to="/"
      >回首页！👍</UButton
    >
  </div>
</template>

<script setup>
definePageMeta({
  layout: "other",
});
</script>

<style scoped></style>
