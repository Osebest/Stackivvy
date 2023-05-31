<template>
  <div class="bg-[#F9FAFB] text-[#3D0072] contain">
    <div class="padded py-16 md:py-20">
      <h1 class="mb-4 text-[40px] md:text-[60px] font-semibold md:font-bold">
        Our Values
      </h1>
      <p class="text-[14px] md:w-2/4">
        At Ardilla, our mission is to help people across the continent build
        wealth and achieve well thought out financial goals. However, we cannot
        do it alone.
      </p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5 mb-3 md:pt-10">
        <img :src="Frame1" alt="frame" />
        <img :src="Frame2" alt="frame" />
        <img :src="Frame3" alt="frame" class="-mt-10 sm:-mt-12 md:mt-0" />
        <img :src="Frame4" alt="frame" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Frame1, Frame2, Frame3, Frame4 } from "../../assets/Images";
</script>

<style scoped></style>
