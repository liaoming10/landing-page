<template>
  <div
    class="w-full h-screen flex flex-col items-center justify-center bg-[url('/bg.jpg')] bg-cover"
  >
    <div
      class="mb-4 px-4 py-2 rounded-full border-white/20 border backdrop-blur-sm bg-black/30 animate-pulse duration-500"
    >
      <span class="flex items-center text-white/80">
        <UIcon name="i-heroicons-queue-list" class="mr-2" />
        waitlist
      </span>
    </div>
    <div class="mb-8">
      <h1 class="text-6xl font-bold text-white/80">Comming Soon!</h1>
    </div>
    <div
      class="bg-white/30 backdrop-blur-sm p-8 rounded-lg shadow-md text-center border border-white/30"
    >
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">
          独立开发者Lm10正式出发✈️
        </h1>
      </div>
      <p class="text-gray-600 my-4">
        🚧我们正在开发一系列的工具，帮助您更好地工作和生活！🚧
      </p>
      <UButton
        class="px-6 mt-4 bg-white/70 text-black hover:bg-grap-200"
        color="primary"
        variant="solid"
        label="Button"
        target="_blank"
        to="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__QVZLmpUNUdCWE5SRUVXWTdENU82VDMzOVQ3Q1o1QS4u"
        >立即申请！👍</UButton
      >
    </div>
    <div class="mt-8 flex space-x-2 text-xl text-white">
      <a title="关注 x@interjc" href="https://x.com/interjc" target="_blank">
        <UIcon name="i-simple-icons-x" class="ml-2" />
      </a>
      <a title="关注公众号" href="https://s.zhaikr.com/vj" target="_blank">
        <UIcon name="i-simple-icons-wechat" class="ml-2" />
      </a>
      <a title="关注web开发课程" href="https://s.zhaikr.com/c" target="_blank">
        <UIcon name="i-heroicons-academic-cap" class="ml-2" />
      </a>
    </div>
  </div>
</template>
