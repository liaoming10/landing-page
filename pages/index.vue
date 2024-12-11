<script setup lang="ts"></script>

<template>
  <div class="page-list flex flex-col items-center justify-center">
    <FeaturesWaitlistLabelMini />
    <CommonTitlePrimary />
    <FeaturesWaitlistBoxContainer>
      <FeaturesWaitlistBoxHeader />
      <FeaturesWaitlistBoxDescription />
      <FeaturesWaitlistBoxJoinButton />
    </FeaturesWaitlistBoxContainer>
  </div>
</template>

<style lang="scss" scoped>
.page-list {
  height: calc(100vh - 100px);
}
</style>
