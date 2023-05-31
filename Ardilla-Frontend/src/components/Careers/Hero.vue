<template>
  <div class="tract contain">
    <div class="padded flex justify-center items-center">
      <img src="@/assets/Images/careers-hero.png" alt="hero" class="w-[80%]" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.tract {
  padding-top: 130px;
  padding-bottom: 80px;

  @media (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 60px;
  }
}
</style>
