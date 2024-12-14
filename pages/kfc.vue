<template>
  <div class="page-list flex flex-col items-center justify-center">
    <FeaturesWaitlistBoxContainer
      class="w-full md:w-4/5 lg:w-1/2 xl:w-1/2 my-4"
    >
      <div v-if="loading" class="text-center">
        <div class="spinner"></div>
        <p class="mt-4">正在加载精彩内容，请稍后。。。</p>
      </div>
      <div
        v-else-if="randomArticle"
        class="text-white/70 my-4 markdown-body text-left bg-transparent"
      >
        <ContentRenderer :value="randomArticle">
          <div
            class="head-img-container rounded-lg overflow-hidden mb-4"
            style="position: relative; padding-top: 33.3%"
          >
            <img
              :src="randomArticle.image"
              :alt="randomArticle.title"
              class="transition-opacity duration-300 hover:opacity-80"
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
              "
            />
          </div>
          <ContentRendererMarkdown :value="randomArticle" />
          <div class="tags mt4">
            <span
              v-for="tag in randomArticle.tags"
              :key="tag"
              class="label inline-block bg-gray-500 bg-opcity-50 text-gray-300 text-xs px-2 py-1 rounded-full mr-2 mb-2 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
              >#{{ tag }}</span
            >
          </div>
        </ContentRenderer>
      </div>
      <button
        @click="refreshContent"
        class="mt-6 px-6 py-2 bg-transparent text-gray-300 border border-gray-300 rounded hover:bg-gray-300 hover:text-gray-800 transition-all duration-300 ease-in-out opacity-80 hover:opacity-100"
      >
        refresh content
      </button>
    </FeaturesWaitlistBoxContainer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "kfc",
  //   ssr: false,
});

const loading = ref(true);

// const randomArticle = ref(null);
const randomArticle = useState("randomArticle", () => null);

const fetchRandomArticle = async () => {
  const count = await queryContent("kfc").count();

  const randomIndex = Math.floor(Math.random() * count);

  const articles = await queryContent("kfc").limit(1).skip(randomIndex).find();

  // randomArticle.value = articles[0];
  randomArticle.value = articles[0];
  loading.value = false;
};

onMounted(() => {
  fetchRandomArticle();
});

const refreshContent = () => {
  loading.value = true;
  setTimeout(() => {
    fetchRandomArticle();
  }, 1500);
};
</script>

<style lang="scss" scoped>
.page-list {
  min-height: calc(100vh - 100px);
}
.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #ffffff;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

ContentRenderer img {
  transition: transform 0.3s ease-in-out;
}
ContentRenderer:hover img {
  transform: scale(1.05);
}
</style>
