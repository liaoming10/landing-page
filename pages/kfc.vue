<template>
  <div class="page-list flex flex-col items-center justify-center">
    <FeaturesWaitlistBoxContainer class="w-1/2 my-4">
      <div
        v-if="randomArticle"
        class="text-white/70 my-4 markdown-body text-left bg-transparent"
      >
        <ContentRendererMarkdown :value="randomArticle.body" />
      </div>
    </FeaturesWaitlistBoxContainer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "kfc",
  //   ssr: false,
});

const randomArticle = ref(null);

const count = await queryContent("kfc").count();

const randomIndex = Math.floor(Math.random() * count);

const articles = await queryContent("kfc").limit(1).skip(randomIndex).find();

randomArticle.value = articles[0];
</script>

<style lang="scss" scoped>
.page-list {
  height: calc(100vh - 100px);
}
</style>
