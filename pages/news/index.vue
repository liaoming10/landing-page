<template>
  <div class="container mx-auto px-4">
    <FeaturesWaitlistBoxContainer class="w-2/3 my-6 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <ContentList path="/news">
          <template #default="{ list }">
            <div v-for="newsItem in list" :key="newsItem._path" class="bg-white rounded-lg overflow-hidden shadow-lg">
              <NuxtLink :to="newsItem._path" class="block hover:opacity-75 transition duration-300">
                <div class="p-4">
                  <img v-if="newsItem.image" :src="newsItem.image" :alt="newsItem.title" class="w-full h-48 object-cover mb-4" />
                  <h2 class="text-xl font-semibold mb-2">{{ newsItem.title }}</h2>
                  <p class="text-gray-600 mb-4">{{ newsItem.description }}</p>
                  <div class="flex justify-between items-center text-sm text-gray-500">
                    <span>{{ newsItem.date }}</span>
                    <span>阅读更多 &rarr;</span>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </template>
          <template #not-found>
            <p>No articles found.</p>
          </template>
        </ContentList>
      </div>
    </FeaturesWaitlistBoxContainer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "news",
});
</script>
