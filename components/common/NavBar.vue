<template>
  <div
    class="common-nav-bar-container flex flex-col justify-center items-center"
  >
    <div
      class="common-nav-bar bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center rounded-full"
    >
      <nav class="px-4 py-2">
        <ul class="flex space-x-4 text-gray-300">
          <li><Nuxtlink to="/" class="hover:text-white">Home</Nuxtlink></li>
          <li><Nuxtlink class="hover:text-white">Features</Nuxtlink></li>
          <li><Nuxtlink class="hover:text-white">Parters</Nuxtlink></li>
          <li><Nuxtlink class="hover:text-white">FAQ</Nuxtlink></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.common-nav-bar-container {
  height: 40px;
  padding-top: 10px;
}

.common-nav-bar {
  height: 30px;
  line-gap-override: 30px;
  min-width: 600px;
}
</style>
